
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50">
      <Header />

      <div className="px-6 py-4">
        <div className="flex border-b border-sms-border animate-slide-in">
          <button 
            className={`sms-tab ${activeTab === 'dashboard' ? 'active' : ''}`} 
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </button>
          <Link 
            to="/new-admission" 
            className={`sms-tab ${activeTab === 'newAdmission' ? 'active' : ''}`}
          >
            New Admission
          </Link>
        </div>

        <div className="py-6">
          <h1 className="text-2xl font-bold mb-6">School Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-sms-border shadow-sm">
              <h3 className="text-lg font-medium mb-2">Total Students</h3>
              <p className="text-3xl font-bold text-sms-blue">1,234</p>
              <div className="mt-4 text-sm text-green-600">
                +12% from last month
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-sms-border shadow-sm">
              <h3 className="text-lg font-medium mb-2">Total Staff</h3>
              <p className="text-3xl font-bold text-sms-blue">56</p>
              <div className="mt-4 text-sm text-green-600">
                +2% from last month
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-sms-border shadow-sm">
              <h3 className="text-lg font-medium mb-2">Total Classes</h3>
              <p className="text-3xl font-bold text-sms-blue">24</p>
              <div className="mt-4 text-sm text-gray-500">
                No change from last month
              </div>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-sms-border shadow-sm">
              <h3 className="text-lg font-medium mb-4">Recent Admissions</h3>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-3 pb-3 border-b border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="font-medium text-gray-600">S{i}</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Student Name {i}</h4>
                      <p className="text-sm text-gray-500">Class {i + 5}A</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-right">
                <Link to="/all-students" className="text-sm text-sms-blue font-medium">
                  View all students
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-sms-border shadow-sm">
              <h3 className="text-lg font-medium mb-4">Recent Notices</h3>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="pb-3 border-b border-gray-100">
                    <h4 className="font-medium">Important School Announcement {i}</h4>
                    <p className="text-sm text-gray-500 mt-1">
                      Brief description of the notice or announcement goes here.
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Posted on: June {i + 10}, 2023
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-right">
                <Link to="/notice-board" className="text-sm text-sms-blue font-medium">
                  View all notices
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
