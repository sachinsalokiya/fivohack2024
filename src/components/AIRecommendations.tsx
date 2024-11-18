import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const AIRecommendations = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 mb-6">
        <Sparkles className="w-5 h-5 text-purple-500" />
        <h2 className="text-xl font-semibold">AI Recommendations</h2>
      </div>

      <div className="grid gap-4">
        {recommendations.map((recommendation, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold mb-1">{recommendation.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{recommendation.description}</p>
                <div className="flex items-center space-x-2 text-sm text-purple-400">
                  <Sparkles className="w-4 h-4" />
                  <span>{recommendation.matchReason}</span>
                </div>
              </div>
              <button className="p-2 hover:bg-purple-500/10 rounded-lg group transition-colors">
                <ArrowRight className="w-5 h-5 text-purple-500 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const recommendations = [
  {
    title: "Advanced React Workshop",
    description: "Based on your interest in web development",
    matchReason: "98% match with your skills"
  },
  {
    title: "Local Tech Startup Meetup",
    description: "Similar to events you've attended",
    matchReason: "Aligned with your networking goals"
  },
  {
    title: "Open Source Hackathon",
    description: "Perfect for your contribution interests",
    matchReason: "Matches your GitHub activity"
  }
];

export default AIRecommendations;