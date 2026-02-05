import React from "react";

const ServiceList = ({ services, selectedService, setSelectedService }) => {
  return (
    <div className="md:col-span-1 space-y-4">
      {services.map((service, index) => (
        <div
          key={index}
          onClick={() => setSelectedService(service.name)}
          className={`flex items-center cursor-pointer rounded-xl overflow-hidden shadow-md transition transform hover:scale-105 ${
            selectedService === service.name
              ? "border-2 border-blue-500"
              : "border border-gray-200"
          }`}
        >
          <div className="w-24 h-24 overflow-hidden flex-shrink-0">
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">{service.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
