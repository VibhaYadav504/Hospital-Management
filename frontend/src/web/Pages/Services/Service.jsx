import React, { useState } from "react";


// Import images
import D1 from "../../../assets/d1.jpg";
import D2 from "../../../assets/d2.jpg";
import D3 from "../../../assets/d3.jpg";
import D4 from "../../../assets/d4.jpg";
import D5 from "../../../assets/d5.jpg";
import D6 from "../../../assets/doctor2.jpg";
import D7 from "../../../assets/doctor2.jpg";
import D8 from "../../../assets/doctor3.jpg";
import D9 from "../../../assets/doctor4.jpg";
import ServiceList from "./Component/ServiceList";
import DoctorList from "./Component/DoctorList";

// Services array
const services = [
  { name: "Cardiology", image: D1 },
  { name: "Neurology", image: D2 },
  { name: "Pediatrics", image: D3 },
  { name: "Orthopedics", image: D4 },
  { name: "Dermatology", image: D5 },
  { name: "Oncology", image: D6 },
];

// Doctors array
const doctors = [
  { id: 1, name: "Dr. Abhishek Khanna", department: "Cardiology", experience: "12 Years Experience", photo: D1, rating: 5, description: "Expert cardiologist specializing in heart surgeries and preventive cardiology." },
  { id: 2, name: "Dr. Rahul Sharma", department: "Neurology", experience: "10 Years Experience", photo: D2, rating: 4, description: "Specialist in neurodegenerative disorders, epilepsy, and brain injuries." },
  { id: 3, name: "Dr. Sarah Johnson", department: "Pediatrics", experience: "8 Years Experience", photo: D3, rating: 5, description: "Dedicated pediatrician focused on preventive care and child well-being." },
  { id: 4, name: "Dr. Ahmed Ali", department: "Orthopedics", experience: "15 Years Experience", photo: D4, rating: 5, description: "Experienced orthopedic surgeon in joint replacements and sports injuries." },
  { id: 5, name: "Dr. Priya Verma", department: "Dermatology", experience: "9 Years Experience", photo: D5, rating: 4, description: "Renowned dermatologist with expertise in skin care and chronic conditions." },
  { id: 6, name: "Dr. Sanjay Mehta", department: "Oncology", experience: "14 Years Experience", photo: D6, rating: 5, description: "Expert oncologist providing cutting-edge cancer treatments." },
  { id: 7, name: "Dr. Kavita Singh", department: "Cardiology", experience: "11 Years Experience", photo: D7, rating: 4, description: "Specialist in cardiac care, focusing on minimally invasive surgeries." },
  { id: 8, name: "Dr. Priyanka Roy", department: "Neurology", experience: "9 Years Experience", photo: D8, rating: 5, description: "Neurologist specializing in epilepsy and rehabilitation therapies." },
  { id: 9, name: "Dr. Ruhani Verma", department: "Orthopedics", experience: "13 Years Experience", photo: D9, rating: 5, description: "Orthopedic surgeon expert in sports injuries and joint replacements." },
];

const Service = () => {
  const [selectedService, setSelectedService] = useState(services[0].name);

  const filteredDoctors = doctors.filter(
    (doc) => doc.department === selectedService
  );

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Our Services & Doctors
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceList
          services={services}
          selectedService={selectedService}
          setSelectedService={setSelectedService}
        />

        <DoctorList doctors={filteredDoctors} />
      </div>
    </div>
  );
};

export default Service;
