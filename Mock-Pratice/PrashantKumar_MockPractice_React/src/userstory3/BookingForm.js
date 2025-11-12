import React, { createContext, useContext, useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

/* 🔹 Booking Context */
const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [bookings, setBookings] = useState([]);
  function addBooking(b) {
    setBookings((prev) => [...prev, b]);
  }
  return (
    <BookingContext.Provider value={{ bookings, addBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBookings() {
  return useContext(BookingContext);
}

/* 🔹 Custom Hook for submission logic */
function useSubmitBooking() {
  const { addBooking } = useBookings();
  const submit = async (values) => {
    // Mock API delay
    await new Promise((r) => setTimeout(r, 300));
    addBooking({ ...values, id: Date.now() });
    return true;
  };
  return { submit };
}

/* 🔹 Inner Form Component */
function BookingFormInner() {
  const [searchParams] = useSearchParams();
  const packageIdParam = searchParams.get("id") || "";
  const [packageInfo, setPackageInfo] = useState(null);
  const { submit } = useSubmitBooking();

  // Fetch package details by ID if present
  useEffect(() => {
    if (packageIdParam) {
      axios
        .get(`http://localhost:5000/packages/${packageIdParam}`)
        .then((res) => setPackageInfo(res.data))
        .catch((err) => console.error("Failed to fetch package", err));
    }
  }, [packageIdParam]);

  const formik = useFormik({
    initialValues: { name: "", email: "", packageId: packageIdParam },
    enableReinitialize: true, // allow reloading when package ID changes
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid").required("Required"),
      packageId: Yup.string().required("Select package"),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        await submit(values);
        alert(" Booking submitted successfully!");
        resetForm();
      } catch (e) {
        alert(" Failed to submit booking");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="card shadow-sm p-4">
      <h4 className="mb-3 text-primary">Booking Form</h4>

      {/* Show selected package preview */}
      {packageInfo && (
        <div className="selected-package mb-3 p-3 border rounded bg-light d-flex align-items-center">
          <img
            src={packageInfo.image}
            alt={packageInfo.title}
            className="me-3"
            style={{
              width: "120px",
              height: "80px",
              objectFit: "cover",
              borderRadius: "6px",
            }}
          />
          <div>
            <h6 className="mb-1 fw-bold">{packageInfo.title}</h6>
            <p className="text-secondary mb-0">
              {packageInfo.description} — <strong>₹{packageInfo.price}</strong>
            </p>
          </div>
        </div>
      )}

      {/* Booking form */}
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            name="name"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-danger">{formik.errors.name}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            name="email"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-danger">{formik.errors.email}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Package ID</label>
          <input
            name="packageId"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.packageId}
            readOnly={!!packageIdParam} /* lock if pre-filled */
          />
          {formik.touched.packageId && formik.errors.packageId && (
            <div className="text-danger">{formik.errors.packageId}</div>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-success w-100"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Submitting..." : "Confirm Booking"}
        </button>
      </form>
    </div>
  );
}

/* 🔹 Main Export */
export default function BookingForm() {
  return (
    <BookingProvider>
      <div className="container my-4">
        <BookingFormInner />
      </div>
    </BookingProvider>
  );
}
