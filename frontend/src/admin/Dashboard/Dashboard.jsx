import React from "react";


const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Card 1 - Total Patients */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-gray-500 text-sm font-medium">Total Patients</h3>
          <p className="mt-2 text-2xl font-semibold text-gray-800">1,234</p>
        </div>

        {/* Card 2 - Total Doctors */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-gray-500 text-sm font-medium">Total Doctors</h3>
          <p className="mt-2 text-2xl font-semibold text-gray-800">45</p>
        </div>

        {/* Card 3 - Appointments Today */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-gray-500 text-sm font-medium">Appointments Today</h3>
          <p className="mt-2 text-2xl font-semibold text-gray-800">67</p>
        </div>

        {/* Card 4 - Revenue This Month */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-gray-500 text-sm font-medium">Revenue This Month</h3>
          <p className="mt-2 text-2xl font-semibold text-gray-800">$12,345</p>
        </div>
      </div>

      {/* Table - Latest Patients */}
      <div className="mt-8 bg-white shadow rounded-lg p-6">
        <h3 className="text-gray-700 font-semibold mb-4">Latest Patients</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">ID</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Name</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Age</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Doctor</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-2">P001</td>
                <td className="px-4 py-2">John Doe</td>
                <td className="px-4 py-2">45</td>
                <td className="px-4 py-2">Dr. Smith</td>
                <td className="px-4 py-2">
                  <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Checked In</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">P002</td>
                <td className="px-4 py-2">Jane Roe</td>
                <td className="px-4 py-2">30</td>
                <td className="px-4 py-2">Dr. Adams</td>
                <td className="px-4 py-2">
                  <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">Pending</span>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
