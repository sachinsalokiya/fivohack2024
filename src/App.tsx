import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import Hackathons from './pages/Hackathons';
import Community from './pages/Community';
import Volunteer from './pages/Volunteer';
import Dashboard from './pages/Dashboard';
import ARMapPage from './pages/ARMapPage';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
        <AnimatedBackground />
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/hackathons" element={<Hackathons />} />
            <Route path="/community" element={<Community />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/ar-map" element={<ARMapPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;