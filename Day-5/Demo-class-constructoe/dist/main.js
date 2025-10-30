import { Person, Student } from "./person.js";
const person1 = new Person("Alice", 30, "Wonderland University");
const student1 = new Student("Bob", 20, "Builder Institute", [
    "JavaScript",
    "TypeScript",
]);
// Get reference to the div in index.html
const outputDiv = document.getElementById("output");
if (outputDiv) {
    outputDiv.innerHTML = `
    <h2>Person Details</h2>
    <p>${person1.greet()}</p>
    <p><strong>Person ID:</strong> ${person1.showId()}</p>
    <hr>
    <h2>Student Details</h2>
    <p>${student1.getStudentDetails()}</p>
    <p>${student1.display()}</p>
    <p><strong>Student ID:</strong> ${student1.showId()}</p>
    <hr>
    <p><strong>Person Counter:</strong> ${Person.counter}</p>
  `;
}
