import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import {  Routes, Route } from "react-router-dom";
import Days from './pages/Days/Days';
import DayId from './components/DayId';
import Error from './pages/Error/Error';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/days" element={<Days />} />
          <Route path="/days/:dayId" element={<DayId />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
  );
}

export default App;
