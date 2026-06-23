const express = require("express");
const db = require("../config/db");
const verifyToken =
require("../middleware/authMiddleware");

const router = express.Router();

/* Get All Students */
router.get(
"/",
verifyToken,
async (req, res) => {
const [rows] = await db.query(
"SELECT * FROM students"
);


res.json(rows);


}
);

/* Get Student */
router.get(
"/:id",
verifyToken,
async (req, res) => {
const [rows] = await db.query(
"SELECT * FROM students WHERE id=?",
[req.params.id]
);


res.json(rows[0]);


}
);

/* Update Student */
router.put(
"/:id",
verifyToken,
async (req, res) => {
const {
name,
email,
branch,
attendance
} = req.body;


await db.query(
  `UPDATE students
   SET name=?,
       email=?,
       branch=?,
       attendance=?
   WHERE id=?`,
  [
    name,
    email,
    branch,
    attendance,
    req.params.id
  ]
);

res.json({
  message: "Updated"
});


}
);

/* Delete Student */
router.delete(
"/:id",
verifyToken,
async (req, res) => {
await db.query(
"DELETE FROM students WHERE id=?",
[req.params.id]
);


res.json({
  message: "Deleted"
});


}
);

module.exports = router;
