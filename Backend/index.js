const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const serviceProviderRouter =require("./routes/serviceProvider")
const app = express();


app.use(cors());
app.use(express.json());
app.use("/serviceProvider",serviceProviderRouter)

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

/*mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Error:", err));

app.get("/", (req, res) => {
  res.send("Server is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const serviceProviderRoutes = require("./routes/serviceProvider");
app.use("/service-provider", serviceProviderRoutes);

app.post('/service-provider/add', (req, res) => {
    res.send("Service Provider Added!"); // Dummy response
});
*/
