import React from 'react';
import { IoAdd } from 'react-icons/io5';

interface HeaderProps {
  onAddClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddClick }) => {
  return (
    <div className="flex justify-between items-center py-6 border-b border-gray-200">
      <h1 className="text-2xl font-semibold">Details about our projects</h1>
      <button 
        onClick={onAddClick}
        className="bg-black text-white px-4 py-2 rounded-md flex items-center gap-2"
      >
        <IoAdd className="w-5 h-5" />
        <span>Add New Project</span>
      </button>
    </div>
  );
};

export default Header;