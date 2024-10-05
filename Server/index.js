import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "./database/db.js";
import router from "./routes/router.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

//Middlewares
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is Working at http://localhost:${PORT}`);
});
