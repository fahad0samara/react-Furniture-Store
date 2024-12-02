import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

const topProducts = [
  {
    id: 1,
    name: 'Milano Leather Sofa',
    sales: 45,
    revenue: 224955,
    trend: 'up',
  },
  {
    id: 2,
    name: 'Vienna Dining Set',
    sales: 38,
    revenue: 132962,
    trend: 'down',
  },
  {
    id: 3,
    name: 'Nordic Lounge Chair',
    sales: 32,
    revenue: 60768,
    trend: 'up',
  },
];

export default function TopProducts() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-6">Top Products</h2>
      <div className="space-y-6">
        {topProducts.map((product) => (
          <div key={product.id} className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-sm text-gray-600">
                {product.sales} sales
              </p>
            </div>
            <div className="text-right">
              <p className="font-medium">
                ${product.revenue.toLocaleString()}
              </p>
              <p className={`text-sm flex items-center justify-end ${
                product.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {product.trend === 'up' ? (
                  <ArrowUp size={16} className="mr-1" />
                ) : (
                  <ArrowDown size={16} className="mr-1" />
                )}
                {product.trend === 'up' ? '+' : '-'}12%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}