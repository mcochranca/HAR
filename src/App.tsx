import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './ui/components/Dashboard';
import AxiomEditor from './ui/components/AxiomEditor';
import Navbar from './ui/components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/axiom-editor" element={<AxiomEditor />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;