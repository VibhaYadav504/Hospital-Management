import express from "express";
import morgan from "morgan";
import cors from "cors";
import doctorRoutes from "./routes/doctorRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js"
const app = express(); 
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/api/dashboard",dashboardRoutes)
app.use("/api/auth", authRoutes);
app.use("/api/doctor", doctorRoutes);
app.use("/api/service", serviceRoutes);
app.use("/api/appointment", appointmentRoutes);
app.get("/test", (req, res) => {
  res.send("API is running");
});
export default app;
