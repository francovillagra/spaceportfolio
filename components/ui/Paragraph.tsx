// components/ui/Paragraph.tsx
import React, { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ParagraphProps {
  className?: string;
  children: React.ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg'; // añadimos soporte para 'xs'
}

const Paragraph = ({ className = '', children, size = 'md' }: ParagraphProps) => {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  return (
    <p className={`${sizeClasses[size]} ${className}`}>
      {children}
    </p>
  );
};

export default Paragraph;
