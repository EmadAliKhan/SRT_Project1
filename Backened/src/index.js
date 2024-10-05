import { app } from "./app.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./env",
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
