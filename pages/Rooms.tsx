
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Maximize, Star, ArrowRight, Wifi, Coffee } from 'lucide-react';
import { api } from '../utils/api';
import { Room } from '../types';

const Rooms = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = await api.getRooms();
        setRooms(data);
      } catch (err) {
        setError('Failed to load rooms. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchRooms();
  }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center text-vp-gold">Loading Luxury...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;

  return (
    <div className="pt-24 pb-20 bg-vp-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slideUp">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-vp-dark mb-4">Our Luxury Collection</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
            Hand-picked accommodations designed for your ultimate comfort. Each room is a sanctuary of peace and elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room._id} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col h-full animate-fadeIn">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                    src={room.images[0]} 
                    alt={room.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold text-vp-dark shadow flex items-center gap-1">
                    <Star size={14} className="text-vp-gold fill-current" /> {room.averageRating ? room.averageRating.toFixed(1) : 'New'}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                    <h3 className="text-xl font-serif font-bold text-vp-dark leading-tight mb-2">{room.name}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2 h-10">{room.description}</p>
                </div>
                
                <div className="flex gap-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-6 border-y border-gray-100 py-4">
                   <span className="flex items-center gap-1"><Users size={14}/> {room.maxGuests} Guests</span>
                   <span className="flex items-center gap-1"><Maximize size={14}/> {room.roomSize}</span>
                </div>

                <div className="flex items-center justify-between mt-auto">
                    <div>
                         <span className="block text-2xl font-bold text-vp-gold">${room.pricePerNight}</span>
                         <span className="text-xs text-gray-400">per night</span>
                    </div>
                    <Link 
                        to={`/rooms/${room._id}`} 
                        className="bg-vp-dark text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-vp-gold hover:text-vp-dark transition-colors flex items-center gap-2"
                    >
                        Details <ArrowRight size={16} />
                    </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
