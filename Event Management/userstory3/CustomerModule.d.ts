/**
 * Enum for customer status
 */
declare enum CustomerStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    SUSPENDED = "SUSPENDED",
    PENDING = "PENDING"
}
/**
 * Enum for event categories
 */
declare enum EventCategory {
    TECHNOLOGY = "Technology",
    FINANCE = "Finance",
    MARKETING = "Marketing",
    LIFESTYLE = "Lifestyle"
}
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
/**
 * Customer class implementing ICustomer interface
 */
declare class Customer implements ICustomer {
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
    constructor(id: number, firstName: string, lastName: string, contact: ContactInfo, status?: CustomerStatus);
    /**
     * Get full name of customer
     */
    getFullName(): string;
    /**
     * Register customer for an event
     */
    registerForEvent(eventId: number, eventName: string, category: EventCategory): void;
    /**
     * Get number of registered events
     */
    getRegistrationCount(): number;
    /**
     * Convert customer to JSON
     */
    toJSON(): string;
}
/**
 * CustomerRepository class implementing ICustomerRepository
 * Handles CRUD operations for customers
 */
declare class CustomerRepository implements ICustomerRepository {
    private customers;
    private nextId;
    /**
     * Create a new customer
     */
    create(customer: Customer): void;
    /**
     * Read a customer by ID
     */
    read(id: number): Customer | undefined;
    /**
     * Update a customer
     */
    update(id: number, updates: Partial<Customer>): boolean;
    /**
     * Delete a customer
     */
    delete(id: number): boolean;
    /**
     * Get all customers
     */
    getAll(): Customer[];
    /**
     * Get customers by status
     */
    getByStatus(status: CustomerStatus): Customer[];
    /**
     * Get customers registered for a specific event category
     */
    getByEventCategory(category: EventCategory): Customer[];
}
/**
 * Custom iterator for iterating through customers
 */
declare class CustomerIterator implements Iterator<Customer> {
    private index;
    private customers;
    constructor(customers: Customer[]);
    next(): IteratorResult<Customer>;
}
/**
 * Iterable collection of customers
 */
declare class CustomerCollection implements Iterable<Customer> {
    private customers;
    addCustomer(customer: Customer): void;
    [Symbol.iterator](): Iterator<Customer>;
    getCount(): number;
}
/**
 * Type alias for customer statistics tuple
 * [totalCustomers, activeCustomers, inactiveCustomers]
 */
type CustomerStats = [number, number, number];
/**
 * Function to get customer statistics
 */
declare function getCustomerStats(repository: CustomerRepository): CustomerStats;
export { Customer, CustomerRepository, CustomerCollection, CustomerIterator, CustomerStatus, EventCategory, ContactInfo, EventRegistration, ICustomer, ICustomerRepository, CustomerStats, getCustomerStats };
//# sourceMappingURL=CustomerModule.d.ts.map