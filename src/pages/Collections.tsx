import React from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../store/useStore';
import { products } from '../data/products';
import { formatCurrency } from '../utils/format';
import { Filter, ShoppingCart } from 'lucide-react';
import toast from 'react-hot-toast';

const categories = ['all', 'living', 'dining', 'bedroom', 'office'];

export default function Collections() {
  const [activeCategory, setActiveCategory] = React.useState('all');
  const { addToCart, setSelectedProduct } = useStore();

  const filteredProducts = products.filter(
    product => activeCategory === 'all' || product.category === activeCategory
  );

  const handleAddToCart = (product: typeof products[0], e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="pt-20">
      <div className="relative h-[40vh] mb-16">
        <img
          src="https://images.unsplash.com/photo-1618219944342-824e40a13285?auto=format&fit=crop&q=80"
          alt="Collections"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-serif">Our Collections</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Filter size={20} />
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg capitalize ${
                    activeCategory === category
                      ? 'bg-black text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
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
    </div>
  );
}