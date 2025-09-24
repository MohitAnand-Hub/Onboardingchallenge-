import React from 'react';
import { BsFolder, BsEye, BsTrash } from 'react-icons/bs';

interface ProjectCardProps {
  title: string;
  createdDate: string;
  onDelete: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, createdDate, onDelete }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-white border border-gray-200 rounded-md shadow-sm mb-4">
      <div className="flex items-center gap-4 mb-4 sm:mb-0">
        <BsFolder className="text-2xl text-gray-400" />
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-gray-500">Created: {createdDate}</p>
        </div>
      </div>
      <div className="flex gap-2 w-full sm:w-auto">
        <button className="flex-1 sm:flex-none flex justify-center items-center gap-1 p-2 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200">
          <BsEye />
          <span>View</span>
        </button>
        <button 
          onClick={onDelete}
          className="flex-1 sm:flex-none flex justify-center items-center gap-1 p-2 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200"
        >
          <BsTrash />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;