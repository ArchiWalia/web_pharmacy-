import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from '../components/login/Login';
import Signup from '../components/signup/Signup';
import Navbar from '../components/navbar/Navbar';

function Home() {
  return (
    <div>
      {/* <Router>  */}
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
             {/* </Router> */}

    </div>
  );
}

export default Home;
