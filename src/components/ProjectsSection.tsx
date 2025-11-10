import { FolderGit2, ExternalLink } from 'lucide-react';
import { Project } from '../types/cv';

interface ProjectsSectionProps {
  projects: Project[];
}

const formatDate = (dateString: string) => {
  const [year, month] = dateString.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
};

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600">Notable projects and technical achievements</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary-100 rounded-lg">
                    <FolderGit2 className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                    <p className="text-sm text-gray-600">{formatDate(project.date)}</p>
                  </div>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-4">{project.description}</p>

              {/* Highlights */}
              {project.highlights.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start">
                        <span className="text-primary-600 mr-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
