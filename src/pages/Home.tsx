import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, Calendar, Code2, Heart, Search,
  MapPin, TrendingUp, Bell, Users, Star, Navigation2
} from 'lucide-react';
import AIRecommendations from '../components/AIRecommendations';
import DetailedSiteMap from '../components/DetailedSiteMap';

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-[calc(100vh-64px)] space-y-16 px-4 py-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Welcome to CommunityHub
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Connect, collaborate, and grow with your local community. Join events, participate in hackathons,
          and make a difference through volunteering opportunities.
        </p>
        
        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-8">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search events, hackathons, or volunteer opportunities..."
            className="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
          />
          <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {/* Quick Access Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {quickLinks.map((link, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => navigate(link.path)}
              className="flex items-center space-x-2 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-blue-500/50 transition-all"
            >
              <link.icon className="w-5 h-5 text-blue-500" />
              <span>{link.label}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* AR Map Preview Section */}
      <section className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Nearby Events</h2>
          <button 
            onClick={() => navigate('/ar-map')}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
          >
            <Navigation2 className="w-5 h-5" />
            <span>Open AR Map</span>
          </button>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nearbyEvents.slice(0, 3).map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900/50 rounded-lg p-4 border border-gray-700"
              >
                <h3 className="font-semibold mb-2">{event.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{event.description}</p>
                <div className="flex items-center text-sm text-gray-400">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{event.distance} away</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Recommendations Section */}
      <section className="max-w-7xl mx-auto">
        <AIRecommendations />
      </section>

      {/* Featured Events Section */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Featured Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden hover:border-blue-500/50 transition-all"
            >
              <div className="absolute top-4 right-4 z-10">
                {event.trending && (
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                    Trending
                  </span>
                )}
              </div>
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-400 mb-4">{event.description}</p>
                <div className="space-y-2 text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm p-8 rounded-2xl border border-gray-700"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-6">
            Join our community today and start discovering amazing opportunities.
          </p>
          <button
            onClick={() => navigate('/dashboard')}
            className="group bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold flex items-center justify-center space-x-2 mx-auto transition-all"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </section>

      {/* Detailed Site Map */}
      <DetailedSiteMap />
    </div>
  );
};

const quickLinks = [
  { label: 'Upcoming Events', icon: Calendar, path: '/events' },
  { label: 'Hackathons', icon: Code2, path: '/hackathons' },
  { label: 'Volunteer', icon: Heart, path: '/volunteer' },
  { label: 'Trending', icon: TrendingUp, path: '/events' },
  { label: 'Notifications', icon: Bell, path: '/dashboard' },
];

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

const featuredEvents = [
  {
    title: "Tech Innovation Summit",
    description: "Join industry leaders for a day of insights and networking.",
    date: "March 28, 2024",
    location: "Innovation Hub",
    attendees: 250,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    trending: true
  },
  {
    title: "Web3 Hackathon",
    description: "Build the future of decentralized applications.",
    date: "April 5-7, 2024",
    location: "Tech Campus",
    attendees: 180,
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
    trending: true
  },
  {
    title: "Community Code Day",
    description: "A day of coding, learning, and community building.",
    date: "April 15, 2024",
    location: "Digital Center",
    attendees: 150,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    trending: false
  }
];

const stats = [
  { value: "10,000+", label: "Community Members" },
  { value: "500+", label: "Events Hosted" },
  { value: "50+", label: "Hackathons" },
  { value: "1,000+", label: "Volunteers" }
];

export default Home;