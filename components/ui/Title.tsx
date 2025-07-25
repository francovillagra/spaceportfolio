import React from 'react';

type TitleProps = {
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
};

const Title = ({ level = 'h1', children, className = '' }: TitleProps) => {
  const Tag = level;
  return <Tag className={`font-bold ${className}`}>{children}</Tag>;
};

export default Title;
