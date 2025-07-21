// components/ui/Button.tsx
'use client';

import React, { ButtonHTMLAttributes, FC } from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
};

const Button: FC<ButtonProps> = ({ variant = 'primary', className, children, ...props }) => {
  const baseStyles = 'px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition';

  const variantStyles = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500',
    secondary: 'bg-cyan-600 text-white hover:bg-cyan-700 focus:ring-cyan-500',
    outline: 'border border-gray-300 text-gray-300 hover:bg-gray-700 focus:ring-gray-500',
  };

  return (
    <button className={cn(baseStyles, variantStyles[variant], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
