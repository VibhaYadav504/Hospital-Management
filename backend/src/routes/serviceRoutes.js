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
router.post("/add", upload.single("image"), createService);
router.put("/:id", updateService);
router.delete("/:id", deleteService);


router.get("/abc", async(req, res) => {
  try {
    const services = await Service.find({ isActive: true });
    res.status(200).json(services);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})

export default router;
