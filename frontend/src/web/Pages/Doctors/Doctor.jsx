import React, { useState } from "react";
import { FaLinkedin, FaTwitter, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// Import local doctor images
import D1 from "../../../assets/d1.jpg";
import D2 from "../../../assets/d2.jpg";
import D3 from "../../../assets/d3.jpg";
import D4 from "../../../assets/d4.jpg";
import D5 from "../../../assets/d5.jpg";

const doctors = [
  {
    id: 1,
    name: "Dr. Abhishek Khanna",
    department: "Cardiology",
    experience: "12 Years Experience",
    photo: D1,
    rating: 5,
    description:
      "Dr. Ayesha Khan is a leading cardiologist with over 12 years of experience in heart surgeries, preventive cardiology, and patient care. She has successfully treated hundreds of patients with complex cardiovascular conditions. She is known for her compassionate approach and innovative treatment plans that focus on both lifestyle management and surgical solutions. Dr. Khan regularly participates in international cardiology conferences and publishes research in reputed journals.",
  },
  {
    id: 2,
    name: "Dr. Rahul Sharma",
    department: "Neurology",
    experience: "10 Years Experience",
    photo: D2,
    rating: 4,
    description:
      "Dr. Rahul Sharma is a highly skilled neurologist specializing in neurodegenerative disorders, epilepsy, and brain injuries. With a decade of clinical experience, he has helped numerous patients regain their quality of life. Dr. Sharma believes in a holistic approach combining modern medicine with rehabilitation therapies. He has been awarded multiple accolades for his contributions to neurology research and patient care.",
  },
  {
    id: 3,
    name: "Dr. Sarah Johnson",
    department: "Pediatrics",
    experience: "8 Years Experience",
    photo: D3,
    rating: 5,
    description:
      "Dr. Sarah Johnson is a dedicated pediatrician who focuses on the overall health and well-being of children from infancy to adolescence. With 8 years of experience, she has expertise in preventive care, vaccinations, and managing chronic pediatric conditions. Parents appreciate her empathetic nature and her ability to explain complex medical issues in a simple manner. Dr. Johnson also conducts regular health camps for children in underserved communities.",
  },
  {
    id: 4,
    name: "Dr. Ahmed Ali",
    department: "Orthopedics",
    experience: "15 Years Experience",
    photo: D4,
    rating: 5,
    description:
      "Dr. Ahmed Ali is an experienced orthopedic surgeon specializing in joint replacements, sports injuries, and trauma surgery. Over 15 years, he has performed numerous successful surgeries and has a high patient satisfaction rate. His approach emphasizes minimally invasive techniques, fast recovery, and personalized rehabilitation plans. Dr. Ali frequently contributes to orthopedic research and training programs for young surgeons.",
  },
  {
    id: 5,
    name: "Dr. Priya Verma",
    department: "Dermatology",
    experience: "9 Years Experience",
    photo: D5,
    rating: 4,
    description:
      "Dr. Priya Verma is a renowned dermatologist with expertise in skin care, cosmetic dermatology, and management of chronic skin conditions such as eczema and psoriasis. With 9 years of experience, she combines advanced treatments with a patient-centered approach. She believes in educating patients about preventive skin care and maintaining long-term skin health. Dr. Verma also conducts workshops on dermatology awareness for communities.",
  },
];

const Doctor = () => {
  const [expandedIds, setExpandedIds] = useState([]);

  const toggleExpand = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-500 mb-4">
          Meet Our Doctors
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our team of highly skilled and compassionate doctors is here to provide
          top-notch medical care. Each doctor brings expertise and experience to
          ensure your health is in good hands.
        </p>
      </div>

      {/* Doctor Cards */}
      <div className="max-w-7xl mx-auto space-y-16">
        {doctors.map((doctor, index) => {
          const isExpanded = expandedIds.includes(doctor.id);
          const snippet = doctor.description.slice(0, 150) + "...";

          return (
            <div
              key={doctor.id}
              className={`flex flex-col md:flex-row items-center rounded-xl border border-gray-200 shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-500 bg-white ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Doctor Image */}
              <div className="w-full md:w-1/2 h-80 md:h-96 flex-shrink-0 overflow-hidden rounded-t-xl md:rounded-l-xl md:rounded-tr-none shadow-inner">
                <img
                  src={doctor.photo}
                  alt={doctor.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Doctor Info */}
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-gradient-to-br from-green-50 to-green-100 relative">
                {/* Department Badge */}
                <span className="absolute top-4 right-4 inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium shadow">
                  {doctor.department}
                </span>

                <h3 className="text-2xl font-bold text-gray-800 mb-2">{doctor.name}</h3>

                {/* Rating */}
                <div className="flex items-center mb-4">
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

                <p className="text-gray-700 mb-2 transition-all duration-300">
                  {isExpanded ? doctor.description : snippet}
                </p>

                <button
                  onClick={() => toggleExpand(doctor.id)}
                  className="self-start text-blue-600 font-medium mb-4 hover:underline"
                >
                  {isExpanded ? "See Less" : "See More"}
                </button>

                <div className="flex items-center gap-4 mb-4">
                  {/* Social Icons */}
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600 transition">
                    <FaTwitter size={20} />
                  </a>
                </div>

                <button 
 onClick={() =>
    navigate("/book-appointment", { state: { doctor: doctor.name } })
  }
                className="self-start px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
                  Book Appointment
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Doctor;
