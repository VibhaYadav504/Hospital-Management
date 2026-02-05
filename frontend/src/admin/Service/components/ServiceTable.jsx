import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getServices, deleteService } from "../../../services/admin/serviceService";

const ServiceTable = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const data = await getServices();
      setServices(data);
    } catch (err) {
      console.error("Failed to fetch services", err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      try {
        await deleteService(id);
        setServices(services.filter((s) => s._id !== id));
      } catch (err) {
        console.error("Delete failed", err);
      }
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Services List</h2>
        <Link
          to="/admin/services/add"
          className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
        >
          + Add Service
        </Link>
      </div>

      {/* Table */}
      <table className="min-w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            {[
              "Name",
              "Department",
              "Price",
              "Duration",
              "Actions",
            ].map((h) => (
              <th
                key={h}
                className="px-4 py-2 text-left text-sm font-medium border-b border-gray-300"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {services.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center py-4 text-gray-500">
                No services found.
              </td>
            </tr>
          )}

          {services.map((s) => (
            <tr key={s._id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">{s.name}</td>
              <td className="px-4 py-2">{s.department}</td>
              <td className="px-4 py-2">${s.price}</td>
              <td className="px-4 py-2">{s.duration}</td>
              <td className="px-4 py-2 space-x-3">
                <Link
                  to={`/admin/services/edit/${s._id}`}
                  className="text-blue-600 hover:underline text-sm"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(s._id)}
                  className="text-red-600 hover:underline text-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceTable;
