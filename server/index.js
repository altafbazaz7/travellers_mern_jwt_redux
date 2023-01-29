import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import Connection from "./db/db.js";
import userRouter from "./routes/user.js";



const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

// -----------------------Middlewares-----------------------
app.use(morgan());
app.use(express.json());
app.use(cors());

// ------------------------Routes------------------------
app.use("/users", userRouter);
// app.use("/tour", tourRouter);


Connection();

app.get("/", (req, res) => {
  res.send("Welcome to tour API");
});

// -----------------------Server------------------------
app.listen(PORT, (req,res) => {
  console.log(`Sever is running on port ${PORT}`);
})