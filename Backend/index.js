const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const routes =require("./routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api",routes);

const PORT = process.env.PORT || 5001;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Error:", err));

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));