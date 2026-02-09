

import 'hover.css/css/hover-min.css';
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { useState } from 'react';
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


import web1 from "../../../assets/web1.jpg";
import web2 from "../../../assets/web2.jpg";
import web3 from "../../../assets/web3.jpg";
import web5 from "../../../assets/web5.jpg";
import oncology from "../../../assets/oncology.jpg";
import cardio from "../../../assets/cardio.jpg";
import pediatrics from "../../../assets/pediatrics.jpg";
import orthopedics from "../../../assets/orthopedics.jpg";
import diagnostic from "../../../assets/diagnostic.jpg";
import orthodontist from "../../../assets/orthodontist.jpg";
import doctor4 from "../../../assets/doctor4.jpg";
import doctor2 from "../../../assets/doctor2.jpg";
import doctor3 from "../../../assets/doctor3.jpg";
import { useNavigate } from "react-router-dom";

// Feature Card Component
const FeatureCard = ({ title, description, color }) => {
  return (
    <div
      className={`bg-white p-6 rounded-xl shadow-md text-center border-t-4 ${color} 
      transform transition duration-500 hover:scale-105 hover:shadow-xl`}
    >
      {/* Icon Circle */}
      <div
        className={`w-12 h-12 mx-auto mb-4 rounded-full ${color} flex items-center justify-center text-white text-xl font-bold
        transition duration-500 group-hover:bg-opacity-90`}
      >
        {title.charAt(0)}
      </div>

      <h3 className="text-xl font-semibold mb-2 text-gray-800 transition duration-500 hover:text-blue-600">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};


// Services Data
const services = [
  { name: "Oncology", image: oncology },
  { name: "Cardio", image: cardio },
  { name: "Pediatrics", image: pediatrics },
  { name: "Orthopedics", image: orthopedics },
  { name: "Diagnostic Lab", image: diagnostic },
  { name: "Orthodontist", image: orthodontist },
];
const doctors = [
  {
    name: "Dr. Amit Sharma",
    specialty: "Cardiologist",
    image: doctor2,
  },
  {
    name: "Dr. Neha Verma",
    specialty: "Pediatrician",
    image: doctor4,
  },
  {
    name: "Dr. Rahul Mehta",
    specialty: "Orthopedist",
    image: doctor3,
  },
];
const testimonialSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};



