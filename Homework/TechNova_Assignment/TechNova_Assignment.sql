CREATE TABLE Department (
  DeptID INT PRIMARY KEY,
  DeptName VARCHAR(100)
);


CREATE TABLE Student (
  StudentID VARCHAR(10) PRIMARY KEY,
  StudentName VARCHAR(100)
);


CREATE TABLE Course (
  CourseID INT PRIMARY KEY,
  CourseName VARCHAR(100),
  DeptID INT,
  FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
);

CREATE TABLE Instructor (
  InstructorID INT PRIMARY KEY,
  InstructorName VARCHAR(100),
  DeptID INT,
  FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
);

CREATE TABLE Enrollment (
  StudentID VARCHAR(10),
  CourseID INT,
  InstructorID INT,
  Grade CHAR(2),
  FOREIGN KEY (StudentID) REFERENCES Student(StudentID),
  FOREIGN KEY (CourseID) REFERENCES Course(CourseID),
  FOREIGN KEY (InstructorID) REFERENCES Instructor(InstructorID)
);



-- Departments
INSERT INTO Department VALUES
(1, 'Computer Science'),
(2, 'Information Technology');

-- Students
INSERT INTO Student VALUES
('S101', 'Asha Gupta'),
('S102', 'Raj Verma'),
('S103', 'Priya Nair'),
('S104', 'Karan Singh'),
('S105', 'Neha Patel');

-- Courses
INSERT INTO Course VALUES
(101, 'Database Systems', 1),
(102, 'Data Structures', 1),
(103, 'Web Development', 2),
(104, 'Operating Systems', 1),
(105, 'Computer Networks', 2);

-- Instructors
INSERT INTO Instructor VALUES
(1, 'Dr. Mehta', 1),
(2, 'Dr. Sharma', 1),
(3, 'Dr. Iyer', 2);

-- Enrollments
INSERT INTO Enrollment VALUES
('S101', 101, 1, 'A'),
('S102', 102, 2, 'B'),
('S101', 102, 2, 'A'),
('S103', 103, 3, NULL),
('S104', 104, 1, NULL);

-- Retrieve a list of students
--  with their enrolled course names and instructors.

select s.StudentName, c.CourseName, i.InstructorName from student s
join Enrollment e
on s.StudentID=e.StudentID
join course c
on e.CourseID=c.CourseID
join Instructor i
on e.InstructorID=i.InstructorID;


-- Display all courses along with their 
-- department names (use INNER JOIN).

select CourseName, DeptName from course c
INNER join department d
on c.DeptID =d.DeptID;

-- Retrieve all students and the courses they are 
-- enrolled in, including those who have not yet been 
-- assigned a grade (use LEFT JOIN).

SELECT s.StudentName, c.CourseName, e.Grade
FROM Student s
LEFT JOIN Enrollment e ON s.StudentID = e.StudentID
LEFT JOIN Course c ON e.CourseID = c.CourseID;

-- List instructors who currently have no students 
-- assigned (use RIGHT JOIN).

select InstructorName from Instructor i
LEFT  join Enrollment e
on i.InstructorID=e.InstructorID
WHERE e.StudentID IS NULL;




INSERT INTO Instructor VALUES
(4, 'Dr. PK', 1);

select * from instructor;

Retrieve all students Who scored the highest Grad. in any course.

SELECT StudentName, Grade FROM Student
WHERE StudentID IN (SELECT StudentID FROM Enrollment WHERE Grade = 'A'
);

SELECT InstructorID, InstructorName FROM Instructor i
WHERE (SELECT COUNT(DISTINCT CourseID)
    FROM Enrollment e
    WHERE e.InstructorID = i.InstructorID
) > 1;

SELECT StudentName FROM Student
WHERE StudentID NOT IN (
    SELECT StudentID FROM Enrollment );


    SELECT s.StudentID, s.StudentName
FROM Student s
WHERE NOT EXISTS (
  SELECT 1
  FROM Enrollment e
  WHERE e.StudentID = s.StudentID
);











