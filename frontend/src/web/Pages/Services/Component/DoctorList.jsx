import React, { useState } from "react";
import { FaLinkedin, FaTwitter, FaStar } from "react-icons/fa";

const DoctorList = ({ doctors }) => {
  const [expandedIds, setExpandedIds] = useState([]);

  const toggleExpand = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  if (doctors.length === 0) {
    return <p className="text-gray-500">No doctors available.</p>;
  }

  return (
    <div className="md:col-span-2 space-y-8">
      {doctors.map((doctor) => {
        const isExpanded = expandedIds.includes(doctor.id);
        const snippet = doctor.description.slice(0, 150) + "...";

        return (
          <div
            key={doctor.id}
            className="flex flex-col md:flex-row items-center bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-500"
          >
            {/* Doctor Image */}
            <div className="w-full md:w-1/2 h-72 md:h-80 flex-shrink-0 overflow-hidden">
              <img
                src={doctor.photo}
                alt={doctor.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Doctor Info */}
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-center bg-gradient-to-br from-green-50 to-green-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-1">
                {doctor.name}
              </h3>
              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-2">
                {doctor.department}
              </span>
              <p className="text-gray-500 mb-3">{doctor.experience}</p>

              {/* Rating */}
              <div className="flex items-center mb-3">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < doctor.rating ? "text-yellow-400" : "text-gray-300"
                      } mr-1`}
                    />
                  ))}
              </div>

              <p className="text-gray-700 mb-3">
                {isExpanded ? doctor.description : snippet}
              </p>

              <button
                onClick={() => toggleExpand(doctor.id)}
                className="self-start text-blue-600 font-medium mb-3 hover:underline"
              >
                {isExpanded ? "See Less" : "See More"}
              </button>

              <div className="flex items-center gap-4 mb-3">
                <a href="#" className="text-blue-600 hover:text-blue-800 transition">
                  <FaLinkedin size={20} />
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-600 transition">
                  <FaTwitter size={20} />
                </a>
              </div>

              <button className="self-start px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                Book Appointment
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DoctorList;
