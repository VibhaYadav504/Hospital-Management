

import express from "express";
import {
  getDoctors,
  getDoctorById,
  createDoctor,
  updateDoctor,
  deleteDoctor,
} from "../controller/doctorController.js";
import { upload } from "../middleware/multer.js";

const router = express.Router();

router.get("/", getDoctors);
router.get("/:id", getDoctorById);
router.post("/", upload.single("photo"), createDoctor);
router.put("/:id", upload.single("photo"), updateDoctor);
router.delete("/:id", deleteDoctor);

export default router;
