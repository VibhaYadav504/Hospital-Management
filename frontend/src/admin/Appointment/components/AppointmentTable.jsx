import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getAppointments,
  deleteAppointment,
} from "../../../services/admin/appointmentService";
import { message, Spin } from "antd";

const AppointmentTable = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch all appointments
  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const data = await getAppointments();
      setAppointments(data);
    } catch (err) {
      console.error(err);
      message.error("Failed to fetch appointments.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  // Delete appointment
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this appointment?"))
      return;

    try {
      await deleteAppointment(id);
      message.success("Appointment deleted successfully!");
      fetchAppointments();
    } catch (err) {
      console.error(err);
      message.error("Failed to delete appointment.");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Appointment List
        </h2>
        <Link
          to="/admin/appointments/add"
          className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
        >
          + Add Appointment
        </Link>
      </div>

      {/* Loader */}
      {loading ? (
        <div className="text-center py-10">
          <Spin size="large" />
        </div>
      ) : (
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              {[
                "Patient Name",
                "Doctor",
                "Mobile",
                "Date",
                "Time",
                "Status",
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
            {appointments.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-500">
                  No appointments found.
                </td>
              </tr>
            ) : (
              appointments.map((a) => (
                <tr key={a._id} className="border-b">
                  <td className="px-4 py-2">{a.fullName}</td>
                  <td className="px-4 py-2">{a.doctor}</td>
                  <td className="px-4 py-2">{a.mobile}</td>
                  <td className="px-4 py-2">
                    {new Date(a.date).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2">{a.time}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        a.status === "Confirmed"
                          ? "bg-green-100 text-green-700"
                          : a.status === "Cancelled"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {a.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 space-x-3">
                    <Link
                      to={`/admin/appointments/edit/${a._id}`}
                      className="text-blue-600 hover:underline text-sm"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(a._id)}
                      className="text-red-600 hover:underline text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AppointmentTable;
