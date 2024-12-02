import React from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../store/useStore';
import { PenTool, Ruler, Palette, Clock } from 'lucide-react';

const services = [
  {
    icon: PenTool,
    title: 'Custom Furniture Design',
    description: 'Bespoke furniture pieces tailored to your exact specifications and style preferences.',
    price: 'Starting at $500',
  },
  {
    icon: Ruler,
    title: 'Space Planning',
    description: 'Comprehensive space analysis and furniture layout optimization for maximum functionality.',
    price: 'Starting at $300',
  },
  {
    icon: Palette,
    title: 'Color Consultation',
    description: 'Expert color scheme development to create the perfect atmosphere in your space.',
    price: 'Starting at $200',
  },
  {
    icon: Clock,
    title: 'Project Management',
    description: 'End-to-end project coordination and implementation of your design vision.',
    price: 'Starting at $1,000',
  },
];

export default function DesignServices() {
  const { toggleConsultationModal } = useStore();

  return (
    <div className="pt-20">
      <div className="relative h-[40vh] mb-16">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
          alt="Design Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-serif">Design Services</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <service.icon size={32} className="mb-4" />
              <h3 className="text-xl font-medium mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="font-medium">{service.price}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={toggleConsultationModal}
            className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
}