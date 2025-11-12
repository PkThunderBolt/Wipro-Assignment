import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PackageList() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    axios
      .get("http://localhost:5000/packages")
      .then((r) => {
        if (mounted) {
          setPackages(r.data);
          setLoading(false);
        }
      })
      .catch((e) => {
        console.error(e);
        setLoading(false);
      });
    return () => (mounted = false);
  }, []);

  if (loading) return <div>Loading packages...</div>;

  function handleBookNow(id) {
    navigate(`/booking?id=${id}`);
  }

  return (
    <div>
      <h4 className="mb-4">Available Packages</h4>
      <div className="row">
        {packages.map((p) => (
          <div className="col-md-4 mb-3 d-flex" key={p.id}>
            <div className="card package-card flex-fill">
              <img src={p.image} className="card-img-top" alt={p.title} />
              <div className="card-body text-center">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text text-secondary">{p.description}</p>
                <p>
                  <strong>Price: ₹{p.price}</strong>
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleBookNow(p.id)}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
