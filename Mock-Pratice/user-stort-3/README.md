# Travel Booking Application – User Story 3

## Overview

This project implements the **Booking Form Module** for a Travel Booking Application.  
It allows users to book travel packages with form validation, global state management, and PWA support.

Built using **React**, **Formik**, **Yup**, **Redux Toolkit**, and **React Router DOM**, it demonstrates advanced state handling, form management, and modern web development practices.

---

## User Story 3 – Booking Form & Advanced State Handling

### Scenario

Build a Booking Form Module for users to book travel packages.  
Implement form handling using **Formik** and **Yup**, manage state using **React Context API** or **Redux**, and handle validation errors gracefully.

---

## Features

| Criteria             | Description                                                                 | Marks |
| -------------------- | --------------------------------------------------------------------------- | ----- |
| **Form Handling**    | Used **Formik** for controlled form inputs and **Yup** for validation       | 4     |
| **State Management** | Managed global booking state using **Redux Toolkit**                        | 5     |
| **Custom Hook**      | Created a custom hook (`useBookingForm.js`) to handle form submission logic | 3     |
| **Error Boundary**   | Implemented Error Boundary to handle component-level errors                 | 3     |
| **PWA Support**      | Converted the app into a **Progressive Web App**                            | 3     |
| **Code Quality**     | Maintained modular, reusable components with clear comments                 | —     |

---

## Project Structure

user-story-3/
│
├── public/
│ ├── index.html
│ └── manifest.json
│
├── src/
│ ├── app/
│ │ ├── store.js
│ │
│ ├── components/
│ │ ├── Navbar.js
│ │ ├── ErrorBoundary.js
│ │ └── Footer.js
│ │
│ ├── features/
│ │ └── booking/
│ │ ├── bookingSlice.js
│ │ └── useBookingForm.js
│ │
│ ├── pages/
│ │ ├── BookingForm.js
│ │ ├── SuccessPage.js
│ │ └── Home.js
│ │
│ ├── App.js
│ ├── index.js
│ └── serviceWorker.js
│
└── package.json

## Install dependies

npm install react-router-dom react-redux @reduxjs/toolkit formik yup bootstrap

## Core Concepts Demonstrated

--Controlled forms with Formik
--Schema-based validation using Yup
--Global state management via Redux Toolkit
--Reusable custom hooks
--Component-level error handling with Error Boundaries
--Progressive Web App setup for offline support

## Author

Prashant Kumar
Java Full Stack Developer | 2x Smart India Hackathon Winner
Bangalore, India
