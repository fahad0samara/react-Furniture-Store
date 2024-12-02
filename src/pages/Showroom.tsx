import React from 'react';
import { motion } from 'framer-motion';
import LazyImage from '../components/LazyImage';

const showroomImages = [
  {
    src: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80',
    alt: 'Living Room Display',
    category: 'Living Room',
  },
  {
    src: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80',
    alt: 'Dining Room Display',
    category: 'Dining Room',
  },
  {
    src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80',
    alt: 'Bedroom Display',
    category: 'Bedroom',
  },
];

export default function Showroom() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif mb-4">Our Showroom</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience our curated collection of premium furniture in person at our flagship showroom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showroomImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <LazyImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <h3 className="text-white text-xl font-medium">{image.category}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-serif mb-4">Visit Our Showroom</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium mb-2">Location</h3>
              <p className="text-gray-600">123 Design District<br />New York, NY 10001</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Hours</h3>
              <p className="text-gray-600">
                Monday - Saturday: 10:00 AM - 7:00 PM<br />
                Sunday: 12:00 PM - 5:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}