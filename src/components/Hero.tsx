import React from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../store/useStore';

export default function Hero() {
  const { toggleConsultationModal } = useStore();

  const scrollToFeatured = () => {
    const featuredSection = document.getElementById('featured');
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
          alt="Luxury Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-serif text-white leading-tight">
              Crafting Timeless Spaces Since 2014
            </h1>
            <p className="mt-6 text-xl text-gray-200">
              Elevate your living space with our curated collection of luxury furniture and professional design services.
            </p>
            <div className="mt-10 flex space-x-4">
              <button
                onClick={scrollToFeatured}
                className="bg-white text-black px-8 py-3 font-medium hover:bg-gray-100 transition-colors"
              >
                Explore Collection
              </button>
              <button
                onClick={toggleConsultationModal}
                className="border border-white text-white px-8 py-3 font-medium hover:bg-white/10 transition-colors"
              >
                Book Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}