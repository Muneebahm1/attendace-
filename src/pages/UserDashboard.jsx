import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';

const UserDashboard = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      handleViewAttendance(); // Load attendance data when component mounts
    }
  }, [navigate]);

  const handleMarkAttendance = async () => {
    // try {
    //   const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
    //   const config = {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Authorization: `Bearer ${token}`,
    //     },
    //   };

    //   const res = await axios.post('/api/attendance/mark', {}, config);
    //   console.log('Attendance marked:', res.data);
    // } catch (error) {
    //   console.error('Error marking attendance:', error);
    // }
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post('http://localhost:5000/api/users/attendance/mark', {}, config);
      console.log('Attendance marked:', response.data);
    } catch (error) {
      console.error('Error marking attendance:', error);
    }
  };

  const handleMarkLeave = async () => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.post('http://localhost:5000/api/users/attendance/leave', {}, config);
      console.log('Leave marked:', res.data);
    } catch (error) {
      console.error('Error marking leave:', error);
    }
  };

  const handleViewAttendance = async () => {
    
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.get('http://localhost:5000/api/users/attendance', config);
      setAttendanceData(res.data);
      console.log('Attendance data:', res.data);
    } catch (error) {
      console.error('Error getting attendance:', error);
    }finally {
      setLoading(false);
    }
    // try {
    //   const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
    //   const config = {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   };

    //   const res = await axios.get('/api/attendance', config);
    //   setAttendanceData(res.data);
    // } catch (error) {
    //   console.error('Error fetching attendance:', error);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-8">User Dashboard</h1>
        <div className="flex flex-col space-y-4">
          <button
            onClick={handleMarkAttendance}
            className="w-64 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Mark Attendance
          </button>
          <button
            onClick={handleMarkLeave}
            className="w-64 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Mark Leave
          </button>
          <button
            onClick={handleViewAttendance}
            className="w-64 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            View Attendance
          </button>
        </div>
        {loading && <p className="mt-4">Loading...</p>}
        {!loading && attendanceData.length > 0 && (
          <div className="mt-4 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Previous Attendance</h2>
            <ul className="list-disc list-inside">
              {attendanceData.map((attendance, index) => (
                <li key={index}>
                  {attendance.date}: {attendance.status}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default UserDashboard;
