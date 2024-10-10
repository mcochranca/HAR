// src/ui/pages/AdminDashboard.tsx

import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import Navbar from '../components/Navbar';

const AdminDashboard: React.FC = () => {
  // ... existing code ...

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <h2 className="text-xl font-semibold mb-4">System Control</h2>
            <div className="flex space-x-4">
              <Button variant="primary" onClick={startSystem}>
                Start System
              </Button>
              <Button variant="danger" onClick={stopSystem}>
                Stop System
              </Button>
            </div>
          </Card>
          <Card>
            <h2 className="text-xl font-semibold mb-4">Assertion Axioms</h2>
            <p className="text-gray-700 mb-4">
              Manage the assertion axioms used in probabilistic reasoning.
            </p>
            <Button variant="secondary" onClick={() => navigate('/admin/axioms')}>
              Edit Axioms
            </Button>
          </Card>
        </div>
        {/* Additional dashboard content */}
      </div>
    </div>
  );
};

export default AdminDashboard;
