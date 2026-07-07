import { FolderGit2, ExternalLink } from 'lucide-react';
import { Project } from '../types/cv';
import Reveal from './Reveal';

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
    <section id="projects" className="relative py-24 bg-ink-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <span className="section-eyebrow">Case studies</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-lg text-slate-400">Notable projects and technical achievements</p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={Math.min(i, 5) * 0.06}>
              <div className="group relative glass-card p-6 h-full hover:border-primary-400/40 hover:shadow-glow-accent transition-all duration-300 overflow-hidden">
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-accent-500/10 rounded-full blur-3xl group-hover:bg-accent-500/20 transition-all" />
                <div className="relative flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-primary-500/10 text-primary-300">
                      <FolderGit2 size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-bold text-white">{project.name}</h3>
                      <p className="text-xs text-slate-500">{formatDate(project.date)}</p>
                    </div>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-primary-300 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>

                <p className="relative text-slate-300 mb-4 text-sm">{project.description}</p>

                {project.highlights.length > 0 && (
                  <div className="relative mb-4">
                    <h4 className="font-semibold text-white mb-2 text-xs uppercase tracking-wide text-slate-400">
                      Key Highlights
                    </h4>
                    <ul className="space-y-1.5">
                      {project.highlights.map((highlight, hi) => (
                        <li key={hi} className="text-sm text-slate-300 flex items-start">
                          <span className="text-accent-400 mr-2 mt-0.5">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="relative flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 border border-white/10 text-slate-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
