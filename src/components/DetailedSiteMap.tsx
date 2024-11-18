import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Map,
  Home,
  Calendar,
  Code2,
  Users,
  Heart,
  Layout,
  Settings,
  Award,
  MessageSquare,
  PlusCircle,
  BookOpen,
  Bell,
  User,
  Sparkles,
  Navigation
} from 'lucide-react';

const DetailedSiteMap = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('main');

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
      >
        <Map className="w-6 h-6 text-white" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-full right-0 mb-4"
          >
            <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-xl p-4 w-80 border border-gray-700">
              <div className="flex space-x-2 mb-4">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                      activeSection === section.id
                        ? 'bg-blue-500 text-white'
                        : 'hover:bg-gray-700'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                {siteLinks
                  .filter((group) => group.section === activeSection)
                  .map((group, index) => (
                    <div key={index}>
                      <h3 className="text-sm text-gray-400 mb-2">{group.title}</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {group.links.map((link, linkIndex) => (
                          <Link
                            key={linkIndex}
                            to={link.to}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
                          >
                            <link.icon className="w-4 h-4" />
                            <span className="text-sm">{link.text}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const sections = [
  { id: 'main', label: 'Main' },
  { id: 'events', label: 'Events' },
  { id: 'community', label: 'Community' },
  { id: 'user', label: 'User' }
];

const siteLinks = [
  {
    section: 'main',
    title: 'Navigation',
    links: [
      { to: '/', text: 'Home', icon: Home },
      { to: '/dashboard', text: 'Dashboard', icon: Layout },
      { to: '/ar-map', text: 'AR Map', icon: Navigation },
      { to: '/notifications', text: 'Notifications', icon: Bell }
    ]
  },
  {
    section: 'events',
    title: 'Events & Activities',
    links: [
      { to: '/events', text: 'Browse Events', icon: Calendar },
      { to: '/host-event', text: 'Host Event', icon: PlusCircle },
      { to: '/hackathons', text: 'Hackathons', icon: Code2 },
      { to: '/recommendations', text: 'For You', icon: Sparkles }
    ]
  },
  {
    section: 'community',
    title: 'Community',
    links: [
      { to: '/community', text: 'Members', icon: Users },
      { to: '/volunteer', text: 'Volunteer', icon: Heart },
      { to: '/messages', text: 'Messages', icon: MessageSquare },
      { to: '/achievements', text: 'Achievements', icon: Award }
    ]
  },
  {
    section: 'user',
    title: 'Personal',
    links: [
      { to: '/profile', text: 'Profile', icon: User },
      { to: '/portfolio', text: 'Portfolio', icon: BookOpen },
      { to: '/settings', text: 'Settings', icon: Settings }
    ]
  }
];

export default DetailedSiteMap;