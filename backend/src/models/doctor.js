import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      default: "", // match React state
    },
    department: {
      type: String,
      required: true,
      trim: true,
      default: "",
    },
    experience: {
      type: String,
      required: true,
      trim: true,
      default: "",
    },
    photo: {
      type: String, // image URL or file path
      required: true,
      default: null,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      default: "",
    },
    socialLinks: {
      linkedin: {
        type: String,
        default: "",
      },
      twitter: {
        type: String,
        default: "",
      },
    },
  },
  {
    timestamps: true,
  }
);

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;
