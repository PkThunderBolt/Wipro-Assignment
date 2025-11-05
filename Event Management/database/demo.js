// Bonus Section: Database Integration Demo
// Demonstrates CRUD operations with error handling

const {
    createEvent,
    readEvent,
    readAllEvents,
    updateEvent,
    deleteEvent,
    createCustomer,
    readCustomer,
    readAllCustomers,
    updateCustomer,
    deleteCustomer,
    createRegistration,
    getCustomerRegistrations,
    deleteRegistration,
    db
} = require('./db');

// ============================================
// Demo: Event CRUD Operations
// ============================================

console.log('=== Database Integration Demo ===\n');

// Helper function for async-like behavior
function runDemo() {
    console.log('--- Creating Events ---');
    
    // Create sample events
    const event1 = {
        name: 'Tech Innovation Summit 2026',
        date: '2026-03-15',
        category: 'Technology',
        location: 'Virtual',
        description: 'A global summit on the latest in AI and blockchain',
        attendees: 1500,
        isFeatured: true
    };

    createEvent(event1, (err, result) => {
        if (err) {
            console.error('Error:', err.message);
        } else {
            console.log('Event created:', result);
        }

        const event2 = {
            name: 'Digital Marketing Masterclass',
            date: '2026-05-10',
            category: 'Marketing',
            location: 'London, UK',
            description: 'Hands-on workshop on SEO and content strategy',
            attendees: 450,
            isFeatured: false
        };

        createEvent(event2, (err, result) => {
            if (err) {
                console.error('Error:', err.message);
            } else {
                console.log('Event created:', result);
            }

            // Read all events
            console.log('\n--- Reading All Events ---');
            readAllEvents((err, events) => {
                if (err) {
                    console.error('Error:', err.message);
                } else {
                    console.log(`Total events: ${events.length}`);
                    events.forEach(event => {
                        console.log(`  - ${event.name} (${event.date})`);
                    });
                }

                // Update an event
                console.log('\n--- Updating Event ---');
                updateEvent(1, { attendees: 2000, isFeatured: false }, (err, result) => {
                    if (err) {
                        console.error('Error:', err.message);
                    } else {
                        console.log('Event updated:', result);
                    }

                    // ============================================
                    // Demo: Customer CRUD Operations
                    // ============================================

                    console.log('\n--- Creating Customers ---');

                    const customer1 = {
                        firstName: 'John',
                        lastName: 'Doe',
                        email: 'john.doe@example.com',
                        phone: '555-0101',
                        address: '123 Main St, New York, NY',
                        status: 'ACTIVE'
                    };

                    createCustomer(customer1, (err, result) => {
                        if (err) {
                            console.error('Error:', err.message);
                        } else {
                            console.log('Customer created:', result);
                        }

                        const customer2 = {
                            firstName: 'Jane',
                            lastName: 'Smith',
                            email: 'jane.smith@example.com',
                            phone: '555-0102',
                            address: '456 Oak Ave, Los Angeles, CA',
                            status: 'ACTIVE'
                        };

                        createCustomer(customer2, (err, result) => {
                            if (err) {
                                console.error('Error:', err.message);
                            } else {
                                console.log('Customer created:', result);
                            }

                            // Read all customers
                            console.log('\n--- Reading All Customers ---');
                            readAllCustomers((err, customers) => {
                                if (err) {
                                    console.error('Error:', err.message);
                                } else {
                                    console.log(`Total customers: ${customers.length}`);
                                    customers.forEach(customer => {
                                        console.log(`  - ${customer.firstName} ${customer.lastName} (${customer.email})`);
                                    });
                                }

                                // Update a customer
                                console.log('\n--- Updating Customer ---');
                                updateCustomer(1, { status: 'SUSPENDED' }, (err, result) => {
                                    if (err) {
                                        console.error('Error:', err.message);
                                    } else {
                                        console.log('Customer updated:', result);
                                    }

                                    // ============================================
                                    // Demo: Registration Operations
                                    // ============================================

                                    console.log('\n--- Creating Registrations ---');
                                    createRegistration(1, 1, (err, result) => {
                                        if (err) {
                                            console.error('Error:', err.message);
                                        } else {
                                            console.log('Registration created:', result);
                                        }

                                        createRegistration(2, 2, (err, result) => {
                                            if (err) {
                                                console.error('Error:', err.message);
                                            } else {
                                                console.log('Registration created:', result);
                                            }

                                            // Get customer registrations
                                            console.log('\n--- Getting Customer Registrations ---');
                                            getCustomerRegistrations(1, (err, registrations) => {
                                                if (err) {
                                                    console.error('Error:', err.message);
                                                } else {
                                                    console.log(`Customer 1 registrations: ${registrations.length}`);
                                                    registrations.forEach(reg => {
                                                        console.log(`  - ${reg.eventName} (${reg.date})`);
                                                    });
                                                }

                                                // ============================================
                                                // Demo: Error Handling
                                                // ============================================

                                                console.log('\n--- Error Handling Examples ---');

                                                // Try to create customer with invalid email
                                                const invalidCustomer = {
                                                    firstName: 'Invalid',
                                                    lastName: 'Email',
                                                    email: 'not-an-email',
                                                    status: 'ACTIVE'
                                                };

                                                createCustomer(invalidCustomer, (err, result) => {
                                                    if (err) {
                                                        console.log('Expected error (invalid email):', err.message);
                                                    }

                                                    // Try to read non-existent customer
                                                    readCustomer(999, (err, customer) => {
                                                        if (err) {
                                                            console.log('Expected error (not found):', err.message);
                                                        }

                                                        // Try to update non-existent event
                                                        updateEvent(999, { name: 'Updated' }, (err, result) => {
                                                            if (err) {
                                                                console.log('Expected error (not found):', err.message);
                                                            }

                                                            console.log('\n=== Demo Complete ===');
                                                            console.log('Database file created at: database/events.db');

                                                            // Close database connection
                                                            db.close((err) => {
                                                                if (err) {
                                                                    console.error('Error closing database:', err.message);
                                                                } else {
                                                                    console.log('Database connection closed');
                                                                }
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}

// Run the demo
runDemo();
