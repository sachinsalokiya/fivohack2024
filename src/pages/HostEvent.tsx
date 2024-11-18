import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Image, Clock, Tag } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const HostEvent = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <PageHeader
        title="Host an Event"
        description="Create and manage your community events"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6"
      >
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Event Title
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-900/50 rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              placeholder="Enter event title"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Date</span>
                </div>
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 bg-gray-900/50 rounded-lg border border-gray-700 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Time</span>
                </div>
              </label>
              <input
                type="time"
                className="w-full px-4 py-2 bg-gray-900/50 rounded-lg border border-gray-700 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Location</span>
              </div>
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-900/50 rounded-lg border border-gray-700 focus:border-blue-500"
              placeholder="Enter location"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              <div className="flex items-center space-x-2">
                <Tag className="w-4 h-4" />
                <span>Category</span>
              </div>
            </label>
            <select className="w-full px-4 py-2 bg-gray-900/50 rounded-lg border border-gray-700 focus:border-blue-500">
              <option>Tech Meetup</option>
              <option>Workshop</option>
              <option>Conference</option>
              <option>Hackathon</option>
              <option>Social Gathering</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Description
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 bg-gray-900/50 rounded-lg border border-gray-700 focus:border-blue-500"
              placeholder="Describe your event"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Maximum Participants</span>
              </div>
            </label>
            <input
              type="number"
              className="w-full px-4 py-2 bg-gray-900/50 rounded-lg border border-gray-700 focus:border-blue-500"
              placeholder="Enter maximum number of participants"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              <div className="flex items-center space-x-2">
                <Image className="w-4 h-4" />
                <span>Event Cover Image</span>
              </div>
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-700 border-dashed rounded-lg hover:border-blue-500/50 transition-colors">
              <div className="space-y-1 text-center">
                <Image className="mx-auto h-12 w-12 text-gray-400" />
                <div className="text-sm text-gray-400">
                  <label htmlFor="file-upload" className="relative cursor-pointer bg-gray-800 rounded-md font-medium text-blue-500 hover:text-blue-400">
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-colors"
          >
            Create Event
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default HostEvent;