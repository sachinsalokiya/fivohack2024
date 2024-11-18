import React from 'react';
import PageHeader from '../components/PageHeader';
import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react';

const Volunteer = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <PageHeader
        title="Volunteer Opportunities"
        description="Make a difference in your community"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {opportunities.map((opportunity, index) => (
          <div
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">{opportunity.title}</h3>
                <p className="text-gray-400 mb-4">{opportunity.description}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${opportunity.urgent ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}>
                {opportunity.urgent ? 'Urgent' : 'Open'}
              </span>
            </div>
            
            <div className="space-y-2 text-gray-400 mb-4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{opportunity.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{opportunity.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>{opportunity.volunteers} volunteers needed</span>
              </div>
            </div>
            
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors">
              <span>Apply Now</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const opportunities = [
  {
    title: "Tech Education Program",
    description: "Help teach basic computer skills to seniors in our community",
    date: "Every Saturday",
    location: "Community Center",
    volunteers: 5,
    urgent: true
  },
  {
    title: "Code for Good",
    description: "Build websites for local non-profit organizations",
    date: "Flexible Schedule",
    location: "Remote",
    volunteers: 10,
    urgent: false
  },
  {
    title: "STEM Mentorship",
    description: "Mentor high school students interested in technology",
    date: "Weekday Evenings",
    location: "Local Schools",
    volunteers: 8,
    urgent: false
  },
  {
    title: "Digital Literacy Workshop",
    description: "Teach essential digital skills to underserved communities",
    date: "Every Sunday",
    location: "Public Library",
    volunteers: 6,
    urgent: true
  }
];

export default Volunteer;