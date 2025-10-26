import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "Form received successfully!" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
