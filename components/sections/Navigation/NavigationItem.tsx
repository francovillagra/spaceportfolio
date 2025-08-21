'use client';

import React from 'react';

interface NavigationItemProps {
  label: string;
  icon?: React.ReactNode | string;
  onClick?: () => void;
}

const NavigationItem = ({ label, icon, onClick }: NavigationItemProps) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-2 hover:text-purple-400 transition-colors font-medium"
    >
      {typeof icon === 'string' ? <span>{icon}</span> : icon}
      {label}
    </button>
  );
};

export default NavigationItem;
