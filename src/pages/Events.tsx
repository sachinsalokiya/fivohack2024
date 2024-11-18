import React from 'react';
import PageHeader from '../components/PageHeader';
import EventCard from '../components/EventCard';

const Events = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <PageHeader
        title="Community Events"
        description="Join exciting events and connect with like-minded individuals"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

const events = [
  {
    title: "Tech Meetup 2024",
    date: "March 15, 2024",
    location: "Innovation Hub",
    attendees: 120,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Web Dev Workshop",
    date: "March 20, 2024",
    location: "Digital Campus",
    attendees: 75,
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "AI Conference",
    date: "April 5, 2024",
    location: "Tech Center",
    attendees: 200,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
  }
];

export default Events;