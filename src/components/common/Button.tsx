import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  loading = false,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors rounded-lg';
  
  const variants = {
    primary: 'bg-black text-white hover:bg-gray-900 disabled:bg-gray-400',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 disabled:bg-gray-100',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:bg-gray-50',
    ghost: 'text-gray-700 hover:bg-gray-100 disabled:bg-transparent',
  };

  const sizes = {
    sm: 'text-sm px-3 py-2',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };

  const styles = [
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth ? 'w-full' : '',
    className,
  ].join(' ');

  return (
    <button
      className={styles}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? (
        <span className="animate-spin mr-2">⚪</span>
      ) : Icon && iconPosition === 'left' ? (
        <Icon className="mr-2" size={size === 'sm' ? 16 : size === 'md' ? 20 : 24} />
      ) : null}
      {children}
      {Icon && iconPosition === 'right' && !loading && (
        <Icon className="ml-2" size={size === 'sm' ? 16 : size === 'md' ? 20 : 24} />
      )}
    </button>
  );
}