import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import LazyImage from '../components/LazyImage';

const blogPosts = [
  {
    id: 1,
    title: 'The Art of Minimalist Interior Design',
    excerpt: 'Discover how less can be more in modern interior design...',
    image: 'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&q=80',
    author: 'Sarah Anderson',
    date: '2024-03-15',
    category: 'Design Tips',
  },
  {
    id: 2,
    title: 'Sustainable Furniture Trends 2024',
    excerpt: 'Exploring eco-friendly materials and sustainable practices...',
    image: 'https://images.unsplash.com/photo-1618219944342-824e40a13285?auto=format&fit=crop&q=80',
    author: 'Michael Chen',
    date: '2024-03-10',
    category: 'Trends',
  },
  {
    id: 3,
    title: 'Creating the Perfect Home Office',
    excerpt: 'Tips for designing a productive work environment at home...',
    image: 'https://images.unsplash.com/photo-1618219740975-d40978bb7378?auto=format&fit=crop&q=80',
    author: 'Emma Thompson',
    date: '2024-03-05',
    category: 'Workspace',
  },
];

export default function Blog() {
  return (
    <div className="pt-20">
      <div className="relative h-[40vh] mb-16">
        <img
          src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80"
          alt="Blog"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-serif">Design Journal</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-4">
                <LazyImage
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm">
                  {post.category}
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                <div className="flex items-center">
                  <User size={16} className="mr-1" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
              </div>
              
              <h2 className="text-xl font-medium mb-2 group-hover:text-gray-600 transition-colors">
                {post.title}
              </h2>
              
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              
              <button className="flex items-center text-black hover:text-gray-600 transition-colors">
                Read More <ArrowRight size={16} className="ml-1" />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}