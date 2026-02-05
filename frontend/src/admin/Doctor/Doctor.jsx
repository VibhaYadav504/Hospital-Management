import React from "react";
import { Routes, Route } from "react-router-dom";

import DoctorTable from "./components/DoctorTable";


const Doctor = () => {
  return (
      
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Doctor Management</h1>

      {/* Nested Routes */}
      {/* <Routes>
        <Route path="/" element={<DoctorTable />} />
        <Route path="add" element={<AddDoctor />} />
        <Route path="edit/:id" element={<EditDoctor />} />
      </Routes> */}
          <DoctorTable/> 
    </div>

  );
};

export default Doctor;
