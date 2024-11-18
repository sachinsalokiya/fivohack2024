import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Map, Navigation2, Compass, Maximize2, Minimize2 } from 'lucide-react';

const ARMap = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className={`relative ${isExpanded ? 'fixed inset-0 z-50' : 'h-[400px]'}`}>
      <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700">
        {/* AR Controls */}
        <div className="absolute top-4 right-4 space-y-2 z-10">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 bg-gray-800/80 rounded-lg hover:bg-gray-700/80 transition-colors"
          >
            {isExpanded ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
          </button>
          <button className="p-2 bg-gray-800/80 rounded-lg hover:bg-gray-700/80 transition-colors">
            <Compass className="w-5 h-5" />
          </button>
        </div>

        {/* AR View */}
        <div className="absolute inset-0 overflow-hidden">
          {nearbyEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="absolute"
              style={{
                left: `${event.position.x}%`,
                top: `${event.position.y}%`,
              }}
              onClick={() => setSelectedEvent(event)}
            >
              <div className="relative group">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full">
                  <div className="relative bg-gray-800/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-700 whitespace-nowrap">
                    <span className="text-sm font-medium">{event.title}</span>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800 border-r border-b border-gray-700"></div>
                  </div>
                </div>
                <div className="w-4 h-4 bg-blue-500 rounded-full transform transition-transform group-hover:scale-150"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Event Details Overlay */}
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 left-4 right-4 bg-gray-800/90 backdrop-blur-sm p-4 rounded-lg border border-gray-700"
          >
            <h3 className="text-lg font-semibold mb-2">{selectedEvent.title}</h3>
            <p className="text-sm text-gray-300 mb-3">{selectedEvent.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">{selectedEvent.distance} away</span>
              <button 
                onClick={() => setSelectedEvent(null)}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm font-medium transition-colors"
              >
                View Details
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

const nearbyEvents = [
  {
    title: "Tech Meetup",
    description: "Join us for an evening of networking and tech talks",
    distance: "0.5 km",
    position: { x: 30, y: 40 }
  },
  {
    title: "Coding Workshop",
    description: "Learn the basics of web development",
    distance: "1.2 km",
    position: { x: 60, y: 25 }
  },
  {
    title: "Startup Pitch",
    description: "Watch local startups pitch their ideas",
    distance: "0.8 km",
    position: { x: 45, y: 60 }
  }
];

export default ARMap;