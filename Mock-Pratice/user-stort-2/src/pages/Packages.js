import React, { useEffect, useState } from "react";
import PackageCard from "../components/PackageCard";

function Packages() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data))
      .catch((err) => console.error("Error fetching packages:", err));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center fw-bold mb-4">Our Travel Packages</h2>
      <div className="row justify-content-center">
        {packages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            name={pkg.name}
            image={pkg.image}
            price={pkg.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Packages;
