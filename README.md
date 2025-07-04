# student-crud-app

# 🎓 Student Marks Management App

A full-stack Node.js + MySQL application to manage student data, edit subject-wise marks, and auto-calculate percentage. Built with Express and EJS.

---

## 🚀 Features

- View all students with name, email, and percentage
- Edit marks for English, Maths, DSA, and Electronics
- Automatically calculates and updates percentage
- Validates input so marks must be between 0–100
- Clean UI using EJS templates and CSS

---

## 🧰 Tech Stack

- Node.js
- Express.js
- MySQL
- EJS
- HTML & CSS

---

## 📁 Project Structure

Here’s a quick overview of the folders and key files in this app:

- **app.js** – Main server file where Express and routes are defined
- **public/** – Contains static files (CSS)
  - `style.css` – Styles for the home page
  - `edit-style.css` – Styles for the edit marks page
- **views/** – EJS templates for rendering frontend
  - `home.ejs` – Lists all students and actions
  - `edit.ejs` – Edit form for subject-wise marks
- **db/** – Database setup files
  - `schema.sql` – SQL file to create tables and DB
- **package.json** – Lists Node.js dependencies
- **README.md** – Project documentation (this file)
