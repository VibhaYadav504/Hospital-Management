import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-teal-800 text-white min-h-screen p-5">
      {/* Logo */}
      <h2 className="text-xl font-bold mb-8">HealthCare</h2>

      {/* Menu */}
      <nav className="space-y-2">
        <SidebarItem label="Dashboard" icon="🏠" to="/admin/dashboard" />

        {/*  Updated Services link to admin route */}
        <SidebarItem label="Services" icon="🧑" to="/admin/services" />

        {/* Doctor link */}
        <SidebarItem label="Doctors" icon="👨‍⚕️" to="/admin/doctors" />
        <SidebarItem label="Appointments" icon="📅" to="/admin/appointments" />

        {/* <SidebarItem label="Reports" icon="📄" to="/reports" />
        <SidebarItem label="Billing" icon="💳" to="/billing" />
        <SidebarItem label="Settings" icon="⚙️" to="/settings" /> */}
      </nav>
    </aside>
  );
};

const SidebarItem = ({ label, icon, to }) => {
  return (
    <Link to={to}>
      <div className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-teal-700 transition">
        <span>{icon}</span>
        <span className="text-sm font-medium">{label}</span>
      </div>
    </Link>
  );
};

export default Sidebar;
