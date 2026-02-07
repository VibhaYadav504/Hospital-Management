import { uploadToCloudinary } from "../config/cloudinary.js";
import Service from "../models/service.js";
import mongoose from "mongoose";


/* GET ALL SERVICES */
export const getServices = async (req, res) => {
  try {
    const services = await Service.find({ isActive: true });
    res.status(200).json(services);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* GET SERVICE BY ID */
export const getServiceById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid service ID" });
    }

    const service = await Service.findById(id);
    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }

    res.status(200).json(service);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createService = async (req, res) => {
  try {
    let imageData = {};

    if (req.file) {
      const uploadResult = await uploadToCloudinary(req.file.path);
      imageData = {
        imageUrl: uploadResult.secure_url,
        imagePublicId: uploadResult.public_id,
      };
    }

    const service = new Service({
      ...req.body,
      ...imageData,
    });

    const savedService = await service.save();
    res.status(201).json(savedService);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateService = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid service ID" });
    }

    let updateData = { ...req.body };

    if (req.file) {
      const uploadResult = await uploadToCloudinary(req.file.path);
      updateData.imageUrl = uploadResult.secure_url;
      updateData.imagePublicId = uploadResult.public_id;
    }

    const updatedService = await Service.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedService) {
      return res.status(404).json({ error: "Service not found" });
    }

    res.status(200).json(updatedService);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


export const deleteService = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid service ID" });
    }

    const deletedService = await Service.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true }
    );

    if (!deletedService) {
      return res.status(404).json({ error: "Service not found" });
    }

    res.status(200).json({
      message: "Service deleted successfully",
      service: deletedService,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
