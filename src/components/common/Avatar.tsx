import React from 'react';
import { User } from 'lucide-react';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  fallback?: string;
  className?: string;
}

export default function Avatar({
  src,
  alt,
  size = 'md',
  fallback,
  className = '',
}: AvatarProps) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const [error, setError] = React.useState(false);

  if (error || !src) {
    return (
      <div
        className={`${sizes[size]} rounded-full bg-gray-100 flex items-center justify-center ${className}`}
      >
        {fallback ? (
          <span className="text-gray-600 font-medium">
            {fallback.charAt(0).toUpperCase()}
          </span>
        ) : (
          <User className="text-gray-400" size={size === 'sm' ? 16 : size === 'md' ? 20 : 24} />
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      className={`${sizes[size]} rounded-full object-cover ${className}`}
    />
  );
}