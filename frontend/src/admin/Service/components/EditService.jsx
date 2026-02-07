import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getServiceById, updateService } from "../../../services/admin/serviceService";
import { message } from "antd";

const EditService = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState({
    name: "",
    description: "",
    price: "",
    duration: "",
    department: "",
    image: "",
  });

  useEffect(() => {
    const fetchService = async () => {
      try {
        const data = await getServiceById(id);
        setService(data);
      } catch (err) {
        console.error(err);
        message.error("Failed to load service data");
      }
    };
    fetchService();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setService({ ...service, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateService(id, service);
      message.success("Service updated successfully!");
      navigate("/admin/services");
    } catch (err) {
      console.error(err);
      message.error("Failed to update service");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Edit Service</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {["name", "description", "price", "duration", "department", "image"].map((field) => (
          <div key={field}>
            <label className="block font-medium mb-1">
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            {field === "description" ? (
              <textarea
                name={field}
                value={service[field]}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            ) : (
              <input
                type={field === "price" ? "number" : "text"}
                name={field}
                value={service[field]}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder={field === "duration" ? "e.g., 30 minutes" : ""}
                required={field !== "duration" && field !== "imageUrl"}
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition"
        >
          Update Service
        </button>
      </form>
    </div>
  );
};

export default EditService;
