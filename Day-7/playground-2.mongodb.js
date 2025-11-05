// Select the database to use.
use("WiproTraining");

// Insert a few documents into the sales collection.
db.getCollection("Employees").insertMany([
  {
    Name: "Amit Sharma",
    Email: "amit.sharma@wipro.com",
    Address: "Bangalore, Karnataka, India",
    Role: "Software Engineer",
  },
  {
    Name: "Neha Patel",
    Email: "neha.patel@wipro.com",
    Address: "Pune, Maharashtra, India",
    Role: "Data Analyst",
  },
  {
    Name: "Rohit Verma",
    Email: "rohit.verma@wipro.com",
    Address: "Hyderabad, Telangana, India",
    Role: "System Administrator",
  },
  {
    Name: "Sneha Gupta",
    Email: "sneha.gupta@wipro.com",
    Address: "Chennai, Tamil Nadu, India",
    Role: "HR Executive",
  },
  {
    Name: "Karan Mehta",
    Email: "karan.mehta@wipro.com",
    Address: "Noida, Uttar Pradesh, India",
    Role: "Frontend Developer",
  },
  {
    Name: "Priya Nair",
    Email: "priya.nair@wipro.com",
    Address: "Kochi, Kerala, India",
    Role: "Backend Developer",
  },
  {
    Name: "Rahul Singh",
    Email: "rahul.singh@wipro.com",
    Address: "Gurgaon, Haryana, India",
    Role: "Business Analyst",
  },
  {
    Name: "Anjali Das",
    Email: "anjali.das@wipro.com",
    Address: "Kolkata, West Bengal, India",
    Role: "Quality Assurance Engineer",
  },
  {
    Name: "Vikram Rao",
    Email: "vikram.rao@wipro.com",
    Address: "Mumbai, Maharashtra, India",
    Role: "Project Manager",
  },
  {
    Name: "Ritu Yadav",
    Email: "ritu.yadav@wipro.com",
    Address: "Lucknow, Uttar Pradesh, India",
    Role: "Cloud Engineer",
  },
]);

// Print a message to the output window.
console.log(`Data Inserted`);
