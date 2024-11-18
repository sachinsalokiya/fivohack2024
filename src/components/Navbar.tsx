import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, Code2, Heart, Layout } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Users className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold">CommunityHub</span>
          </Link>
          <div className="flex space-x-4">
            <NavLink to="/events" icon={<Calendar />} text="Events" />
            <NavLink to="/hackathons" icon={<Code2 />} text="Hackathons" />
            <NavLink to="/community" icon={<Users />} text="Community" />
            <NavLink to="/volunteer" icon={<Heart />} text="Volunteer" />
            <NavLink to="/dashboard" icon={<Layout />} text="Dashboard" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) => (
  <Link
    to={to}
    className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default Navbar;