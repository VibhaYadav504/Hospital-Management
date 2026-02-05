import React from "react";
import Header from "./header";
import Sidebar from "./Sidebar";
import Footer from "./footer";

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
