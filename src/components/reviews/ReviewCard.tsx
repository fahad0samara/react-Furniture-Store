import React from 'react';
import { Star, ThumbsUp, Check } from 'lucide-react';
import { Review } from '../../types/review';
import { formatDistanceToNow } from 'date-fns';

interface ReviewCardProps {
  review: Review;
  onHelpfulClick: (reviewId: number) => void;
}

export default function ReviewCard({ review, onHelpfulClick }: ReviewCardProps) {
  return (
    <div className="border-b border-gray-200 py-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          {review.userImage ? (
            <img
              src={review.userImage}
              alt={review.userName}
              className="w-10 h-10 rounded-full object-cover mr-3"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
              <span className="text-gray-500 font-medium">
                {review.userName.charAt(0)}
              </span>
            </div>
          )}
          <div>
            <div className="font-medium">{review.userName}</div>
            {review.verified && (
              <div className="flex items-center text-green-600 text-sm">
                <Check size={14} className="mr-1" />
                Verified Purchase
              </div>
            )}
          </div>
        </div>
        <div className="text-sm text-gray-500">
          {formatDistanceToNow(new Date(review.createdAt), { addSuffix: true })}
        </div>
      </div>

      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      <h3 className="font-medium mb-2">{review.title}</h3>
      <p className="text-gray-600 mb-4">{review.content}</p>

      {review.images && review.images.length > 0 && (
        <div className="flex space-x-2 mb-4">
          {review.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Review image ${index + 1}`}
              className="w-20 h-20 object-cover rounded-lg"
            />
          ))}
        </div>
      )}

      <button
        onClick={() => onHelpfulClick(review.id)}
        className="flex items-center text-sm text-gray-500 hover:text-gray-700"
      >
        <ThumbsUp size={14} className="mr-1" />
        Helpful ({review.helpful})
      </button>
    </div>
  );
}