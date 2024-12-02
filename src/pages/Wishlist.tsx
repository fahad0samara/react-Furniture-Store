import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Trash2 } from 'lucide-react';
import { useWishlistStore } from '../store/useWishlistStore';
import { useStore } from '../store/useStore';
import { formatCurrency } from '../utils/format';
import toast from 'react-hot-toast';

export default function Wishlist() {
  const { items, removeFromWishlist, clearWishlist } = useWishlistStore();
  const { addToCart } = useStore();

  const handleAddToCart = (product: typeof items[0]) => {
    addToCart(product);
    removeFromWishlist(product.id);
    toast.success(`${product.name} added to cart`);
  };

  if (items.length === 0) {
    return (
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-serif mb-4">Your Wishlist</h1>
            <p className="text-gray-600">Your wishlist is empty</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-serif">Your Wishlist</h1>
          <button
            onClick={() => {
              clearWishlist();
              toast.success('Wishlist cleared');
            }}
            className="text-red-600 hover:text-red-700 flex items-center"
          >
            <Trash2 size={16} className="mr-2" />
            Clear Wishlist
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-lg font-medium mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-4">{formatCurrency(item.price)}</p>

              <div className="flex space-x-4">
                <button
                  onClick={() => handleAddToCart(item)}
                  className="flex-1 bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition-colors flex items-center justify-center"
                >
                  <ShoppingCart size={16} className="mr-2" />
                  Add to Cart
                </button>
                <button
                  onClick={() => {
                    removeFromWishlist(item.id);
                    toast.success('Removed from wishlist');
                  }}
                  className="p-2 text-red-600 hover:text-red-700 rounded-lg"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}