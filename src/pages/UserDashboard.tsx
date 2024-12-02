import React from 'react';
import { motion } from 'framer-motion';
import { Package, Clock, Heart, CreditCard } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import { formatCurrency } from '../utils/format';

const orders = [
  {
    id: 'ORD-001',
    date: '2024-03-15',
    product: 'Milano Leather Sofa',
    status: 'Delivered',
    amount: 4999,
  },
  {
    id: 'ORD-002',
    date: '2024-03-10',
    product: 'Vienna Dining Set',
    status: 'Processing',
    amount: 3499,
  },
];

const wishlist = [
  {
    id: 1,
    name: 'Nordic Lounge Chair',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Modern Office Desk',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80',
  },
];

export default function UserDashboard() {
  const { user } = useAuthStore();

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <h1 className="text-3xl font-serif mb-2">Welcome back, {user?.name}</h1>
          <p className="text-gray-600">Manage your orders and preferences</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Package, label: 'Total Orders', value: '12' },
            { icon: Clock, label: 'Pending Orders', value: '2' },
            { icon: Heart, label: 'Wishlist Items', value: '8' },
            { icon: CreditCard, label: 'Total Spent', value: '$12,345' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-semibold mt-1">{stat.value}</p>
                </div>
                <stat.icon className="w-8 h-8 text-gray-400" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Orders */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-medium mb-6">Recent Orders</h2>
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">{order.product}</p>
                    <p className="text-sm text-gray-600">Order ID: {order.id}</p>
                    <p className="text-sm text-gray-600">{new Date(order.date).toLocaleDateString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{formatCurrency(order.amount)}</p>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs mt-2 ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2 text-center text-gray-600 hover:text-black transition-colors">
              View All Orders
            </button>
          </div>

          {/* Wishlist */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-medium mb-6">Wishlist</h2>
            <div className="space-y-4">
              {wishlist.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-gray-600">{formatCurrency(item.price)}</p>
                  </div>
                  <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2 text-center text-gray-600 hover:text-black transition-colors">
              View Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}