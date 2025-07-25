import React, { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ParagraphProps {
  className?: string;
  children?: React.ReactNode;
  text?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

const Paragraph = ({ className = '', children, text, size = 'md' }: ParagraphProps) => {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  return (
    <p className={cn(sizeClasses[size], className)}>
      {text || children}
    </p>
  );
};

export default Paragraph;
