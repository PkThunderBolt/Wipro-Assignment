# Challenge 4: React Portals

## User Story

As a user, I want to view **notifications and modal popups** that appear **above all UI elements**, even if they are nested inside components.

---

## Problem Statement

Create a **Modal or Notification** using **React Portals** that renders **outside the main DOM hierarchy**.

---

## Expected Outcome

- Use `ReactDOM.createPortal()`.
- Modal opens/closes using a **state toggle** in the parent component.
- Modal should appear **above** all other content.

---

## Bonus

Add **fade-in/out animation** using **Framer Motion** or **CSS transitions**.

---

## Project Structure

portals-demo/
│
├── public/
│ └── index.html
│
├── src/
│ ├── components/
│ │ └── Modal.js
│ ├── App.js
│ ├── App.css
│ └── index.js
└── package.json

---

## Update `public/index.html`

Add a separate DOM node for the modal:

```html
<body>
  <div id="root"></div>
  <div id="modal-root"></div>
</body>
```

## Run the App

--npx create-react-app portals-demo
--cd portals-demo
--npm start

## Expected Output

-- Clicking Open Modal → shows a centered popup overlay.
-- Modal appears above all content.
-- Clicking Close hides it smoothly.
-- You can verify in DevTools: modal renders inside <div id="modal-root">.

## Bonus (Framer Motion Animation)

--Install Framer Motion: npm install framer-motion
--Add the code in Modal.js

import { motion } from "framer-motion";

const modalContent = (
<motion.div
className="modal-overlay"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}

>

    <motion.div
      className="modal-content"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h4> Portal Modal</h4>
      <p>This modal uses Framer Motion for animation.</p>
      <button className="btn btn-danger mt-3" onClick={onClose}>
        Close
      </button>
    </motion.div>

</motion.div>
);

## Author

--Created by Prashant Kumar
