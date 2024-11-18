import React from 'react';
import { motion } from 'framer-motion';
import ARMap from '../components/ARMap';
import PageHeader from '../components/PageHeader';

const ARMapPage = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] px-4 py-8">
      <PageHeader
        title="AR Event Map"
        description="Explore events happening around you in augmented reality"
      />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6"
        >
          <div className="h-[70vh]">
            <ARMap />
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
              <h3 className="font-semibold mb-2">How to Use</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Click and drag to look around</li>
                <li>• Tap on event markers for details</li>
                <li>• Use compass for orientation</li>
                <li>• Toggle fullscreen for better view</li>
              </ul>
            </div>
            
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
              <h3 className="font-semibold mb-2">Event Types</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-400">Tech Events</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-400">Workshops</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400">Community Meetups</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
              <h3 className="font-semibold mb-2">Quick Stats</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>• 15 events nearby</p>
                <p>• 5 happening today</p>
                <p>• 3 trending events</p>
                <p>• 2km radius shown</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ARMapPage;