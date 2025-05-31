import React from 'react';

interface ButtonStrokeProps {
  title: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
}

const ButtonStroke: React.FC<ButtonStrokeProps> = ({
  title,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button',
  children,
}) => {
  const baseStyles = 'border-3 rounded-3xl font-medium transition-colors font-bold uppercase';
  
  const variantStyles = {
    primary: 'text-white border-white hover:bg-white hover:text-black',
    secondary: 'text-gray-400 border-gray-400 hover:bg-gray-400 hover:text-white',
    success: 'text-green-500 border-green-500 hover:bg-green-500 hover:text-white',
    danger: 'text-red-500 border-red-500 hover:bg-red-500 hover:text-white'
  };

  const sizeStyles = {
    sm: 'py-1 px-2 text-sm',
    md: 'py-1 px-3 text-base',
    lg: 'py-2 px-4 text-lg'
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`}
    >
      {children || <span>{title}</span>}
    </button>
  );
};

export default ButtonStroke;