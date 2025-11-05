// User Story 3: TypeScript Customer Registration Module
// Demonstrates interfaces, classes, decorators, enums, and tuples

// ============================================
// Enums
// ============================================

/**
 * Enum for customer status
 */
enum CustomerStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    SUSPENDED = 'SUSPENDED',
    PENDING = 'PENDING'
}

/**
 * Enum for event categories
 */
enum EventCategory {
    TECHNOLOGY = 'Technology',
    FINANCE = 'Finance',
    MARKETING = 'Marketing',
    LIFESTYLE = 'Lifestyle'
}

// ============================================
// Interfaces
// ============================================

/**
 * Interface for customer contact information
 */
interface ContactInfo {
    email: string;
    phone: string;
    address: string;
}

/**
 * Interface for event registration details
 */
interface EventRegistration {
    eventId: number;
    eventName: string;
    registrationDate: Date;
    category: EventCategory;
}

/**
 * Interface for customer data
 */
interface ICustomer {
    id: number;
    firstName: string;
    lastName: string;
    contact: ContactInfo;
    status: CustomerStatus;
    registrations: EventRegistration[];
    createdAt: Date;
}

/**
 * Interface for customer repository operations
 */
interface ICustomerRepository {
    create(customer: Customer): void;
    read(id: number): Customer | undefined;
    update(id: number, customer: Partial<Customer>): boolean;
    delete(id: number): boolean;
    getAll(): Customer[];
}

// ============================================
// Decorators
// ============================================

/**
 * Decorator for logging method calls
 */
function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`[LOG] Calling method: ${propertyKey} with arguments:`, args);
        const result = originalMethod.apply(this, args);
        console.log(`[LOG] Method ${propertyKey} returned:`, result);
        return result;
    };

    return descriptor;
}

/**
 * Decorator for input validation
 */
function ValidateEmail(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (email: string) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error(`Invalid email format: ${email}`);
        }
        return originalMethod.apply(this, [email]);
    };

    return descriptor;
}

/**
 * Decorator for performance measurement
 */
function MeasurePerformance(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const startTime = performance.now();
        const result = originalMethod.apply(this, args);
        const endTime = performance.now();
        console.log(`[PERFORMANCE] ${propertyKey} executed in ${(endTime - startTime).toFixed(2)}ms`);
        return result;
    };

    return descriptor;
}

// ============================================
// Classes
// ============================================

/**
 * Customer class implementing ICustomer interface
 */
class Customer implements ICustomer {
    id: number;
    firstName: string;
    lastName: string;
    contact: ContactInfo;
    status: CustomerStatus;
    registrations: EventRegistration[];
    createdAt: Date;

    /**
     * Constructor for Customer
     */
    constructor(
        id: number,
        firstName: string,
        lastName: string,
        contact: ContactInfo,
        status: CustomerStatus = CustomerStatus.PENDING
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.contact = contact;
        this.status = status;
        this.registrations = [];
        this.createdAt = new Date();
    }

    /**
     * Get full name of customer
     */
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    /**
     * Register customer for an event
     */
    registerForEvent(eventId: number, eventName: string, category: EventCategory): void {
        const registration: EventRegistration = {
            eventId,
            eventName,
            registrationDate: new Date(),
            category
        };
        this.registrations.push(registration);
    }

    /**
     * Get number of registered events
     */
    getRegistrationCount(): number {
        return this.registrations.length;
    }

    /**
     * Convert customer to JSON
     */
    toJSON(): string {
        return JSON.stringify({
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            contact: this.contact,
            status: this.status,
            registrations: this.registrations,
            createdAt: this.createdAt
        }, null, 2);
    }
}

/**
 * CustomerRepository class implementing ICustomerRepository
 * Handles CRUD operations for customers
 */
class CustomerRepository implements ICustomerRepository {
    private customers: Map<number, Customer> = new Map();
    private nextId: number = 1;

    /**
     * Create a new customer
     */
    @LogMethod
    @MeasurePerformance
    create(customer: Customer): void {
        if (this.customers.has(customer.id)) {
            throw new Error(`Customer with ID ${customer.id} already exists`);
        }
        this.customers.set(customer.id, customer);
        console.log(`Customer created: ${customer.getFullName()}`);
    }

    /**
     * Read a customer by ID
     */
    @LogMethod
    @MeasurePerformance
    read(id: number): Customer | undefined {
        return this.customers.get(id);
    }

    /**
     * Update a customer
     */
    @LogMethod
    @MeasurePerformance
    update(id: number, updates: Partial<Customer>): boolean {
        const customer = this.customers.get(id);
        if (!customer) {
            console.warn(`Customer with ID ${id} not found`);
            return false;
        }

        // Update only provided properties
        Object.assign(customer, updates);
        console.log(`Customer updated: ${customer.getFullName()}`);
        return true;
    }

    /**
     * Delete a customer
     */
    @LogMethod
    @MeasurePerformance
    delete(id: number): boolean {
        const deleted = this.customers.delete(id);
        if (deleted) {
            console.log(`Customer with ID ${id} deleted`);
        } else {
            console.warn(`Customer with ID ${id} not found`);
        }
        return deleted;
    }

    /**
     * Get all customers
     */
    @MeasurePerformance
    getAll(): Customer[] {
        return Array.from(this.customers.values());
    }

    /**
     * Get customers by status
     */
    getByStatus(status: CustomerStatus): Customer[] {
        return this.getAll().filter(customer => customer.status === status);
    }

    /**
     * Get customers registered for a specific event category
     */
    getByEventCategory(category: EventCategory): Customer[] {
        return this.getAll().filter(customer =>
            customer.registrations.some(reg => reg.category === category)
        );
    }
}

// ============================================
// Iterator Implementation
// ============================================

/**
 * Custom iterator for iterating through customers
 */
class CustomerIterator implements Iterator<Customer> {
    private index: number = 0;
    private customers: Customer[];

    constructor(customers: Customer[]) {
        this.customers = customers;
    }

    next(): IteratorResult<Customer> {
        if (this.index < this.customers.length) {
            return {
                value: this.customers[this.index++],
                done: false
            };
        } else {
            return {
                value: undefined as any,
                done: true
            };
        }
    }
}

/**
 * Iterable collection of customers
 */
class CustomerCollection implements Iterable<Customer> {
    private customers: Customer[] = [];

    addCustomer(customer: Customer): void {
        this.customers.push(customer);
    }

    [Symbol.iterator](): Iterator<Customer> {
        return new CustomerIterator(this.customers);
    }

    getCount(): number {
        return this.customers.length;
    }
}

// ============================================
// Tuples Usage
// ============================================

/**
 * Type alias for customer statistics tuple
 * [totalCustomers, activeCustomers, inactiveCustomers]
 */
type CustomerStats = [number, number, number];

/**
 * Function to get customer statistics
 */
function getCustomerStats(repository: CustomerRepository): CustomerStats {
    const allCustomers = repository.getAll();
    const activeCustomers = repository.getByStatus(CustomerStatus.ACTIVE).length;
    const inactiveCustomers = repository.getByStatus(CustomerStatus.INACTIVE).length;

    return [allCustomers.length, activeCustomers, inactiveCustomers];
}

// ============================================
// Export for Module Usage
// ============================================

export {
    Customer,
    CustomerRepository,
    CustomerCollection,
    CustomerIterator,
    CustomerStatus,
    EventCategory,
    ContactInfo,
    EventRegistration,
    ICustomer,
    ICustomerRepository,
    CustomerStats,
    getCustomerStats
};
