import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDoctors, deleteDoctor } from "../../../services/admin/doctorService";
import { message } from "antd";

const DoctorTable = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDoctors = async () => {
    try {
      setLoading(true);
      const data = await getDoctors();
      setDoctors(data);
    } catch {
      message.error("Failed to fetch doctors");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    try {
      await deleteDoctor(id);
      message.success("Doctor deleted");
      fetchDoctors();
    } catch {
      message.error("Delete failed");
    }
  };

  return (
    <div className="bg-white p-6 shadow rounded">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold">Doctors List</h2>
        <Link
          to="/admin/doctors/add"
          className="bg-teal-600 text-white px-4 py-2 rounded"
        >
          + Add Doctor
        </Link>
      </div>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            {[
              "Photo",
              "Name",
              "Department",
              "Experience",
              "Rating",
              "LinkedIn",
              "Twitter",
              "Actions",
            ].map((h) => (
              <th key={h} className="p-2 border">
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td colSpan="8" className="text-center p-4">
                Loading...
              </td>
            </tr>
          ) : doctors.length === 0 ? (
            <tr>
              <td colSpan="8" className="text-center p-4">
                No doctors found
              </td>
            </tr>
          ) : (
            doctors.map((d) => (
              <tr key={d._id} className="border">
                <td className="p-2">
                  {d.photo ? (
                    <img
                      src={d.photo}
                      alt={d.name}
                      className="w-12 h-12 rounded object-cover"
                    />
                  ) : (
                    "—"
                  )}
                </td>

                <td className="p-2">{d.name}</td>
                <td className="p-2">{d.department}</td>
                <td className="p-2">{d.experience}</td>
                <td className="p-2">{d.rating ?? 0}</td>

                <td className="p-2">
                  {d.socialLinks?.linkedin ? (
                    <a
                      href={d.socialLinks.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600"
                    >
                      LinkedIn
                    </a>
                  ) : (
                    "—"
                  )}
                </td>

                <td className="p-2">
                  {d.socialLinks?.twitter ? (
                    <a
                      href={d.socialLinks.twitter}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600"
                    >
                      Twitter
                    </a>
                  ) : (
                    "—"
                  )}
                </td>

                <td className="p-2 space-x-2">
                  <Link
                    to={`/admin/doctors/edit/${d._id}`}
                    className="text-blue-600"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(d._id)}
                    className="text-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorTable;
