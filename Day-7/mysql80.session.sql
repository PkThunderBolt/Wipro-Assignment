DROP DATABASE IF EXISTS TechNovaDB;

CREATE DATABASE TechNovaDB;
USE TechNovaDB;

CREATE TABLE Department (
  DeptID INT PRIMARY KEY,
  DeptName VARCHAR(100) NOT NULL UNIQUE,
  Location VARCHAR(100)
);


CREATE TABLE Employee (
  EmpID INT PRIMARY KEY,
  EmpName VARCHAR(150) NOT NULL,
  Gender ENUM('M','F','O') DEFAULT 'O',
  DOB DATE,
  HireDate DATE,
  DeptID INT,
  CONSTRAINT fk_emp_dept FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
    ON UPDATE CASCADE ON DELETE SET NULL
);

CREATE TABLE Project (
  ProjectID INT PRIMARY KEY,
  ProjectName VARCHAR(150) NOT NULL,
  DeptID INT,
  StartDate DATE,
  EndDate DATE,
  CONSTRAINT fk_proj_dept FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
    ON UPDATE CASCADE ON DELETE SET NULL
);

CREATE TABLE Performance (
  PerfID INT AUTO_INCREMENT PRIMARY KEY,
  EmpID INT NOT NULL,
  ProjectID INT NOT NULL,
  Rating DECIMAL(3,2) CHECK (Rating BETWEEN 0 AND 10),
  ReviewDate DATE,
  CONSTRAINT fk_perf_emp FOREIGN KEY (EmpID) REFERENCES Employee(EmpID)
    ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT fk_perf_proj FOREIGN KEY (ProjectID) REFERENCES Project(ProjectID)
    ON UPDATE CASCADE ON DELETE CASCADE,
  UNIQUE KEY uk_emp_proj_review (EmpID, ProjectID, ReviewDate)
);

CREATE TABLE Reward (
  RewardID INT AUTO_INCREMENT PRIMARY KEY,
  EmpID INT NOT NULL,
  RewardMonth DATE NOT NULL,
  RewardAmount DECIMAL(10,2) DEFAULT 0,
  CONSTRAINT fk_reward_emp FOREIGN KEY (EmpID) REFERENCES Employee(EmpID)
    ON UPDATE CASCADE ON DELETE CASCADE,
  UNIQUE KEY uk_emp_rewardmonth (EmpID, RewardMonth)
);

CREATE INDEX idx_employee_name ON Employee (EmpName);
CREATE INDEX idx_employee_dept ON Employee (DeptID);


INSERT INTO Department (DeptID, DeptName, Location) VALUES
(101, 'IT', 'Bangalore'),
(102, 'HR', 'Delhi'),
(103, 'Finance', 'Mumbai'),
(104, 'R&D', 'Pune'),
(105, 'Sales', 'Chennai');

INSERT INTO Employee (EmpID, EmpName, Gender, DOB, HireDate, DeptID) VALUES
(1, 'Asha', 'F', '1990-07-12', '2018-06-10', 101),
(2, 'Raj', 'M', '1988-04-09', '2020-03-22', 102),
(3, 'Neha', 'F', '1995-01-15', '2021-08-05', 101),
(4, 'Suresh', 'M', '1985-11-20', '2015-01-12', 103),
(5, 'Priya', 'F', '1992-02-25', '2019-09-30', 104);

INSERT INTO Project (ProjectID, ProjectName, DeptID, StartDate, EndDate) VALUES
(201, 'Alpha', 101, '2019-01-01', '2019-12-31'),
(202, 'Beta', 101, '2020-02-01', NULL),
(203, 'Gamma', 103, '2018-06-01', '2019-06-30'),
(204, 'Delta', 104, '2021-07-01', NULL),
(205, 'Epsilon', 105, '2022-01-01', NULL);

INSERT INTO Performance (EmpID, ProjectID, Rating, ReviewDate) VALUES
(1, 201, 8.50, '2019-12-20'),
(2, 203, 7.20, '2019-06-15'),
(3, 202, 9.00, '2021-12-10'),
(4, 203, 8.80, '2018-12-30'),
(5, 204, 7.75, '2022-03-10');

INSERT INTO Reward (EmpID, RewardMonth, RewardAmount) VALUES
(1, '2022-02-01', 2500.00),
(2, '2023-03-01', 1500.00),
(3, '2023-04-01', 3000.00),
(4, '2022-11-01', 900.00),
(5, '2023-01-01', 2200.00);

