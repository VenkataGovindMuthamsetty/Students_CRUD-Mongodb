const express = require("express");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const bodyParser = require("body-parser");
const studentsRoutes = require("./routes/studentsRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

dotEnv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Mongodb connected successfully");
  })
  .catch((error) => {
    console.log("Error", error);
  });

app.use("/students", studentsRoutes);

app.listen(PORT, () => {
  console.log(`Server connected at port ${PORT}`);
});
