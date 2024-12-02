import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helper?: string;
}

export default function Input({
  label,
  error,
  helper,
  className = '',
  ...props
}: InputProps) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        className={`block w-full rounded-md border-gray-300 shadow-sm 
          focus:border-black focus:ring-black 
          disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200
          ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}
          ${className}`}
        {...props}
      />
      {helper && !error && (
        <p className="text-sm text-gray-500">{helper}</p>
      )}
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}