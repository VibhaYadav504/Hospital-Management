import React from "react";
import { Routes, Route } from "react-router-dom";

import AppointmentTable from "./components/AppointmentTable";


const Appointment = () => {
  return (
    
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Appointment Management
      </h1>

      {/* Nested Routes */}
      {/* <Routes>
        <Route path="/" element={<AppointmentTable />} />
        <Route path="add" element={<AddAppointment />} />
        <Route path="edit/:id" element={<EditAppointment />} />
      </Routes> */}
      <AppointmentTable/>
    </div>
  
  );
};

export default Appointment;
