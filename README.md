# Practical 14: Controlled Form

## Objective
Develop a **Student Registration Form** using controlled components where input values are managed using React `useState()` and displayed after form submission.

## Topics Covered
- Controlled components architecture in React
- Managing multiple form fields with single `useState()` handler
- Controlled radio buttons, select dropdowns, and checkboxes
- Live two-way state binding and validation feedback
- Rendering submitted student details card upon form submission

## Project Structure
```
Practical_14/
├── src/
│   ├── App.jsx            # Controlled Student Registration Form & Result Card
│   ├── main.jsx           # React DOM root entry
│   └── index.css          # Tailwind CSS styles
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
├── vite.config.js         # Vite configuration
├── vercel.json            # Vercel configuration
└── README.md              # Project documentation
```

## Installation & Running Steps
1. Navigate to the project directory:
   ```bash
   cd Practical_14
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`.
