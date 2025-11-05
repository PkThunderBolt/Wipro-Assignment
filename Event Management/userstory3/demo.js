"use strict";
// Demo: Customer Registration Module Usage
// This file demonstrates the usage of the TypeScript module
Object.defineProperty(exports, "__esModule", { value: true });
const CustomerModule_1 = require("./CustomerModule");
// ============================================
// Demo: Creating and Managing Customers
// ============================================
console.log('=== Customer Registration Module Demo ===\n');
// Create a customer repository
const repository = new CustomerModule_1.CustomerRepository();
// Create sample customers
const customer1 = new CustomerModule_1.Customer(1, 'John', 'Doe', {
    email: 'john.doe@example.com',
    phone: '555-0101',
    address: '123 Main St, New York, NY'
}, CustomerModule_1.CustomerStatus.ACTIVE);
const customer2 = new CustomerModule_1.Customer(2, 'Jane', 'Smith', {
    email: 'jane.smith@example.com',
    phone: '555-0102',
    address: '456 Oak Ave, Los Angeles, CA'
}, CustomerModule_1.CustomerStatus.ACTIVE);
const customer3 = new CustomerModule_1.Customer(3, 'Bob', 'Johnson', {
    email: 'bob.johnson@example.com',
    phone: '555-0103',
    address: '789 Pine Rd, Chicago, IL'
}, CustomerModule_1.CustomerStatus.INACTIVE);
// ============================================
// Demo: CRUD Operations
// ============================================
console.log('--- Creating Customers ---');
repository.create(customer1);
repository.create(customer2);
repository.create(customer3);
console.log('\n--- Reading Customer ---');
const retrievedCustomer = repository.read(1);
if (retrievedCustomer) {
    console.log(`Retrieved: ${retrievedCustomer.getFullName()}`);
}
console.log('\n--- Updating Customer ---');
repository.update(1, { status: CustomerModule_1.CustomerStatus.SUSPENDED });
console.log('\n--- Registering for Events ---');
customer1.registerForEvent(1, 'Tech Innovation Summit', CustomerModule_1.EventCategory.TECHNOLOGY);
customer1.registerForEvent(2, 'Digital Marketing Masterclass', CustomerModule_1.EventCategory.MARKETING);
customer2.registerForEvent(3, 'Future of Finance Conference', CustomerModule_1.EventCategory.FINANCE);
console.log(`${customer1.getFullName()} registered for ${customer1.getRegistrationCount()} events`);
// ============================================
// Demo: Filtering and Statistics
// ============================================
console.log('\n--- Getting Customer Statistics ---');
const [total, active, inactive] = (0, CustomerModule_1.getCustomerStats)(repository);
console.log(`Total Customers: ${total}`);
console.log(`Active Customers: ${active}`);
console.log(`Inactive Customers: ${inactive}`);
console.log('\n--- Customers by Status ---');
const activeCustomers = repository.getByStatus(CustomerModule_1.CustomerStatus.ACTIVE);
console.log(`Active customers: ${activeCustomers.map(c => c.getFullName()).join(', ')}`);
console.log('\n--- Customers by Event Category ---');
const techCustomers = repository.getByEventCategory(CustomerModule_1.EventCategory.TECHNOLOGY);
console.log(`Technology event registrations: ${techCustomers.map(c => c.getFullName()).join(', ')}`);
// ============================================
// Demo: Iterator Pattern
// ============================================
console.log('\n--- Using Iterator Pattern ---');
const collection = new CustomerModule_1.CustomerCollection();
repository.getAll().forEach(customer => collection.addCustomer(customer));
console.log('Iterating through customers:');
for (const customer of collection) {
    console.log(`  - ${customer.getFullName()} (${customer.status})`);
}
// ============================================
// Demo: Displaying Customer Data
// ============================================
console.log('\n--- Customer Details (JSON) ---');
console.log(customer1.toJSON());
// ============================================
// Demo: Delete Operation
// ============================================
console.log('\n--- Deleting Customer ---');
repository.delete(3);
console.log(`All customers after deletion: ${repository.getAll().map(c => c.getFullName()).join(', ')}`);
console.log('\n=== Demo Complete ===');
//# sourceMappingURL=demo.js.map