-- Update one employee's department (Task 2.2)
update Employee set DeptID=105 WHERE empId=1;

-- Delete one reward record where amount < 1000 (Task 2.3)
delete from reward where RewardAmount<1000;

-- USER STORY 3 — Generate Insights (DQL, Aggregates, Date functions)

-- 1. Retrieve all employees who joined after 2019-01-01.

select * FROM employee 
where HireDate>'2019-01-01';

-- 2. Find the average performance rating of employees in each department.
select e.DeptID ,DeptName, AVG(p.Rating) as avg_rating from employee e
join performance p
on e.empId=p.EmpID
join department D
on e.DeptID=d.DeptID
group by e.DeptID;

-- 3. List employees with their age (use a date function).
select EmpID, EmpName, DOB , TIMESTAMPDIFF(YEAR, DOB, CURDATE())
 as age from employee;

 -- 4. Find the total rewards given in the current year.
 SELECT YEAR(CURDATE()) AS yr, SUM(RewardAmount) AS total_rewards_current_year
FROM Reward
WHERE YEAR(RewardMonth) = YEAR(CURDATE());

-- 5. Retrieve employees who have received rewards greater than 2000.
select  e.empId, EmpName, RewardAmount from employee e
join reward r
on e.empId =r.EmpID
where r.RewardAmount>2000;


-- USER STORY 4 — Advanced Queries (Joins and Subqueries)

-- 1. Display Employee Name, Department Name, Project Name, and Rating using appropriate joins.
SELECT e.EmpName, d.DeptName, pr.ProjectName, p.Rating
FROM Performance p
JOIN Employee e ON p.EmpID = e.EmpID
JOIN Project pr ON p.ProjectID = pr.ProjectID
LEFT JOIN Department d ON e.DeptID = d.DeptID;

-- 2. Find the highest-rated employee in each department using a subquery.
-- First compute max per department, then join back to get employee(s).
SELECT t.DeptID, d.DeptName, t.EmpID, e.EmpName, t.max_rating
FROM (
  SELECT e.DeptID, p.EmpID, MAX(p.Rating) AS max_rating
  FROM Performance p
  JOIN Employee e ON p.EmpID = e.EmpID
  GROUP BY e.DeptID
) t
JOIN Employee e ON t.EmpID = e.EmpID
JOIN Department d ON t.DeptID = d.DeptID
ORDER BY t.DeptID;

-- 3. List all employees who have not received any rewards using a subquery.
SELECT EmpID, EmpName
FROM Employee
WHERE EmpID NOT IN (SELECT EmpID FROM Reward);

-- USER STORY 5 — Transaction Control and Optimization

-- 1. Begin a transaction: Insert a new employee, assign to department and add performance.
START TRANSACTION;

INSERT INTO Employee (EmpID, EmpName, Gender, DOB, HireDate, DeptID)
VALUES (6, 'Karan', 'M', '1993-05-20', '2023-10-01', 101);

INSERT INTO Performance (EmpID, ProjectID, Rating, ReviewDate)
VALUES (6, 202, 8.10, '2023-12-01');

-- If both inserts succeed commit, otherwise rollback.
-- In an interactive session you would check for errors and either:
-- COMMIT;
-- or
-- ROLLBACK;
-- For this script we'll COMMIT to persist the example:

COMMIT;

-- 3. Analyze a slow query: sample query joining multiple tables without indexes
-- (We already added indexes on Employee(EmpName) and Employee(DeptID) earlier.)
-- Example slow-ish query:
EXPLAIN SELECT e.EmpName, d.DeptName, pr.ProjectName, p.Rating
FROM Performance p
JOIN Employee e ON p.EmpID = e.EmpID
JOIN Project pr ON p.ProjectID = pr.ProjectID
JOIN Department d ON e.DeptID = d.DeptID;


-- You can create additional indexes to optimize joins if needed:
CREATE INDEX idx_perf_empid ON Performance (EmpID);
CREATE INDEX idx_perf_projectid ON Performance (ProjectID);
CREATE INDEX idx_project_deptid ON Project (DeptID);

-- Re-run EXPLAIN after adding indexes:
EXPLAIN SELECT e.EmpName, d.DeptName, pr.ProjectName, p.Rating
FROM Performance p
JOIN Employee e ON p.EmpID = e.EmpID
JOIN Project pr ON p.ProjectID = pr.ProjectID
JOIN Department d ON e.DeptID = d.DeptID;
