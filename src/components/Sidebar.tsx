
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, ChevronRight, LayoutDashboard, Users, GraduationCap, 
  ClipboardList, Clock, DollarSign, Receipt, UserCog, Calendar, 
  MessageSquare, BarChart2, FileText, LogOut
} from 'lucide-react';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  to?: string;
  active?: boolean;
  onClick?: () => void;
  chevron?: boolean;
  expanded?: boolean;
  children?: React.ReactNode;
}

const SidebarItem = ({ 
  icon, label, to, active, onClick, chevron, expanded, children 
}: SidebarItemProps) => {
  const content = (
    <>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <div className="w-5 h-5 mr-3">{icon}</div>
          <span>{label}</span>
        </div>
        {chevron && (expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
      </div>
    </>
  );

  return (
    <div>
      {to ? (
        <Link to={to} className={`sms-sidebar-item ${active ? 'active' : ''}`}>
          {content}
        </Link>
      ) : (
        <button 
          onClick={onClick} 
          className={`sms-sidebar-item w-full text-left ${active ? 'active' : ''}`}
        >
          {content}
        </button>
      )}
      {expanded && children}
    </div>
  );
};

const Sidebar = () => {
  const location = useLocation();
  const [activeItems, setActiveItems] = useState<{[key: string]: boolean}>({
    'student': true,
    'academics': false,
    'finance': false,
    'hrm': false,
    'communication': false,
    'reports': false
  });

  const toggleItem = (key: string) => {
    setActiveItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="w-60 h-screen flex flex-col bg-white border-r border-sms-border">
      <div className="p-4 border-b border-sms-border">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 bg-black rounded">
            <span className="text-white font-semibold">S</span>
          </div>
          <span className="text-lg font-semibold">SMS</span>
        </Link>
      </div>
      
      <div className="flex-1 overflow-y-auto py-2 px-2">
        <SidebarItem 
          icon={<LayoutDashboard size={18} />} 
          label="Dashboards" 
          to="/dashboard"
          active={location.pathname === '/dashboard'}
        />
        
        <div className="mt-4">
          <div className="sms-sidebar-heading">User</div>
          <div className="sms-sidebar-group">
            <SidebarItem 
              icon={<Users size={18} />} 
              label="Student" 
              chevron 
              expanded={activeItems.student}
              onClick={() => toggleItem('student')}
              active={location.pathname.includes('/student')}
            >
              <div className="pl-10 sms-sidebar-group">
                <Link to="/new-admission" className="sms-sidebar-item text-sm">
                  Add new Student
                </Link>
                <Link to="/all-students" className="sms-sidebar-item text-sm">
                  All Students
                </Link>
              </div>
            </SidebarItem>
            
            <SidebarItem 
              icon={<UserCog size={18} />} 
              label="Staff" 
              to="/staff"
              active={location.pathname === '/staff'}
            />
          </div>
        </div>
        
        <div className="mt-4">
          <div className="sms-sidebar-heading">Academics</div>
          <div className="sms-sidebar-group">
            <SidebarItem 
              icon={<GraduationCap size={18} />} 
              label="Classroom Management" 
              to="/classroom"
              active={location.pathname === '/classroom'}
            />
            
            <SidebarItem 
              icon={<ClipboardList size={18} />} 
              label="Subject Management" 
              to="/subjects"
              active={location.pathname === '/subjects'}
            />
            
            <SidebarItem 
              icon={<FileText size={18} />} 
              label="Examinations" 
              to="/examinations"
              active={location.pathname === '/examinations'}
            />
            
            <SidebarItem 
              icon={<Clock size={18} />} 
              label="Students Attendance" 
              to="/student-attendance"
              active={location.pathname === '/student-attendance'}
            />
          </div>
        </div>
        
        <div className="mt-4">
          <div className="sms-sidebar-heading">Finance & Accounts</div>
          <div className="sms-sidebar-group">
            <SidebarItem 
              icon={<DollarSign size={18} />} 
              label="Fee Collection" 
              to="/fee-collection"
              active={location.pathname === '/fee-collection'}
            />
            
            <SidebarItem 
              icon={<Receipt size={18} />} 
              label="Expenses" 
              to="/expenses"
              active={location.pathname === '/expenses'}
            />
          </div>
        </div>
        
        <div className="mt-4">
          <div className="sms-sidebar-heading">HRM</div>
          <div className="sms-sidebar-group">
            <SidebarItem 
              icon={<Clock size={18} />} 
              label="Staff Attendance" 
              to="/staff-attendance"
              active={location.pathname === '/staff-attendance'}
            />
            
            <SidebarItem 
              icon={<UserCog size={18} />} 
              label="Leave Management" 
              to="/leave-management"
              active={location.pathname === '/leave-management'}
            />
            
            <SidebarItem 
              icon={<DollarSign size={18} />} 
              label="Payroll Management" 
              to="/payroll"
              active={location.pathname === '/payroll'}
            />
            
            <SidebarItem 
              icon={<Calendar size={18} />} 
              label="Holidays & School Calendar" 
              to="/calendar"
              active={location.pathname === '/calendar'}
            />
          </div>
        </div>
        
        <div className="mt-4">
          <div className="sms-sidebar-heading">Communication & Notice</div>
          <div className="sms-sidebar-group">
            <SidebarItem 
              icon={<FileText size={18} />} 
              label="Notice Board" 
              to="/notice-board"
              active={location.pathname === '/notice-board'}
            />
            
            <SidebarItem 
              icon={<MessageSquare size={18} />} 
              label="Communication" 
              to="/communication"
              active={location.pathname === '/communication'}
            />
          </div>
        </div>
        
        <div className="mt-4">
          <div className="sms-sidebar-heading">Reports & Analysis</div>
          <div className="sms-sidebar-group">
            <SidebarItem 
              icon={<BarChart2 size={18} />} 
              label="Attendance Reports" 
              to="/attendance-reports"
              active={location.pathname === '/attendance-reports'}
            />
            
            <SidebarItem 
              icon={<BarChart2 size={18} />} 
              label="Exam Performance" 
              to="/exam-performance"
              active={location.pathname === '/exam-performance'}
            />
            
            <SidebarItem 
              icon={<BarChart2 size={18} />} 
              label="Fee Payments" 
              to="/fee-payments"
              active={location.pathname === '/fee-payments'}
            />
            
            <SidebarItem 
              icon={<BarChart2 size={18} />} 
              label="Staff Performance" 
              to="/staff-performance"
              active={location.pathname === '/staff-performance'}
            />
          </div>
        </div>
      </div>
      
      <div className="p-4 border-t border-sms-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            <span className="font-semibold text-sm">A</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Admin</p>
            <p className="text-xs text-gray-500 truncate">admin@gmail.com</p>
          </div>
          <button className="text-gray-500 hover:text-red-500 transition-colors">
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
