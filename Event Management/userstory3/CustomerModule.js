"use strict";
// User Story 3: TypeScript Customer Registration Module
// Demonstrates interfaces, classes, decorators, enums, and tuples
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCategory = exports.CustomerStatus = exports.CustomerIterator = exports.CustomerCollection = exports.CustomerRepository = exports.Customer = void 0;
exports.getCustomerStats = getCustomerStats;
// ============================================
// Enums
// ============================================
/**
 * Enum for customer status
 */
var CustomerStatus;
(function (CustomerStatus) {
    CustomerStatus["ACTIVE"] = "ACTIVE";
    CustomerStatus["INACTIVE"] = "INACTIVE";
    CustomerStatus["SUSPENDED"] = "SUSPENDED";
    CustomerStatus["PENDING"] = "PENDING";
})(CustomerStatus || (exports.CustomerStatus = CustomerStatus = {}));
/**
 * Enum for event categories
 */
var EventCategory;
(function (EventCategory) {
    EventCategory["TECHNOLOGY"] = "Technology";
    EventCategory["FINANCE"] = "Finance";
    EventCategory["MARKETING"] = "Marketing";
    EventCategory["LIFESTYLE"] = "Lifestyle";
})(EventCategory || (exports.EventCategory = EventCategory = {}));
// ============================================
// Decorators
// ============================================
/**
 * Decorator for logging method calls
 */
function LogMethod(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
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
function ValidateEmail(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (email) {
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
function MeasurePerformance(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
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
class Customer {
    /**
     * Constructor for Customer
     */
    constructor(id, firstName, lastName, contact, status = CustomerStatus.PENDING) {
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
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    /**
     * Register customer for an event
     */
    registerForEvent(eventId, eventName, category) {
        const registration = {
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
    getRegistrationCount() {
        return this.registrations.length;
    }
    /**
     * Convert customer to JSON
     */
    toJSON() {
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
exports.Customer = Customer;
/**
 * CustomerRepository class implementing ICustomerRepository
 * Handles CRUD operations for customers
 */
class CustomerRepository {
    constructor() {
        this.customers = new Map();
        this.nextId = 1;
    }
    /**
     * Create a new customer
     */
    create(customer) {
        if (this.customers.has(customer.id)) {
            throw new Error(`Customer with ID ${customer.id} already exists`);
        }
        this.customers.set(customer.id, customer);
        console.log(`Customer created: ${customer.getFullName()}`);
    }
    /**
     * Read a customer by ID
     */
    read(id) {
        return this.customers.get(id);
    }
    /**
     * Update a customer
     */
    update(id, updates) {
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
    delete(id) {
        const deleted = this.customers.delete(id);
        if (deleted) {
            console.log(`Customer with ID ${id} deleted`);
        }
        else {
            console.warn(`Customer with ID ${id} not found`);
        }
        return deleted;
    }
    /**
     * Get all customers
     */
    getAll() {
        return Array.from(this.customers.values());
    }
    /**
     * Get customers by status
     */
    getByStatus(status) {
        return this.getAll().filter(customer => customer.status === status);
    }
    /**
     * Get customers registered for a specific event category
     */
    getByEventCategory(category) {
        return this.getAll().filter(customer => customer.registrations.some(reg => reg.category === category));
    }
}
exports.CustomerRepository = CustomerRepository;
__decorate([
    LogMethod,
    MeasurePerformance,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Customer]),
    __metadata("design:returntype", void 0)
], CustomerRepository.prototype, "create", null);
__decorate([
    LogMethod,
    MeasurePerformance,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], CustomerRepository.prototype, "read", null);
__decorate([
    LogMethod,
    MeasurePerformance,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Boolean)
], CustomerRepository.prototype, "update", null);
__decorate([
    LogMethod,
    MeasurePerformance,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Boolean)
], CustomerRepository.prototype, "delete", null);
__decorate([
    MeasurePerformance,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], CustomerRepository.prototype, "getAll", null);
// ============================================
// Iterator Implementation
// ============================================
/**
 * Custom iterator for iterating through customers
 */
class CustomerIterator {
    constructor(customers) {
        this.index = 0;
        this.customers = customers;
    }
    next() {
        if (this.index < this.customers.length) {
            return {
                value: this.customers[this.index++],
                done: false
            };
        }
        else {
            return {
                value: undefined,
                done: true
            };
        }
    }
}
exports.CustomerIterator = CustomerIterator;
/**
 * Iterable collection of customers
 */
class CustomerCollection {
    constructor() {
        this.customers = [];
    }
    addCustomer(customer) {
        this.customers.push(customer);
    }
    [Symbol.iterator]() {
        return new CustomerIterator(this.customers);
    }
    getCount() {
        return this.customers.length;
    }
}
exports.CustomerCollection = CustomerCollection;
/**
 * Function to get customer statistics
 */
function getCustomerStats(repository) {
    const allCustomers = repository.getAll();
    const activeCustomers = repository.getByStatus(CustomerStatus.ACTIVE).length;
    const inactiveCustomers = repository.getByStatus(CustomerStatus.INACTIVE).length;
    return [allCustomers.length, activeCustomers, inactiveCustomers];
}
//# sourceMappingURL=CustomerModule.js.map