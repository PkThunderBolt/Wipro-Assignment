import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// This component shows a login form that is managed by Formik and validated by Yup.
function FormikLogin() {
  // This object defines the validation rules for the email and password fields.
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password should be at least six characters long")
      .required("Password is required"),
  });

  // This hook sets up Formik with initial values, validation, and submit handler.
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // In a real app you would send these values to a backend.
      console.log("Formik login submitted", values);
      alert("Login details submitted. Please check console for values.");
    },
  });

  return (
    <div>
      <h2>Formik Login</h2>
      <form onSubmit={formik.handleSubmit} className="form-container">
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {/* This line shows validation error when the user touched the field and there is an error. */}
          {formik.touched.email && formik.errors.email ? (
            <div className="error-text">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error-text">{formik.errors.password}</div>
          ) : null}
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default FormikLogin;
