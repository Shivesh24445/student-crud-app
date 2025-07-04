// import packages
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.static('public'));


// MySQL DB connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Shivesh@123',
  database: 'studentinfo'
});

db.connect(err => {
  if (err) {
    console.error('DB connection failed:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Home route - join student_data and student_marks
app.get("/", (req, res) => {
  const q = `
    SELECT student_data.id, student_data.name, student_data.email, student_marks.percentage
    FROM student_data
    JOIN student_marks ON student_data.id = student_marks.id
  `;
  db.query(q, (err, result) => {
    if (err) throw err;
    res.render("home", { result });
  });
});

// Edit route
app.get('/edit/:id', (req, res) => {
  const userId = req.params.id;const query = `
    SELECT student_marks.*, student_data.name 
    FROM student_marks 
    JOIN student_data ON student_marks.id = student_data.id 
    WHERE student_marks.id = ?
  `;
  db.query(query, [userId], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.render('edit', { student: result[0] });
    } else {
      res.send("No student found.");
    }
  });
});

// Update marks + recalculate percentage in both tables
app.post('/update/:id', (req, res) => {
  const id = req.params.id;
  const { english, maths, dsa, electronics } = req.body;

  const total = parseInt(english) + parseInt(maths) + parseInt(dsa) + parseInt(electronics);
  const percentage = ((total / 400) * 100).toFixed(2);

  const updateMarks = `
    UPDATE student_marks 
    SET english = ?, maths = ?, dsa = ?, electronics = ?, percentage = ?
    WHERE id = ?
  `;

  db.query(updateMarks, [english, maths, dsa, electronics, percentage, id], (err) => {
    if (err) throw err;

    const updateStudentData = `
      UPDATE student_data 
      SET percentage = ?
      WHERE id = ?
    `;
    db.query(updateStudentData, [percentage, id], (err2) => {
      if (err2) throw err2;
      res.redirect('/');
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
