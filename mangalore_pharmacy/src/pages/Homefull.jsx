import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from '../components/login/Login';
import Signup from '../components/signup/Signup';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';

function Homefull() {
  return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Sidebar />} />
        </Routes>
      </div>
  );
}

export default Homefull;
