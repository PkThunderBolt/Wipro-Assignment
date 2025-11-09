// Import necessary libraries and components
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik"; // used for handling forms
import * as Yup from "yup"; // used for form validation
import { BookActions } from "../flux/actions/BookActions"; // Flux actions for adding a book
import axios from "axios"; // used for sending data to JSON server
import { Link } from "react-router-dom"; // used for navigation between pages

// Main component for adding a new book
const AddBookForm = () => {
  // initial empty form values
  const initialValues = { title: "", author: "", price: "", image: "" };

  // validation rules for form fields
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    author: Yup.string().required("Author is required"),
    price: Yup.number().required("Price is required").positive(),
    image: Yup.string()
      .url("Enter a valid image URL")
      .required("Image is required"),
  });

  // function runs when form is submitted
  const onSubmit = (values, { resetForm }) => {
    // create new book object with unique id
    const newBook = {
      ...values,
      id: Date.now(),
    };

    // send the new book to Flux store
    BookActions.addBook(newBook);

    // also save the new book in JSON server for storage
    axios.post("/books", newBook).catch((err) => console.error(err));

    // reset the form after submission
    resetForm();

    // show success message
    alert(" Book added successfully!");
  };

  // render the form UI
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Add a New Book</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="w-50 mx-auto">
          {/* input field for book title */}
          <div className="mb-3">
            <label>Title</label>
            <Field name="title" className="form-control" />
            <ErrorMessage
              name="title"
              component="div"
              className="text-danger"
            />
          </div>

          {/* input field for author name */}
          <div className="mb-3">
            <label>Author</label>
            <Field name="author" className="form-control" />
            <ErrorMessage
              name="author"
              component="div"
              className="text-danger"
            />
          </div>

          {/* input field for book price */}
          <div className="mb-3">
            <label>Price</label>
            <Field name="price" type="number" className="form-control" />
            <ErrorMessage
              name="price"
              component="div"
              className="text-danger"
            />
          </div>

          {/* input field for image link */}
          <div className="mb-3">
            <label>Image URL</label>
            <Field name="image" className="form-control" />
            <ErrorMessage
              name="image"
              component="div"
              className="text-danger"
            />
          </div>

          {/* submit button */}
          <button type="submit" className="btn btn-primary w-100">
            Add Book
          </button>

          {/* button to navigate back to home page */}
          <Link to="/home" className="btn btn-secondary w-100 mt-3">
            Go to Home
          </Link>
        </Form>
      </Formik>
    </div>
  );
};

// export the component so it can be used in other files
export default AddBookForm;
