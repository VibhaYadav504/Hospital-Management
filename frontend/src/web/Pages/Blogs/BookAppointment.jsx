import React, { useState } from "react";
import { createAppointment } from "../../../services/admin/appointmentService";
import { useLocation } from "react-router-dom";

// Example list of doctors
const doctors = [
  "Dr. Ayesha Khan (Cardiology)",
  "Dr. Rahul Sharma (Neurology)",
  "Dr. Sarah Johnson (Pediatrics)",
  "Dr. Ahmed Ali (Orthopedics)",
  "Dr. Priya Verma (Dermatology)",
];

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    doctor: "",
    date: "",
    time: "",
    problem: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
const location = useLocation();
const selectedDoctor = location.state?.doctor || ""; 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    if (
      !formData.fullName ||
      !formData.mobile ||
      !formData.email ||
      !formData.doctor ||
      !formData.date ||
      !formData.time ||
      !formData.problem
    ) {
      alert("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);

      // Call API
      const result = await createAppointment(formData);
      console.log("Appointment booked:", result);

      // Reset form
      setFormData({
        fullName: "",
        mobile: "",
        email: "",
       doctor: selectedDoctor, 
        date: "",
        time: "",
        problem: "",
      });

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("Something went wrong! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20
      bg-gradient-to-br from-blue-50 via-white to-green-50">

      <div className="w-full max-w-2xl bg-white/90 backdrop-blur-lg
        rounded-2xl shadow-2xl p-8 border border-blue-100">

        <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-2">
          Book Appointment
        </h2>
        <p className="text-center text-gray-500 mb-6">
          We care about your health 💙
        </p>

        {submitted && (
          <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg text-center font-medium">
            ✅ Appointment booked successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Full Name */}
          <div>
            <label className="text-gray-700 font-medium mb-1 block">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3
                focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none
                transition"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="text-gray-700 font-medium mb-1 block">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              className="w-full rounded-lg border border-gray-300 px-4 py-3
                focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none
                transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-700 font-medium mb-1 block">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3
                focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none
                transition"
            />
          </div>

          {/* Doctor */}
          <div>
            <label className="text-gray-700 font-medium mb-1 block">
              Select Doctor
            </label>
            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3
                focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none
                transition bg-white"
            >
              <option value="">-- Choose a Doctor --</option>
              {doctors.map((doc, idx) => (
                <option key={idx} value={doc}>
                  {doc}
                </option>
              ))}
            </select>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-700 font-medium mb-1 block">
                Select Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3
                  focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
              />
            </div>

            <div>
              <label className="text-gray-700 font-medium mb-1 block">
                Select Time
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3
                  focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
              />
            </div>
          </div>

          {/* Problem */}
          <div>
            <label className="text-gray-700 font-medium mb-1 block">
              Problem Description
            </label>
            <textarea
              name="problem"
              value={formData.problem}
              onChange={handleChange}
              rows="4"
              placeholder="Describe your health problem"
              className="w-full rounded-lg border border-gray-300 px-4 py-3
                focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none
                transition"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-full font-semibold text-white
              bg-gradient-to-r from-blue-500 to-green-500
              hover:from-blue-600 hover:to-green-600
              transition-all duration-300 shadow-lg hover:shadow-xl
              ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {loading ? "Booking..." : "Confirm Appointment"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
