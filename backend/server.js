import express from "express";
import dotenv from "dotenv";
import routes from "./src/routes/index.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api", routes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
