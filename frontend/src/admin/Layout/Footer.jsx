import React from "react";

const Footer = () => {
  return (
    <footer className="h-12 bg-white border-t border-gray-200 flex items-center justify-between px-6 text-sm text-gray-600">
      <span>
        © {new Date().getFullYear()} HealthCare — Admin Panel
      </span>
      <span className="hidden sm:block">
        Version 1.0.0
      </span>
    </footer>
  );
};

export default Footer;
