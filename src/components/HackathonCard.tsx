import React from 'react';
import { Calendar, Trophy, Code2 } from 'lucide-react';

interface HackathonCardProps {
  title: string;
  date: string;
  prize: string;
  participants: number;
  image: string;
}

const HackathonCard = ({ title, date, prize, participants, image }: HackathonCardProps) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden hover:border-purple-500/50 transition-colors">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="space-y-2 text-gray-400">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Trophy className="w-4 h-4" />
            <span>${prize} in prizes</span>
          </div>
          <div className="flex items-center space-x-2">
            <Code2 className="w-4 h-4" />
            <span>{participants} participants</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackathonCard;