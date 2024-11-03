import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import NewClassPage from './Components/NewClassPage'; 
import QrPage from './Components/QrPage';
import ExpiredPage from './Components/ExpiredPage';
import Attendance from './Components/Attendance';
import Success from './Components/Success';
import Dashboard from './Components/Dashboard';




const App = () => {
  return (
    <Router>
      <div className='w-full'>
        <Navbar />
        <div className='mt-0'>
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/new-class" element={<NewClassPage />} /> 
            <Route path="/qr-page" element={<QrPage />} />
            <Route path="/expired" element={<ExpiredPage />} /> 
            <Route path='/attendance' element={<Attendance />}/>
            <Route path='/success' element = {<Success />} />
            <Route path='/dashboard' element = {<Dashboard />} />
\          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
