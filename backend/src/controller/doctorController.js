import Doctor from "../models/doctor.js";
import mongoose from "mongoose";
import { uploadToCloudinary } from "../config/cloudinary.js";
// GET all doctors
export const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET doctor by ID
export const getDoctorById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid doctor ID" });
    }

    const doctor = await Doctor.findById(id);
    if (!doctor) return res.status(404).json({ error: "Doctor not found" });

    res.status(200).json(doctor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CREATE doctor
export const createDoctor = async (req, res) => {
  try {

    console.log("-------------------------------------------")
    console.log(req)
    let {
      name,
      department,
      experience,
      rating,
      description,
      photo,
      socialLinks,
    } = req.body;

    console.log(name)

    const doctor = new Doctor({
      name,
      department,
      experience,
      rating,
      description,
      photo,
      socialLinks: {
        linkedin: socialLinks?.linkedin || "",
        twitter: socialLinks?.twitter || "",
      },
    });

    const savedDoctor = await doctor.save();
    res.status(201).json(savedDoctor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// UPDATE doctor
export const updateDoctor = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid doctor ID" });
    }

    const {
      name,
      department,
      experience,
      rating,
      description,
      photo,
      socialLinks,
    } = req.body;

    const updatedDoctor = await Doctor.findByIdAndUpdate(
      id,
      {
        name,
        department,
        experience,
        rating,
        description,
        photo,
        socialLinks: {
          linkedin: socialLinks?.linkedin || "",
          twitter: socialLinks?.twitter || "",
        },
      },
      { new: true, runValidators: true }
    );

    if (!updatedDoctor)
      return res.status(404).json({ error: "Doctor not found" });

    res.status(200).json(updatedDoctor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE doctor
export const deleteDoctor = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid doctor ID" });
    }

    const deletedDoctor = await Doctor.findByIdAndDelete(id);

    if (!deletedDoctor)
      return res.status(404).json({ error: "Doctor not found" });

    res.status(200).json({ message: "Doctor deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
