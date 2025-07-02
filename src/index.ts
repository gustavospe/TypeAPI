import express, { Express } from "express";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Ready Server");
});

app.listen(port, () => {
  console.log(`Rodando na porta: ${port}`);
});