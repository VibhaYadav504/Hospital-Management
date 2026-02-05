

import express from "express";
import {
  getDoctors,
  getDoctorById,
  createDoctor,
  updateDoctor,
  deleteDoctor,
} from "../controller/doctorController.js";

const router = express.Router();

router.get("/get", getDoctors);
router.get("/:id", getDoctorById);
router.post("/add", createDoctor);
router.put("/:id", updateDoctor);
router.delete("/:id", deleteDoctor);

export default router;
