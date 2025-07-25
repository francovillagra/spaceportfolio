import React from 'react';
import { cn } from '@/lib/utils';

interface TitleProps {
  className?: string;
  children?: React.ReactNode;
  text?: string;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Title = ({ className = '', children, text, level = 'h2' }: TitleProps) => {
  const Component = level;

  return (
    <Component className={cn('font-bold text-white', className)}>
      {text || children}
    </Component>
  );
};

export default Title;
