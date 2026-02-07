import React, { useState } from "react";
import { createService } from "../../../services/admin/serviceService";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const AddService = () => {
  const navigate = useNavigate();

  const [service, setService] = useState({
    name: "",
    description: "",
    price: "",
    duration: "",
    department: "",
    image: null, // 👈 FILE
  });

  // text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setService({ ...service, [name]: value });
  };

  // image input
  const handleImageChange = (e) => {
    setService({ ...service, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation
    if (!service.image) {
      message.error("Please upload an image");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", service.name);
      formData.append("description", service.description);
      formData.append("price", service.price);
      formData.append("duration", service.duration);
      formData.append("department", service.department);
      formData.append("image", service.image); // 👈 MUST MATCH multer

      await createService(formData);

      message.success("Service added successfully!");
      navigate("/admin/services");
    } catch (err) {
      console.error(err);
      message.error(
        err?.response?.data?.error || "Failed to add service"
      );
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow rounded">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Add Service
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={service.name}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={service.description}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block font-medium mb-1">Price</label>
          <input
            type="number"
            name="price"
            value={service.price}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        {/* Duration */}
        <div>
          <label className="block font-medium mb-1">Duration</label>
          <input
            type="text"
            name="duration"
            value={service.duration}
            onChange={handleChange}
            placeholder="e.g. 30 minutes"
            className="w-full border rounded p-2"
          />
        </div>

        {/* Department */}
        <div>
          <label className="block font-medium mb-1">Department</label>
          <input
            type="text"
            name="department"
            value={service.department}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block font-medium mb-1">
            Service Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
        >
          Add Service
        </button>
      </form>
    </div>
  );
};

export default AddService;
