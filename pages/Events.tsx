

import React from 'react';
import { Link } from 'react-router-dom';

const Events = () => {
  return (
    <div className="pt-20">
       <div className="relative h-[50vh]">
         <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover" alt="Events" />
         <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-6xl font-serif font-bold text-white text-center">Unforgettable Moments</h1>
         </div>
       </div>
       <div className="max-w-5xl mx-auto px-8 py-20 text-center">
          <h2 className="text-3xl font-serif font-bold text-vp-dark mb-6">Weddings & Corporate Galas</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Whether you are planning an intimate ceremony or a grand celebration, Four Leaf Resort offers the perfect setting. Our dedicated events team will ensure every detail is executed to perfection.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
             <div className="bg-vp-cream p-8 rounded-lg">
                <h3 className="font-serif font-bold text-2xl mb-4">Weddings</h3>
                <p className="text-gray-500 mb-6">Say "I do" against the backdrop of a golden sunset or within our crystal ballroom.</p>
                <Link to="/banquets" className="text-vp-gold font-bold uppercase tracking-widest text-sm hover:text-vp-dark">View Venues</Link>
             </div>
             <div className="bg-vp-cream p-8 rounded-lg">
                <h3 className="font-serif font-bold text-2xl mb-4">Corporate</h3>
                <p className="text-gray-500 mb-6">Inspire your team with a retreat that blends productivity with relaxation.</p>
                <Link to="/banquets" className="text-vp-gold font-bold uppercase tracking-widest text-sm hover:text-vp-dark">View Venues</Link>
             </div>
          </div>
       </div>
    </div>
  );
};
export default Events;