// components/ui/Title.tsx
import React, { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  text: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ text, className, ...props }) => {
  return (
    <h2 className={cn('text-4xl font-bold text-white', className)} {...props}>
      {text}
    </h2>
  );
};

export default Title;
