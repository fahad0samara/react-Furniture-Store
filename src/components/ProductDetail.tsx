import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart } from 'lucide-react';
import { useStore } from '../store/useStore';
import { formatCurrency } from '../utils/format';
import toast from 'react-hot-toast';

export default function ProductDetail() {
  const { selectedProduct, isProductDetailOpen, toggleProductDetail, addToCart } = useStore();

  if (!selectedProduct) return null;

  const handleAddToCart = () => {
    addToCart(selectedProduct);
    toast.success(`${selectedProduct.name} added to cart`);
  };

  return (
    <AnimatePresence>
      {isProductDetailOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleProductDetail}
            className="fixed inset-0 bg-black/50 z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 overflow-y-auto"
          >
            <div className="min-h-screen px-4 py-8 flex items-center justify-center">
              <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden">
                <button
                  onClick={toggleProductDetail}
                  className="absolute right-4 top-4 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2">
                    <div className="relative pt-[100%] md:pt-0 md:h-full">
                      <img
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto max-h-[calc(100vh-4rem)] md:max-h-[80vh]">
                    <h2 className="text-2xl md:text-3xl font-serif mb-2">{selectedProduct.name}</h2>
                    <p className="text-xl md:text-2xl mb-6">{formatCurrency(selectedProduct.price)}</p>
                    
                    <div className="prose prose-sm mb-6">
                      <p className="text-gray-600">{selectedProduct.description}</p>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-medium mb-2">Dimensions</h3>
                        <p className="text-gray-600">{selectedProduct.details?.dimensions}</p>
                      </div>
                      
                      <div>
                        <h3 className="font-medium mb-2">Materials</h3>
                        <ul className="list-disc list-inside text-gray-600">
                          {selectedProduct.details?.materials.map((material, index) => (
                            <li key={index}>{material}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-medium mb-2">Care Instructions</h3>
                        <ul className="list-disc list-inside text-gray-600">
                          {selectedProduct.details?.care.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 sticky bottom-0 bg-white pt-4">
                      <button
                        onClick={handleAddToCart}
                        className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition-colors flex items-center justify-center"
                      >
                        <ShoppingCart size={20} className="mr-2" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}