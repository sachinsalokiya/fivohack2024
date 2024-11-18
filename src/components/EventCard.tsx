import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  attendees: number;
  image: string;
}

const EventCard = ({ title, date, location, attendees, image }: EventCardProps) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden hover:border-blue-500/50 transition-colors">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="space-y-2 text-gray-400">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span>{attendees} attending</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;