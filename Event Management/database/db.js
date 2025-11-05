// Bonus Section: Database Integration with CRUD Operations
// Using SQLite for lightweight database management

const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Database file path
const DB_PATH = path.join(__dirname, 'events.db');

// Initialize database connection
const db = new sqlite3.Database(DB_PATH, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to SQLite database');
        initializeDatabase();
    }
});

// ============================================
// Database Initialization
// ============================================

/**
 * Initialize database tables
 */
function initializeDatabase() {
    // Create events table
    db.run(`
        CREATE TABLE IF NOT EXISTS events (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            date TEXT NOT NULL,
            category TEXT NOT NULL,
            location TEXT NOT NULL,
            description TEXT,
            attendees INTEGER DEFAULT 0,
            isFeatured BOOLEAN DEFAULT 0,
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `, (err) => {
        if (err) {
            console.error('Error creating events table:', err.message);
        } else {
            console.log('Events table initialized');
        }
    });

    // Create customers table
    db.run(`
        CREATE TABLE IF NOT EXISTS customers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            firstName TEXT NOT NULL,
            lastName TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            phone TEXT,
            address TEXT,
            status TEXT DEFAULT 'PENDING',
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `, (err) => {
        if (err) {
            console.error('Error creating customers table:', err.message);
        } else {
            console.log('Customers table initialized');
        }
    });

    // Create registrations table
    db.run(`
        CREATE TABLE IF NOT EXISTS registrations (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            customerId INTEGER NOT NULL,
            eventId INTEGER NOT NULL,
            registrationDate DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (customerId) REFERENCES customers(id),
            FOREIGN KEY (eventId) REFERENCES events(id)
        )
    `, (err) => {
        if (err) {
            console.error('Error creating registrations table:', err.message);
        } else {
            console.log('Registrations table initialized');
        }
    });
}

// ============================================
// CRUD Operations for Events
// ============================================

/**
 * Create a new event
 */
function createEvent(event, callback) {
    const { name, date, category, location, description, attendees, isFeatured } = event;

    // Input validation
    if (!name || !date || !category || !location) {
        return callback(new Error('Missing required fields: name, date, category, location'));
    }

    const query = `
        INSERT INTO events (name, date, category, location, description, attendees, isFeatured)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.run(query, [name, date, category, location, description, attendees, isFeatured ? 1 : 0], function(err) {
        if (err) {
            console.error('Error creating event:', err.message);
            callback(err);
        } else {
            console.log(`Event created with ID: ${this.lastID}`);
            callback(null, { id: this.lastID, ...event });
        }
    });
}

/**
 * Read an event by ID
 */
function readEvent(id, callback) {
    const query = 'SELECT * FROM events WHERE id = ?';

    db.get(query, [id], (err, row) => {
        if (err) {
            console.error('Error reading event:', err.message);
            callback(err);
        } else if (!row) {
            callback(new Error(`Event with ID ${id} not found`));
        } else {
            callback(null, row);
        }
    });
}

/**
 * Read all events
 */
function readAllEvents(callback) {
    const query = 'SELECT * FROM events ORDER BY date ASC';

    db.all(query, (err, rows) => {
        if (err) {
            console.error('Error reading events:', err.message);
            callback(err);
        } else {
            callback(null, rows || []);
        }
    });
}

/**
 * Update an event
 */
function updateEvent(id, updates, callback) {
    // Build dynamic update query
    const allowedFields = ['name', 'date', 'category', 'location', 'description', 'attendees', 'isFeatured'];
    const updateFields = [];
    const updateValues = [];

    for (const field of allowedFields) {
        if (field in updates) {
            updateFields.push(`${field} = ?`);
            updateValues.push(field === 'isFeatured' ? (updates[field] ? 1 : 0) : updates[field]);
        }
    }

    if (updateFields.length === 0) {
        return callback(new Error('No valid fields to update'));
    }

    updateValues.push(id);
    const query = `UPDATE events SET ${updateFields.join(', ')} WHERE id = ?`;

    db.run(query, updateValues, function(err) {
        if (err) {
            console.error('Error updating event:', err.message);
            callback(err);
        } else if (this.changes === 0) {
            callback(new Error(`Event with ID ${id} not found`));
        } else {
            console.log(`Event ${id} updated successfully`);
            callback(null, { id, ...updates });
        }
    });
}

/**
 * Delete an event
 */
function deleteEvent(id, callback) {
    // First delete related registrations
    db.run('DELETE FROM registrations WHERE eventId = ?', [id], (err) => {
        if (err) {
            console.error('Error deleting registrations:', err.message);
            return callback(err);
        }

        // Then delete the event
        db.run('DELETE FROM events WHERE id = ?', [id], function(err) {
            if (err) {
                console.error('Error deleting event:', err.message);
                callback(err);
            } else if (this.changes === 0) {
                callback(new Error(`Event with ID ${id} not found`));
            } else {
                console.log(`Event ${id} deleted successfully`);
                callback(null);
            }
        });
    });
}

// ============================================
// CRUD Operations for Customers
// ============================================

/**
 * Create a new customer
 */
function createCustomer(customer, callback) {
    const { firstName, lastName, email, phone, address, status } = customer;

    // Input validation
    if (!firstName || !lastName || !email) {
        return callback(new Error('Missing required fields: firstName, lastName, email'));
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return callback(new Error('Invalid email format'));
    }

    const query = `
        INSERT INTO customers (firstName, lastName, email, phone, address, status)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.run(query, [firstName, lastName, email, phone, address, status || 'PENDING'], function(err) {
        if (err) {
            if (err.message.includes('UNIQUE constraint failed')) {
                callback(new Error(`Email ${email} already exists`));
            } else {
                console.error('Error creating customer:', err.message);
                callback(err);
            }
        } else {
            console.log(`Customer created with ID: ${this.lastID}`);
            callback(null, { id: this.lastID, ...customer });
        }
    });
}

