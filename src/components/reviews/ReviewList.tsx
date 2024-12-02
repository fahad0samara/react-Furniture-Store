import React from 'react';
import { Menu } from 'lucide-react';
import ReviewCard from './ReviewCard';
import { Review } from '../../types/review';

interface ReviewListProps {
  reviews: Review[];
  onHelpfulClick: (reviewId: number) => void;
}

export default function ReviewList({ reviews, onHelpfulClick }: ReviewListProps) {
  const [sortBy, setSortBy] = React.useState<'recent' | 'helpful' | 'rating'>('recent');

  const sortedReviews = [...reviews].sort((a, b) => {
    switch (sortBy) {
      case 'recent':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case 'helpful':
        return b.helpful - a.helpful;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-medium">Customer Reviews</h2>
        <div className="relative">
          <Menu className="w-5 h-5 text-gray-500" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="absolute inset-0 opacity-0 cursor-pointer"
          >
            <option value="recent">Most Recent</option>
            <option value="helpful">Most Helpful</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      <div className="space-y-6">
        {sortedReviews.map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
            onHelpfulClick={onHelpfulClick}
          />
        ))}
      </div>
    </div>
  );
}