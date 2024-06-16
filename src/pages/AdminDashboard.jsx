// src/pages/AdminDashboard.jsx
import React, { useState } from 'react';
import axios from 'axios';
import AdminNav from '../components/AdminNav';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [viewingUsers, setViewingUsers] = useState(false);

  const handleViewUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/admin/users', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      setUsers(response.data);
      setViewingUsers(true);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleEditAttendance = () => {
    // Logic to edit attendance
    console.log('Edit attendance');
  };

  const handleGenerateReport = () => {
    // Logic to generate report
    console.log('Generate report');
  };

  const handleManageLeaves = () => {
    // Logic to manage leaves
    console.log('Manage leaves');
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <AdminNav />
        <div className="flex flex-col items-center justify-center p-4 mt-8">
          <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
          <div className="flex flex-col space-y-4">
            <button
              onClick={handleViewUsers}
              className="w-64 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              View Users
            </button>
            <button
              onClick={handleEditAttendance}
              className="w-64 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Edit Attendance
            </button>
            <button
              onClick={handleGenerateReport}
              className="w-64 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
            >
              Generate Report
            </button>
            <button
              onClick={handleManageLeaves}
              className="w-64 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
            >
              Manage Leaves
            </button>
          </div>

          {viewingUsers && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">All Users</h2>
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Email
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user) => (
                      <tr key={user._id}>
                        <td className="px-6 py-4 whitespace-nowrap">{user._id}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
