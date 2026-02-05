import express from "express";
import {
  getServices,
  getServiceById,
  createService,
  updateService,
  deleteService
} from "../controller/serviceController.js";
import { upload } from "../middleware/multer.js";


const router = express.Router();
router.get("/get", getServices);
router.get("/:id", getServiceById);
router.post("/", upload.single("image"), createService);


router.put("/:id", updateService);
router.delete("/:id", deleteService);

export default router;
