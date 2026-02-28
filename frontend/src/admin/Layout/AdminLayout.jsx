import React from "react";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import Footer from "./Footer.jsx";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-6">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;
