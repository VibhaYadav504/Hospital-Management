import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getDoctorById,
  updateDoctor,
} from "../../../services/admin/doctorService";
import { message, Spin } from "antd";

const EditDoctor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [doctor, setDoctor] = useState({
    name: "",
    department: "",
    experience: "",
    rating: "",
    description: "",
    photo: null,
    socialLinks: {
      linkedin: "",
      twitter: "",
    },
  });

  useEffect(() => {
    fetchDoctor();
  }, [id]);

  const fetchDoctor = async () => {
    try {
      const data = await getDoctorById(id);
      // photo reset to null so new upload optional
      setDoctor({ ...data, photo: null });
    } catch {
      message.error("Failed to load doctor");
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name.startsWith("socialLinks.")) {
      const key = name.split(".")[1];
      setDoctor({
        ...doctor,
        socialLinks: {
          ...doctor.socialLinks,
          [key]: value,
        },
      });
    } else {
      setDoctor({
        ...doctor,
        [name]: files ? files[0] : value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", doctor.name);
    formData.append("department", doctor.department);
    formData.append("experience", doctor.experience);
    formData.append("rating", doctor.rating);
    formData.append("description", doctor.description);
    if (doctor.photo) formData.append("photo", doctor.photo);
    formData.append("socialLinks[linkedin]", doctor.socialLinks.linkedin);
    formData.append("socialLinks[twitter]", doctor.socialLinks.twitter);

    try {
      setLoading(true);
      await updateDoctor(id, formData);
      message.success("Doctor updated successfully");
      navigate("/admin/doctors");
    } catch {
      message.error("Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Edit Doctor</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={doctor.name}
          onChange={handleChange}
          placeholder="Doctor Name"
          required
          className="w-full border p-2 rounded"
        />

        <select
          name="department"
          value={doctor.department}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        >
          <option value="">Select Department</option>
          <option value="cardiology">Cardiology</option>
          <option value="neurology">Neurology</option>
          <option value="orthopedics">Orthopedics</option>
          <option value="pediatrics">Pediatrics</option>
        </select>

        <input
          name="experience"
          value={doctor.experience}
          onChange={handleChange}
          placeholder="Experience (e.g. 5 years)"
          required
          className="w-full border p-2 rounded"
        />

        <input
          name="rating"
          type="number"
          min="0"
          max="5"
          value={doctor.rating}
          onChange={handleChange}
          placeholder="Rating (0-5)"
          className="w-full border p-2 rounded"
        />

        <textarea
          name="description"
          value={doctor.description}
          onChange={handleChange}
          placeholder="Doctor Description"
          required
          className="w-full border p-2 rounded"
        />

        <input
          name="socialLinks.linkedin"
          value={doctor.socialLinks.linkedin}
          onChange={handleChange}
          placeholder="LinkedIn URL"
          className="w-full border p-2 rounded"
        />

        <input
          name="socialLinks.twitter"
          value={doctor.socialLinks.twitter}
          onChange={handleChange}
          placeholder="Twitter URL"
          className="w-full border p-2 rounded"
        />

        <input type="file" name="photo" onChange={handleChange} />

        <button
          disabled={loading}
          className="bg-teal-600 text-white px-4 py-2 rounded w-full"
        >
          {loading ? <Spin size="small" /> : "Update Doctor"}
        </button>
      </form>
    </div>
  );
};

export default EditDoctor;
