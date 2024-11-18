import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Calendar, Code2, Users, Heart, Layout } from 'lucide-react';

const Sitemap = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative group">
        <button className="p-3 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition-colors">
          <Home className="w-6 h-6 text-white" />
        </button>
        
        <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block">
          <div className="bg-gray-800 rounded-lg shadow-xl p-4 w-48">
            <nav className="space-y-2">
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
                >
                  <link.icon className="w-5 h-5" />
                  <span>{link.text}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

const links = [
  { to: '/', text: 'Home', icon: Home },
  { to: '/events', text: 'Events', icon: Calendar },
  { to: '/hackathons', text: 'Hackathons', icon: Code2 },
  { to: '/community', text: 'Community', icon: Users },
  { to: '/volunteer', text: 'Volunteer', icon: Heart },
  { to: '/dashboard', text: 'Dashboard', icon: Layout }
];

export default Sitemap;