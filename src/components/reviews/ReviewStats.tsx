import React from 'react';
import { Star } from 'lucide-react';
import { ReviewStats } from '../../types/review';

interface ReviewStatsProps {
  stats: ReviewStats;
}

export default function ReviewStats({ stats }: ReviewStatsProps) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="flex items-center mb-6">
        <div className="text-4xl font-bold mr-4">{stats.averageRating.toFixed(1)}</div>
        <div>
          <div className="flex mb-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.round(stats.averageRating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-gray-600">Based on {stats.totalReviews} reviews</p>
        </div>
      </div>

      <div className="space-y-2">
        {Object.entries(stats.distribution)
          .sort(([a], [b]) => Number(b) - Number(a))
          .map(([rating, count]) => {
            const percentage = (count / stats.totalReviews) * 100;
            return (
              <div key={rating} className="flex items-center">
                <div className="w-12 text-sm text-gray-600">{rating} stars</div>
                <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-400 rounded-full"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <div className="w-12 text-sm text-gray-600 text-right">
                  {Math.round(percentage)}%
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}