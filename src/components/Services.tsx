import React from 'react';
import { PenTool, Home, Users, Clock } from 'lucide-react';

const services = [
  {
    icon: PenTool,
    title: 'Custom Design',
    description: 'Tailored furniture solutions that perfectly match your vision and space.',
  },
  {
    icon: Home,
    title: 'Interior Planning',
    description: 'Professional space planning and interior architecture services.',
  },
  {
    icon: Users,
    title: 'Expert Consultation',
    description: 'One-on-one sessions with our experienced design consultants.',
  },
  {
    icon: Clock,
    title: 'Lifetime Support',
    description: 'Dedicated after-sales service and maintenance support.',
  },
];

export default function Services() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-serif mb-4">Our Services</h2>
          <p className="text-gray-600">
            Comprehensive design solutions tailored to your unique style and needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg"
            >
              <service.icon size={32} className="mb-4 text-gray-900" />
              <h3 className="text-xl font-medium mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}