const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const authRoutes =
require("./routes/authRoutes");

const studentRoutes =
require("./routes/studentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);

app.get("/", (req, res) => {
res.send("College API Running...");
});

app.listen(
process.env.PORT,
() => {
console.log(
`Server running on port ${process.env.PORT}`
);
}
);
