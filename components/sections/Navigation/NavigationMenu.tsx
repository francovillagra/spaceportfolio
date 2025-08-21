'use client';

import React from 'react';

interface NavigationMenuProps {
  children: React.ReactNode;
  direction?: 'row' | 'column';
}

const NavigationMenu = ({ children, direction = 'row' }: NavigationMenuProps) => {
  return (
    <div className={`flex ${direction === 'row' ? 'flex-row' : 'flex-col'} gap-4`}>
      {children}
    </div>
  );
};

export default NavigationMenu;
