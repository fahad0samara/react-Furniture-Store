import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { useStore } from '../store/useStore';
import { products } from '../data/products';
import { formatCurrency } from '../utils/format';
import toast from 'react-hot-toast';

export default function FeaturedProducts() {
  const { addToCart, setSelectedProduct } = useStore();

  const handleAddToCart = (product: typeof products[0], e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <section id="featured" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-serif">Featured Collection</h2>
            <p className="mt-2 text-gray-600">Handpicked pieces for sophisticated living</p>
          </div>
          <button className="flex items-center text-gray-900 hover:text-gray-600 transition-colors">
            View All <ArrowRight size={20} className="ml-2" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button
                  onClick={(e) => handleAddToCart(product, e)}
                  className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <ShoppingCart size={20} />
                </button>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-gray-600">{formatCurrency(product.price)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}