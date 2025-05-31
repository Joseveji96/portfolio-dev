import React from 'react'
import { Github } from 'lucide-react';
const ProjectCursor = ({ mousePosition }: { mousePosition: { x: number, y: number } }) => {
  return (
    <div 
      className="hidden group-hover:flex absolute py-2 px-3 rounded-small items-center justify-center text-white pointer-events-none transition-all duration-75 ease-linear z-50"
      style={{
        transform: `translate(${mousePosition.x + 10}px, ${mousePosition.y + 10}px)`, backgroundColor: "rgba(168, 162, 158, 0.9)",
      }}
    >
      <span className="text-sm font-medium">Ver Proyecto</span>
       <Github size={16} className="icon ml-2" />
    </div>
  );
};
export default ProjectCursor