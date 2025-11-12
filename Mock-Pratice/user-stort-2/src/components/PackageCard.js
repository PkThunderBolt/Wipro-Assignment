import React from "react";
import PropTypes from "prop-types";

function PackageCard({ name, image, price }) {
  return (
    <div className="col-md-4 mb-4 d-flex">
      <div className="card shadow-sm w-100 border-0 rounded-3 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="card-img-top"
          style={{ height: "230px", objectFit: "cover" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title fw-bold">{name}</h5>
          <p className="text-muted">Starting at ₹{price}</p>
          <button className="btn btn-primary w-100">Book Now</button>
        </div>
      </div>
    </div>
  );
}

PackageCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default PackageCard;
