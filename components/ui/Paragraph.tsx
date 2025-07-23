// components/ui/Paragraph.tsx
import React, { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ className, children, ...props }) => {
  return (
    <p className={cn('text-gray-300 text-lg leading-relaxed', className)} {...props}>
      {children}
    </p>
  );
};

export default Paragraph;
