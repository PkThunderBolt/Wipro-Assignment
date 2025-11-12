import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useBookingForm } from "../features/booking/useBookingForm";

function BookingForm() {
  const { handleSubmit } = useBookingForm();

  const formik = useFormik({
    initialValues: { name: "", email: "", destination: "", date: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      destination: Yup.string().required("Destination is required"),
      date: Yup.date().required("Date is required"),
    }),
    onSubmit: handleSubmit,
  });

  return (
    <div className="container mt-5 col-md-6">
      <h2 className="text-center mb-4">Book Your Travel</h2>
      <form onSubmit={formik.handleSubmit} className="card p-4 shadow">
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name && (
            <p className="text-danger">{formik.errors.name}</p>
          )}
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && (
            <p className="text-danger">{formik.errors.email}</p>
          )}
        </div>

        <div className="mb-3">
          <label>Destination</label>
          <input
            type="text"
            name="destination"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.destination}
          />
          {formik.errors.destination && (
            <p className="text-danger">{formik.errors.destination}</p>
          )}
        </div>

        <div className="mb-3">
          <label>Travel Date</label>
          <input
            type="date"
            name="date"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.date}
          />
          {formik.errors.date && (
            <p className="text-danger">{formik.errors.date}</p>
          )}
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit Booking
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
