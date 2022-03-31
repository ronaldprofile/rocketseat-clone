import express from "express";
import cors from "cors";
import { router } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(4000, () =>
  console.info("Server is running on http://localhost:4000")
);
