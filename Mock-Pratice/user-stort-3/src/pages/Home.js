import React from "react";

function Home() {
  return (
    <div className="container-fluid p-0">
      <img
        src="https://www.holidaymonk.com/wp-content/uploads/2024/10/The-Ultimate-Travel-Guide-to-Thailand.webp"
        alt="Travel Banner"
        className="img-fluid w-100"
        style={{ height: "90vh", objectFit: "cover" }}
      />
      <div className="text-center mt-4">
        <h1>Explore the World with Wipro Travel 🌍</h1>
        <p>Book your next destination easily and securely.</p>
      </div>
    </div>
  );
}

export default Home;
