//  In-memory array data
let students = [
  { id: 1, name: "John Doe", age: 20 },
  { id: 2, name: "Jane Smith", age: 22 },
  { id: 3, name: "Sam Brown", age: 19 },
];

//  Create / Add Student
exports.addStudent = (req, res) => {
  const { name, age } = req.body;

  const newStudent = {
    id: students.length + 1, // auto increment id
    name,
    age,
  };

  students.push(newStudent);
  res.status(201).json({ message: "Student Added", data: newStudent });
};

//  Get All Students
exports.getAllStudents = (req, res) => {
  res.status(200).json({ message: "All Students", data: students });
};

//  Get Student by ID
exports.getStudentById = (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find((stu) => stu.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student Not Found" });
  }

  res.status(200).json({ message: "Student Found", data: student });
};

//  Update Student by ID
exports.updateStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find((stu) => stu.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student Not Found" });
  }

  student.name = req.body.name || student.name;
  student.age = req.body.age || student.age;

  res.status(200).json({ message: "Student Updated", data: student });
};

//  Delete Student by ID
exports.deleteStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex((stu) => stu.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Student Not Found" });
  }

  students.splice(index, 1);

  res.status(200).json({ message: "Student Deleted Successfully" });
};
