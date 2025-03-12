
import { Search, Bell } from 'lucide-react';

interface HeaderProps {
  title?: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="flex items-center justify-between px-6 py-3 border-b border-sms-border bg-white">
      <div className="flex-1"></div>
      <div className="relative mx-auto w-full max-w-md">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 text-sm border border-sms-border rounded-md focus:outline-none focus:ring-1 focus:ring-sms-blue focus:border-sms-blue transition-colors"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Search size={18} />
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-end">
        <button className="relative p-2 text-gray-500 hover:text-sms-blue transition-colors focus:outline-none">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </div>
    </div>
  );
};

export default Header;
