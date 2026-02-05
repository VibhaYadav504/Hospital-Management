import React from "react";
import { Routes, Route } from "react-router-dom";


// Import service components
import ServiceTable from "./components/ServiceTable";


const Service = () => {
  return (
  
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Service Management</h1>

        {/* Nested Routes */}
        <ServiceTable />
      </div>
   
  );
};

export default Service;
