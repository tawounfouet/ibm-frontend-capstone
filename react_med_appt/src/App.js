import React from 'react';
import './App.css';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/instant-consultation" element={<InstantConsultation />} />
      </Routes>
    </Router>
  );
}
export default App;