const HomePage = () => {
    const navigate = useNavigate();
   const typedRef = useRef(null);
   
   // Hero background images
   const heroImages = [web1, web2, web3, web5];
   const [currentBg, setCurrentBg] = useState(0);
 
   // Cycle images every 5 seconds
   useEffect(() => {
     const interval = setInterval(() => {
       setCurrentBg((prev) => (prev + 1) % heroImages.length);
     }, 5000); // Change image every 5 seconds
     return () => clearInterval(interval);
   }, []);
 
   // Typed.js for hero text
   useEffect(() => {
     const typed = new Typed(typedRef.current, {
       strings: [
         "Health Solution",
         "Care You Can Trust",
         "Professional Healthcare"
       ],
       typeSpeed: 50,
       backSpeed: 30,
       backDelay: 2000,
       loop: true,
     });
     return () => typed.destroy();
   }, []);
 
   return (
     <div className="bg-white text-white">
       {/* ================= HERO ================= */}
       <section className="relative min-h-screen w-full overflow-hidden transition-all duration-1000">
         {/* Background Image */}
         <div
           className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
           style={{ backgroundImage: `url(${heroImages[currentBg]})` }}
         />
 
         {/* Blue Overlay */}
         <div className="absolute inset-0 bg-blue-900/70 transition-all duration-1000" />
 
         {/* Content */}
         <div className="relative z-10 max-w-7xl mx-auto px-8 min-h-screen flex items-center">
           <div className="w-full flex flex-col md:flex-row items-center justify-between gap-16">
             {/* Left Text */}
             <div className="md:w-1/2 space-y-6">
               <p className="uppercase tracking-widest text-sm text-blue-200">
                 Total Care
               </p>
 
               <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
                 Providing <br />
                 <span ref={typedRef} className="text-blue-300"></span>
               </h1>
 
               <p className="text-lg text-blue-100 max-w-md">
                 We are caring. Professional medical services with trust and
                 modern technology.
               </p>
 
               <div className="flex gap-4">
                 <button className="bg-primary px-6 py-3 rounded-md font-semibold">
                   Our Services
                 </button>
                 <button className="border border-white px-6 py-3 rounded-md font-semibold">
                   Contact Us
                 </button>
               </div>
             </div>
           </div>
         </div>
       </section>
      {/* ================= KEY FEATURES ================= */}
      <section className="bg-lightGray py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-800">
            Key Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="24×7 Emergency"
              description="Emergency services available 24 hours a day, 7 days a week."
              color="border-blue-500 bg-blue-500"
            />
            <FeatureCard
              title="Experienced Doctors"
              description="Highly skilled and experienced medical professionals."
              color="border-blue-500 bg-blue-500"
            />
            <FeatureCard
              title="Modern Equipment"
              description="State-of-the-art equipment for accurate diagnosis and treatment."
              color="border-blue-500 bg-blue-500"
            />
          </div>
        </div>
      </section>

      {/* ================= SERVICES WITH IMAGES ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-800">
            Our Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md overflow-hidden 
          transform transition duration-500 hover:scale-105 hover:shadow-xl"
              >
                {/* Image Frame */}
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Service Name */}
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {service.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    
{/* ================= DOCTORS PREVIEW ================= */}
<section className="py-16 bg-gray-100">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-800">
      Meet Our Doctors
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {doctors.map((doctor, index) => (
        <div
          key={index}
          className="relative bg-white rounded-xl shadow-lg overflow-hidden border-4 border-blue-200 group transition-transform hover:scale-105"
        >
          {/* Doctor Image */}
          <div className="overflow-hidden">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Content */}
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              {doctor.name}
            </h3>
            <p className="text-blue-500 font-medium">{doctor.specialty}</p>

            {/* Book Appointment Button */}
            <button onClick={() => navigate("/book-appointment")}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-semibold transition">
              Book Appointment
            </button>
          </div>

          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-orange-500 hover:bg-white hover:text-orange-500 text-white w-10 h-10 flex items-center justify-center rounded-full transition-colors"
              >
                <i className="fa fa-search"></i>
              </a>
              <a
                href="#"
                className="bg-orange-500 hover:bg-white hover:text-orange-500 text-white w-10 h-10 flex items-center justify-center rounded-full transition-colors"
              >
                <i className="fa fa-link"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>




      {/* ================= TESTIMONIALS ================= */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-800">
      Patient Reviews
    </h2>

    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={30}
      slidesPerView={3}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {[
 
   {
    text: "Very professional doctors and excellent care. The staff was friendly, attentive, and guided me through every step of the treatment with patience and kindness.",
    name: "Ramesh Kumar"
  },
  {
    text: "Clean facilities, modern equipment, and highly skilled medical staff. The overall experience was smooth, reassuring, and made me feel safe at all times.",
    name: "Sunita Verma"
  },
  {
    text: "Doctors explained everything clearly, answered all my questions, and ensured I understood my treatment plan fully. I felt valued and well cared for.",
    name: "Anil Sharma"
  },
  {
    text: "I received personalized attention throughout my treatment. The hospital environment was calm, professional, and every staff member was courteous and supportive.",
    name: "Priya Singh"
  },
  {
    text: "The hospital is well-organized, with clear processes and attentive staff. From admission to discharge, every step was smooth and professionally handled.",
    name: "Rajesh Mehta"
  },
  {
    text: "Quick response in emergencies, with very caring doctors who made sure I was comfortable and informed throughout. Truly a life-saving team.",
    name: "Neha Gupta"
  },
  {
    text: "Modern equipment, friendly staff, and a supportive environment. My experience here was comfortable, informative, and reassuring at every stage.",
    name: "Amit Khanna"
  },
 
 
      ].map((review, index) => (
        <SwiperSlide key={index}>
          <div
            className="
              relative bg-lightGray p-8 h-full
              rounded-xl rounded-tr-[60px]
              shadow-md
              transform transition-all duration-500 ease-in-out
              hover:-translate-y-2
              hover:shadow-xl
              hover:bg-blue-50
            "
          >
            {/* Quote Icon */}
            <div
              className="
                absolute top-4 right-4
                text-blue-500 text-3xl font-bold
                transition-colors duration-300
              "
            >
              “
            </div>

            {/* Review Text */}
            <p className="italic text-gray-700 leading-relaxed mb-6 transition-colors duration-300">
              {review.text}
            </p>

            {/* Reviewer Name */}
            <p className="font-semibold text-gray-900 border-t pt-4 transition-colors duration-300">
              — {review.name}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>









    </div>
  );
};

const Feature = ({ title, color }) => (
  <div className={`bg-white p-6 rounded-xl shadow-md border-t-4 ${color} text-center`}>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>Quality healthcare you can trust.</p>
  </div>
);

const FooterItem = ({ title, text }) => (
  <div>
    <h4 className="font-semibold mb-2">{title}</h4>
    <p>{text}</p>
  </div>
);

export default HomePage;
