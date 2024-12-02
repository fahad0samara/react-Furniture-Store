import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Globe } from 'lucide-react';

const stats = [
  { icon: Award, label: 'Years of Excellence', value: '10+' },
  { icon: Users, label: 'Happy Clients', value: '1000+' },
  { icon: Clock, label: 'Projects Completed', value: '500+' },
  { icon: Globe, label: 'Design Awards', value: '25+' },
];

const team = [
  {
    name: 'Sarah Anderson',
    role: 'Lead Designer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
  },
  {
    name: 'Michael Chen',
    role: 'Interior Architect',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
  },
  {
    name: 'Emma Thompson',
    role: 'Design Consultant',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
  },
];

export default function About() {
  return (
    <div className="pt-20">
      <div className="relative h-[40vh] mb-16">
        <img
          src="https://images.unsplash.com/photo-1618219740975-d40978bb7378?auto=format&fit=crop&q=80"
          alt="About Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-serif">About Us</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-serif mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Since 2014, Luxe Interiors has been at the forefront of innovative furniture design and 
              interior solutions. What started as a small design studio has grown into a renowned 
              name in luxury furniture and interior design.
            </p>
            <p className="text-gray-600">
              Our commitment to quality, attention to detail, and passion for creating beautiful 
              spaces has earned us the trust of clients worldwide and numerous industry accolades.
            </p>
          </div>
          <div className="relative h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80"
              alt="Our Workshop"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <stat.icon size={32} className="mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-6">Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the creative minds behind our exceptional designs and customer experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}