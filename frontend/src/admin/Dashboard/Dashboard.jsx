import React, { useEffect, useState } from "react";
import { getDashboardStats } from "../../services/admin/dashboardService";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalPatients: 0,
    totalDoctors: 0,
    appointmentsToday: 0,
    monthlyRevenue: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

 useEffect(() => {
  fetchDashboard(); 
  const interval = setInterval(fetchDashboard, 5000); 
  return () => clearInterval(interval); 
}, []);


  const fetchDashboard = async () => {
    try {
      const res = await getDashboardStats();
      if (res.success) {
        setStats(res.data);
      } else {
        setError("Dashboard data not found");
      }
    } catch (err) {
      setError("Server error");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p className="p-6">Loading dashboard...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      <Card title="Total Patients" value={stats.totalPatients} />
      <Card title="Total Doctors" value={stats.totalDoctors} />
      <Card title="Appointments Today" value={stats.appointmentsToday} />
      <Card title="Revenue This Month" value={`₹${stats.monthlyRevenue}`} />
    </div>
  );
};

const Card = ({ title, value }) => (
  <div className="bg-white shadow rounded-lg p-6">
    <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
    <p className="mt-2 text-2xl font-semibold text-gray-800">{value}</p>
  </div>
);

export default Dashboard;
