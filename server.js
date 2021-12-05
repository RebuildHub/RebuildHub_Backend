const express = require("express");
const cors = require("cors")
const app = express();
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/auth")
const wasteRoutes = require("./routes/wasteRoutes");
const companyRoutes = require("./routes/companyRoutes");


//middleware
app.use(express.json());
app.use(cors());

//connect to database
connectDB();

//routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/wastes", wasteRoutes);
app.use("/api/company", companyRoutes);
//listen to PORT
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});
