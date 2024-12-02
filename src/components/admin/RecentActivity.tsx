import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, UserPlus, DollarSign } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'order',
    message: 'New order received',
    details: 'Milano Leather Sofa - $4,999',
    time: '5 minutes ago',
    icon: ShoppingCart,
  },
  {
    id: 2,
    type: 'user',
    message: 'New user registered',
    details: 'john.doe@example.com',
    time: '15 minutes ago',
    icon: UserPlus,
  },
  {
    id: 3,
    type: 'payment',
    message: 'Payment received',
    details: 'Order #1234 - $3,499',
    time: '1 hour ago',
    icon: DollarSign,
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-6">Recent Activity</h2>
      <div className="space-y-6">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start space-x-4"
          >
            <div className={`p-2 rounded-full ${
              activity.type === 'order'
                ? 'bg-blue-100 text-blue-600'
                : activity.type === 'user'
                ? 'bg-green-100 text-green-600'
                : 'bg-purple-100 text-purple-600'
            }`}>
              <activity.icon size={16} />
            </div>
            <div className="flex-1">
              <p className="font-medium">{activity.message}</p>
              <p className="text-sm text-gray-600">{activity.details}</p>
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}