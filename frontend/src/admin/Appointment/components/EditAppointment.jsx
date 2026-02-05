import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getAppointmentById,
  updateAppointment,
} from "../../../services/admin/appointmentService";
import { message, Spin } from "antd";

const EditAppointment = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [appointment, setAppointment] = useState({
    fullName: "",
    mobile: "",
    email: "",
    doctor: "",
    date: "",
    time: "",
    problem: "",
    status: "Pending",
  });

  const [loading, setLoading] = useState(false);

  // Fetch appointment by ID
  const fetchAppointment = async () => {
    try {
      setLoading(true);
      const data = await getAppointmentById(id);

      setAppointment({
        fullName: data.fullName || "",
        mobile: data.mobile || "",
        email: data.email || "",
        doctor: data.doctor || "",
        date: data.date ? data.date.split("T")[0] : "",
        time: data.time || "",
        problem: data.problem || "",
        status: data.status || "Pending",
      });
    } catch (err) {
      console.error(err);
      message.error("Failed to fetch appointment details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointment();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment({ ...appointment, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await updateAppointment(id, appointment);
      message.success("Appointment updated successfully!");
      navigate("/admin/appointments");
    } catch (err) {
      console.error(err);
      message.error("Failed to update appointment.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow rounded">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Edit Appointment
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Patient Name */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Patient Name
          </label>
          <input
            type="text"
            name="fullName"
            value={appointment.fullName}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        {/* Mobile */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobile"
            value={appointment.mobile}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={appointment.email}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        {/* Doctor */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Doctor
          </label>
          <input
            type="text"
            name="doctor"
            value={appointment.doctor}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={appointment.date}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Time
            </label>
            <input
              type="time"
              name="time"
              value={appointment.time}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
              required
            />
          </div>
        </div>

        {/* Problem */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Problem
          </label>
          <textarea
            name="problem"
            value={appointment.problem}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            rows="3"
            required
          />
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Status
          </label>
          <select
            name="status"
            value={appointment.status}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
          >
            <option value="Pending">Pending</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition"
        >
          Update Appointment
        </button>
      </form>
    </div>
  );
};

export default EditAppointment;
