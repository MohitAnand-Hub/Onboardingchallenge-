'use client';

import { useState } from 'react';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import AddProjectModal from './components/AddProjectModal';

interface Project {
  id: number;
  title: string;
  createdDate: string;
}

export default function HomePage() {
  const [projects, setProjects] = useState<Project[]>([
    { id: 1, title: 'Skyline Towers', createdDate: '2025-08-15' },
    { id: 2, title: 'Garden Residency', createdDate: '2025-08-15' },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteProject = (projectId: number) => {
    const updatedProjects = projects.filter(project => project.id !== projectId);
    setProjects(updatedProjects);
  };

  const handleAddProject = (title: string) => {
    const newProject = {
      id: Date.now(),
      title,
      createdDate: new Date().toISOString().slice(0, 10),
    };
    setProjects([...projects, newProject]);
    setIsModalOpen(false);
  };

  return (
    <div className="flex-1">
      <Header onAddClick={() => setIsModalOpen(true)} />
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Existing Projects</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              createdDate={project.createdDate}
              onDelete={() => handleDeleteProject(project.id)}
            />
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Sharepoint link for project related sales brochures and documents</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="bg-gray-100 p-4 rounded-md text-gray-600">
            https://sharepoint.com/...
          </div>
        </div>
      </div>

      {isModalOpen && (
        <AddProjectModal
          onAddProject={handleAddProject}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}