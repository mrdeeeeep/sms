
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Dashboard from './Dashboard';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically navigate to dashboard on first load
    // This is just for demo purposes
    navigate('/dashboard');
  }, [navigate]);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default Index;
