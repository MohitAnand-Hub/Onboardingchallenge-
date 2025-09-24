import React, { useState } from 'react';

interface AddProjectModalProps {
  onAddProject: (title: string) => void;
  onClose: () => void;
}

const AddProjectModal: React.FC<AddProjectModalProps> = ({ onAddProject, onClose }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAddProject(title);
      setTitle('');
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Add New Project</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">&times;</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="projectTitle" className="block text-sm font-medium text-gray-700">Project Title</label>
            <input
              type="text"
              id="projectTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-black text-white rounded-md">
              Add Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProjectModal;