import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT || 4702;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Hello World! updated" });
});

app.listen(port, () =>
  console.log(`Server running on port http://localhost:${port}`)
);
