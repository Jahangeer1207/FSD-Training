const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../config/db");

const router = express.Router();

/* Register Student */
router.post("/register", async (req, res) => {
try {
const {
name,
roll,
email,
mobile,
gender,
branch,
dob,
address,
attendance,
password
} = req.body;


const [exists] = await db.query(
  "SELECT * FROM students WHERE roll=?",
  [roll]
);

if (exists.length > 0) {
  return res.status(400).json({
    message: "Roll Number Exists"
  });
}

const hashedPassword =
  await bcrypt.hash(password, 10);

await db.query(
  `INSERT INTO students
  (name,roll,email,mobile,gender,
  branch,dob,address,attendance,
  placement,password)
  VALUES(?,?,?,?,?,?,?,?,?,?,?)`,
  [
    name,
    roll,
    email,
    mobile,
    gender,
    branch,
    dob,
    address,
    attendance,
    "Not Placed",
    hashedPassword
  ]
);

res.status(201).json({
  message: "Student Registered"
});


} catch (err) {
res.status(500).json(err);
}
});

/* Login */
router.post("/login", async (req, res) => {
try {
const { roll, password } = req.body;

```
const [rows] = await db.query(
  "SELECT * FROM students WHERE roll=?",
  [roll]
);

if (rows.length === 0) {
  return res.status(400).json({
    message: "Student Not Found"
  });
}

const student = rows[0];

const validPassword =
  await bcrypt.compare(
    password,
    student.password
  );

if (!validPassword) {
  return res.status(400).json({
    message: "Invalid Password"
  });
}

const token = jwt.sign(
  {
    id: student.id,
    roll: student.roll
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "1d"
  }
);

res.json({
  token,
  student
});
```

} catch (err) {
res.status(500).json(err);
}
});

module.exports = router;
