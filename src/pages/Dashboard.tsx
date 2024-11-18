import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, Trophy, Users, Heart, Bell, Star,
  Zap, Target, Award, Flame, BookOpen
} from 'lucide-react';
import AchievementBadge from '../components/AchievementBadge';

const Dashboard = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] p-6">
      <div className="max-w-7xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold">Welcome back, User!</h1>
          <p className="text-gray-400">Level 5 Community Member</p>
        </motion.header>

        {/* Experience Bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          className="mb-8 bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">Experience</span>
            <span className="text-sm text-gray-400">2,450 / 3,000 XP</span>
          </div>
          <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '82%' }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-y-0 left-0 bg-blue-500"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
            >
              <div className="flex items-center space-x-3">
                <stat.icon className="w-6 h-6 text-blue-500" />
                <h3 className="text-lg font-semibold">{stat.title}</h3>
              </div>
              <p className="text-2xl font-bold mt-2">{stat.value}</p>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: stat.progress }}
                className="h-1 bg-blue-500/50 rounded-full mt-2"
              />
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <AchievementBadge key={index} {...achievement} />
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
          >
            <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="bg-blue-500/10 p-3 rounded-lg">
                    <Calendar className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{event.title}</h3>
                    <p className="text-sm text-gray-400">{event.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
          >
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="bg-purple-500/10 p-3 rounded-lg">
                    <Bell className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{activity.title}</h3>
                    <p className="text-sm text-gray-400">{activity.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const stats = [
  { icon: Calendar, title: 'Events Attended', value: '12', progress: '80%' },
  { icon: Trophy, title: 'Hackathons Won', value: '3', progress: '60%' },
  { icon: Heart, title: 'Volunteer Hours', value: '48', progress: '90%' },
];

const achievements = [
  {
    icon: <Star className="w-6 h-6 text-yellow-500" />,
    title: "Event Organizer",
    description: "Host successful community events",
    progress: 3,
    maxProgress: 5,
    color: "bg-yellow-500 bg-opacity-10"
  },
  {
    icon: <Zap className="w-6 h-6 text-blue-500" />,
    title: "Tech Guru",
    description: "Share knowledge in tech workshops",
    progress: 8,
    maxProgress: 10,
    color: "bg-blue-500 bg-opacity-10"
  },
  {
    icon: <Target className="w-6 h-6 text-green-500" />,
    title: "Goal Setter",
    description: "Complete personal milestones",
    progress: 6,
    maxProgress: 8,
    color: "bg-green-500 bg-opacity-10"
  },
  {
    icon: <Flame className="w-6 h-6 text-red-500" />,
    title: "Community Champion",
    description: "Contribute to community growth",
    progress: 4,
    maxProgress: 5,
    color: "bg-red-500 bg-opacity-10"
  }
];

const upcomingEvents = [
  { title: 'Tech Meetup 2024', date: 'Tomorrow at 6:00 PM' },
  { title: 'Community Hackathon', date: 'March 15, 2024' },
  { title: 'Volunteer Drive', date: 'March 20, 2024' },
];

const recentActivity = [
  { title: 'Joined Web Dev Workshop', time: '2 hours ago' },
  { title: 'Earned "Tech Guru" Badge', time: 'Yesterday' },
  { title: 'Completed Volunteer Task', time: '2 days ago' },
];

export default Dashboard;