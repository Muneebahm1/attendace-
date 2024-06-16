// src/App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import LandingPage from './pages/LandingPage';
import AdminLogin from './pages/AdminLogin';
// import Profile from './pages/Profile';
// import Attendance from './pages/Attendance';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path='/admin' element={<AdminDashboard/>}  />
      <Route path='/adminlogin' element={<AdminLogin/>}  />
      {/* <Route path="/profile" element={<Profile />} />
      <Route path="/attendance" element={<Attendance />} /> */}
    </Routes>
  );
};

export default App;
