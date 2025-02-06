import React from 'react';
import { SearchInput } from './SearchInput';
import { NotificationButton } from './NotificationButton';

export const SearchHeader: React.FC = () => {
  return (
    <div className="p-4 border-b border-white/10 flex items-center gap-4">
      <SearchInput />
      <NotificationButton />
    </div>
  );
};