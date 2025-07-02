import express, { Express } from "express";
import "reflect-metadata";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Ready Server");
});

app.listen(process.env.API_PORT, () => {
  console.log(`Rodando na porta: ${process.env.API_PORT}`);
});