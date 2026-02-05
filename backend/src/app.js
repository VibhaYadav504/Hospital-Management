import express from "express";
import morgan from "morgan";
import cors from "cors";
import doctorRoutes from "./routes/doctorRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
const app = express();

app.use(express.json());
// app.use(cors({
//   origin: "http://localhost:5173",
//   credentials: true,
// }));
app.use(cors());
app.use(morgan("dev"));

app.use("/api/doctor", doctorRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/appointment", appointmentRoutes)
app.get("/test", (req, res) => {
  res.send("API is running");
});

export default app;
