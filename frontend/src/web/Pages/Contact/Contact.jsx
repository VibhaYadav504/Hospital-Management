import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCommentDots,
  FaHospital,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaClock,
} from "react-icons/fa";

import NurseImg from "../../../assets/nurse.png";

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-50 min-h-screen py-16">
      {/* ================= HEADING ================= */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
        Contact Us
      </h2>

     <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
  {/* ================= LEFT INFO CARD ================= */}
  <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col md:flex-row gap-6 hover:shadow-2xl transition h-full">
    
    {/* Nurse Image */}
    <div className="w-full md:w-64 rounded-xl overflow-hidden flex-shrink-0">
      <img
        src={NurseImg}
        alt="Nurse"
        className="w-full h-full object-cover hover:scale-105 transition duration-500"
      />
    </div>

    {/* Hospital Info */}
    <div className="flex-1 flex flex-col justify-between space-y-4 h-full">
      <div>
        <h3 className="text-2xl font-semibold text-blue-700 flex items-center gap-2">
          <FaHospital /> Hospital Info
        </h3>

        <p className="text-gray-700">
          <strong>📍 Address:</strong> 123 Health St, Wellness City
        </p>
        <p className="text-gray-700">
          <strong>📞 Phone:</strong> (123) 456-7890
        </p>
        <p className="text-gray-700">
          <strong>✉ Email:</strong> info@medino.com
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-3 mt-4">
          <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm">
            24×7 Emergency
          </span>
          <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">
            Trusted Doctors
          </span>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 mt-6">
        <a className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
          <FaFacebookF />
        </a>
        <a className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-500 text-white hover:bg-sky-600 transition">
          <FaTwitter />
        </a>
        <a className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 text-white hover:bg-pink-600 transition">
          <FaInstagram />
        </a>
      </div>
    </div>
  </div>

  {/* ================= CONTACT FORM ================= */}
  <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition h-full flex flex-col justify-between">
    <h3 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
      Send Us a Message
    </h3>

    <form className="space-y-4 flex-1">
      <div className="relative">
        <FaUser className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          placeholder="Your Name"
          className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="relative">
        <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="relative">
        <FaPhone className="absolute left-3 top-3 text-gray-400" />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500">
        <option>Select Subject</option>
        <option>General Inquiry</option>
        <option>Appointment</option>
        <option>Emergency</option>
        <option>Feedback</option>
      </select>

      <div className="relative">
        <FaCommentDots className="absolute left-3 top-3 text-gray-400" />
        <textarea
          rows="4"
          placeholder="Write your message..."
          className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <button className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition">
        Send Message
      </button>
    </form>
  </div>
</div>


      {/* ================= TIMETABLE ================= */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <h3 className="text-3xl font-bold text-center mb-8 flex justify-center items-center gap-2 text-gray-800">
          <FaClock className="text-blue-600" /> Visiting Hours
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { day: "Monday – Friday", time: "9:00 AM – 8:00 PM" },
            { day: "Saturday", time: "9:00 AM – 5:00 PM" },
            { day: "Sunday", time: "10:00 AM – 2:00 PM" },
            { day: "Emergency", time: "24 × 7 Available" },
            { day: "Lab Services", time: "8:00 AM – 6:00 PM" },
            { day: "Pharmacy", time: "9:00 AM – 10:00 PM" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition"
            >
              <h4 className="text-lg font-semibold text-blue-700">
                {item.day}
              </h4>
              <p className="text-gray-600 mt-2">{item.time}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Find Us Here
        </h3>

        <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8392335975!2d77.06889968159165!3d28.52758200631691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e2e1a0f1d9%3A0x4e5d6f89e98dcb5f!2sHospital!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hospital Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
