import React, { useEffect, useState } from "react";
import { FaUserMd, FaHospitalAlt, FaSmile } from "react-icons/fa";

const About = () => {
  const [patients, setPatients] = useState(0);
  const [doctors, setDoctors] = useState(0);
  const [years, setYears] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPatients((prev) => (prev < 5000 ? prev + 50 : prev));
      setDoctors((prev) => (prev < 120 ? prev + 2 : prev));
      setYears((prev) => (prev < 25 ? prev + 1 : prev));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Our Hospital
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          Delivering world-class healthcare with compassion, innovation, and
          excellence.
        </p>
      </section>

      {/* About & Mission */}
      <section className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              About Our Hospital
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our hospital is committed to delivering top-notch healthcare. We
              combine advanced technology with a patient-first approach to
              ensure the best outcomes for everyone.
            </p>
          </div>
          <div className="bg-blue-100 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Mission & Vision
            </h2>
            <p className="mb-3">
              <strong>Mission:</strong> Provide accessible, high-quality
              healthcare services that improve lives.
            </p>
            <p>
              <strong>Vision:</strong> To be a trusted healthcare leader known
              for clinical excellence, patient safety, and compassionate care.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <FaUserMd className="text-blue-600 text-3xl mt-1" />
              <p>Experienced and dedicated medical professionals</p>
            </div>
            <div className="flex items-start space-x-4">
              <FaHospitalAlt className="text-blue-600 text-3xl mt-1" />
              <p>State-of-the-art facilities and equipment</p>
            </div>
            <div className="flex items-start space-x-4">
              <FaUserMd className="text-blue-600 text-3xl mt-1" />
              <p>24/7 emergency and critical care services</p>
            </div>
            <div className="flex items-start space-x-4">
              <FaSmile className="text-blue-600 text-3xl mt-1" />
              <p>Patient-centered and ethical treatment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Counters */}
      <section className="bg-blue-600 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div className="transform hover:scale-105 transition duration-300">
            <FaUserMd className="mx-auto text-5xl mb-4" />
            <h3 className="text-4xl font-bold">{years}+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="transform hover:scale-105 transition duration-300">
            <FaHospitalAlt className="mx-auto text-5xl mb-4" />
            <h3 className="text-4xl font-bold">{doctors}+</h3>
            <p>Expert Doctors</p>
          </div>
          <div className="transform hover:scale-105 transition duration-300">
            <FaSmile className="mx-auto text-5xl mb-4" />
            <h3 className="text-4xl font-bold">{patients}+</h3>
            <p>Happy Patients</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