/**
 * Read a customer by ID
 */
function readCustomer(id, callback) {
    const query = 'SELECT * FROM customers WHERE id = ?';

    db.get(query, [id], (err, row) => {
        if (err) {
            console.error('Error reading customer:', err.message);
            callback(err);
        } else if (!row) {
            callback(new Error(`Customer with ID ${id} not found`));
        } else {
            callback(null, row);
        }
    });
}

/**
 * Read all customers
 */
function readAllCustomers(callback) {
    const query = 'SELECT * FROM customers ORDER BY createdAt DESC';

    db.all(query, (err, rows) => {
        if (err) {
            console.error('Error reading customers:', err.message);
            callback(err);
        } else {
            callback(null, rows || []);
        }
    });
}

/**
 * Update a customer
 */
function updateCustomer(id, updates, callback) {
    const allowedFields = ['firstName', 'lastName', 'phone', 'address', 'status'];
    const updateFields = [];
    const updateValues = [];

    for (const field of allowedFields) {
        if (field in updates) {
            updateFields.push(`${field} = ?`);
            updateValues.push(updates[field]);
        }
    }

    if (updateFields.length === 0) {
        return callback(new Error('No valid fields to update'));
    }

    updateValues.push(id);
    const query = `UPDATE customers SET ${updateFields.join(', ')} WHERE id = ?`;

    db.run(query, updateValues, function(err) {
        if (err) {
            console.error('Error updating customer:', err.message);
            callback(err);
        } else if (this.changes === 0) {
            callback(new Error(`Customer with ID ${id} not found`));
        } else {
            console.log(`Customer ${id} updated successfully`);
            callback(null, { id, ...updates });
        }
    });
}

/**
 * Delete a customer
 */
function deleteCustomer(id, callback) {
    // First delete related registrations
    db.run('DELETE FROM registrations WHERE customerId = ?', [id], (err) => {
        if (err) {
            console.error('Error deleting registrations:', err.message);
            return callback(err);
        }

        // Then delete the customer
        db.run('DELETE FROM customers WHERE id = ?', [id], function(err) {
            if (err) {
                console.error('Error deleting customer:', err.message);
                callback(err);
            } else if (this.changes === 0) {
                callback(new Error(`Customer with ID ${id} not found`));
            } else {
                console.log(`Customer ${id} deleted successfully`);
                callback(null);
            }
        });
    });
}

// ============================================
// CRUD Operations for Registrations
// ============================================

/**
 * Create a registration
 */
function createRegistration(customerId, eventId, callback) {
    const query = `
        INSERT INTO registrations (customerId, eventId)
        VALUES (?, ?)
    `;

    db.run(query, [customerId, eventId], function(err) {
        if (err) {
            console.error('Error creating registration:', err.message);
            callback(err);
        } else {
            console.log(`Registration created with ID: ${this.lastID}`);
            callback(null, { id: this.lastID, customerId, eventId });
        }
    });
}

/**
 * Get registrations for a customer
 */
function getCustomerRegistrations(customerId, callback) {
    const query = `
        SELECT r.*, e.name as eventName, e.date, e.category
        FROM registrations r
        JOIN events e ON r.eventId = e.id
        WHERE r.customerId = ?
        ORDER BY r.registrationDate DESC
    `;

    db.all(query, [customerId], (err, rows) => {
        if (err) {
            console.error('Error reading registrations:', err.message);
            callback(err);
        } else {
            callback(null, rows || []);
        }
    });
}

/**
 * Delete a registration
 */
function deleteRegistration(registrationId, callback) {
    const query = 'DELETE FROM registrations WHERE id = ?';

    db.run(query, [registrationId], function(err) {
        if (err) {
            console.error('Error deleting registration:', err.message);
            callback(err);
        } else if (this.changes === 0) {
            callback(new Error(`Registration with ID ${registrationId} not found`));
        } else {
            console.log(`Registration ${registrationId} deleted successfully`);
            callback(null);
        }
    });
}

// ============================================
// Export Functions
// ============================================

module.exports = {
    db,
    // Event operations
    createEvent,
    readEvent,
    readAllEvents,
    updateEvent,
    deleteEvent,
    // Customer operations
    createCustomer,
    readCustomer,
    readAllCustomers,
    updateCustomer,
    deleteCustomer,
    // Registration operations
    createRegistration,
    getCustomerRegistrations,
    deleteRegistration
};
