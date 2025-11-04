-- Creating a Database
CREATE DATABASE IF NOT EXISTS EmployeeDB; //Creating  the DB if it doesnt exist already
USE EmployeeDB; //Using the created DB  
-- Creating a Table
CREATE TABLE IF NOT EXISTS Employees (
    EmployeeID INT PRIMARY KEY AUTO_INCREMENT, -- Primary Key with Auto Increment when we dont want user to provide value for this column   
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    HireDate DATE NOT NULL, -- Date type for storing dates as it supports date functions
    Salary DECIMAL(10, 2) NOT NULL -- Decimal type with precision and scale
);

-- Inserting Data into the Table
INSERT INTO Employees (FirstName, LastName, Email, HireDate, Salary) VALUES
('John', 'Doe', 'john.doe@example.com', '2023-01-15', 60000.00), -- Date format is 'YYYY-MM-DD'
('Jane', 'Smith', 'jane.smith@example.com', '2023-02-20', 65000.00), -- Date format is 'YYYY-MM-DD'
('Alice', 'Johnson', 'alice.johnson@example.com', '2023-03-10', 70000.00);


SELECT * FROM Employees; -- Select all columns and all rows
SELECT FirstName, LastName, Email FROM Employees; -- Select specific columns