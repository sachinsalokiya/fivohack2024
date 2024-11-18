import React from 'react';
import { motion } from 'framer-motion';

interface AchievementBadgeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  progress: number;
  maxProgress: number;
  color: string;
}

const AchievementBadge = ({ icon, title, description, progress, maxProgress, color }: AchievementBadgeProps) => {
  const percentage = (progress / maxProgress) * 100;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-4"
    >
      <div className="flex items-start space-x-4">
        <div className={`p-3 rounded-lg ${color}`}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold mb-1">{title}</h3>
          <p className="text-sm text-gray-400 mb-3">{description}</p>
          <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`absolute inset-y-0 left-0 ${color.replace('bg-opacity-10', '')}`}
            />
          </div>
          <p className="text-xs text-gray-400 mt-1">
            {progress} / {maxProgress}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AchievementBadge;