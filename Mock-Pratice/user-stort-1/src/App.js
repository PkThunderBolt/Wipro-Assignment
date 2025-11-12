import React from "react";
import Header from "./components/Header";
import DestinationCard from "./components/DestinationCard";
import Footer from "./components/Footer";

// The main App component controls the overall layout of the travel website
function App() {
  // A list of destinations shown on the homepage with their details
  const destinations = [
    {
      name: "BodhGaya, Bihar India",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/mahabodhi-temple-gaya-bihar-4-attr-hero?qlt=82&ts=1726740645749",
      price: 2500,
    },
    {
      name: "TajMahal, Agra India",
      image:
        "https://static.wixstatic.com/media/055605_65e20a7fcbc54e2e8720adfc2544c35e~mv2.jpg/v1/fill/w_1800,h_1082,al_c,q_85/taj_new_contant_edited.jpg",
      price: 4000,
    },
    {
      name: "Kedarnath, Uttarakhand India",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/kedarnath-temple-kedharnath-uttarakhand-2-attr-hero?qlt=82&ts=1742158730424",
      price: 7500,
    },
  ];

  return (
    <div>
      {/* The top header section of the page */}
      <Header />

      {/* Main content area */}
      <div className="container mt-4">
        {/* Section heading */}
        <h2 className="text-center mb-4">Featured Destinations</h2>

        {/* Displaying each destination card in a Bootstrap grid layout */}
        <div className="row">
          {destinations.map((dest, index) => (
            <DestinationCard
              key={index} // unique key for each card
              name={dest.name} // passing destination name as prop
              image={dest.image} // passing image URL as prop
              price={dest.price} // passing price as prop
            />
          ))}
        </div>
      </div>

      {/* Footer section at the bottom of the page */}
      <Footer />
    </div>
  );
}

// Exporting App so it can run as the main component
export default App;
