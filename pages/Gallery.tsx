

import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { X } from 'lucide-react';

const Gallery = () => {
  const [filter, setFilter] = useState<'all' | 'rooms' | 'dining' | 'events' | 'surroundings'>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = filter === 'all' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  const categories = ['all', 'rooms', 'dining', 'events', 'surroundings'];

  return (
    <div className="pt-24 pb-20 bg-vp-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-vp-dark mb-4">Our Gallery</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a visual journey through Four Leaf Resort. From our luxurious rooms to our breathtaking landscapes.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-6 py-2 rounded-full uppercase text-xs font-bold tracking-widest transition-all duration-300 ${
                filter === cat 
                  ? 'bg-vp-gold text-vp-dark shadow-md transform scale-105' 
                  : 'bg-white text-gray-500 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((img) => (
            <div 
              key={img.id} 
              className="group relative overflow-hidden rounded-lg cursor-pointer shadow-md h-64"
              onClick={() => setSelectedImage(img.src)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold tracking-widest uppercase text-sm border border-white px-4 py-2">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button 
            className="absolute top-6 right-6 text-white hover:text-vp-gold transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <img 
            src={selectedImage} 
            alt="Full View" 
            className="max-h-[90vh] max-w-[90vw] object-contain rounded shadow-2xl animate-fadeIn"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;