import { useState, useEffect } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  Maximize2, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Globe, 
  Layers,
  CheckCircle2
} from 'lucide-react';
import { Project, Language } from '../types/cv';
import { translations } from '../data/translations';
import Reveal from './Reveal';

interface ProjectsSectionProps {
  projects: Project[];
  language?: Language;
}

const MONTHS_EN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const MONTHS_ES = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

const formatDate = (dateString: string, lang: Language) => {
  const [year, month] = dateString.split('-');
  const monthIndex = parseInt(month, 10) - 1;
  const list = lang === 'es' ? MONTHS_ES : MONTHS_EN;
  return list[monthIndex] ? `${list[monthIndex]} ${year}` : year;
};

const getAssetUrl = (url: string) => {
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  const cleanUrl = url.startsWith('/') ? url.slice(1) : url;
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  return `${base}${cleanUrl}`;
};

export default function ProjectsSection({ projects, language = 'en' }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'personal' | 'enterprise'>('all');
  const [activeImageIndices, setActiveImageIndices] = useState<Record<string, number>>({});
  const [lightbox, setLightbox] = useState<{
    projectId: string;
    imageIndex: number;
  } | null>(null);

  const t = translations[language].projects;

  const personalProjects = projects.filter((p) => p.category === 'personal');
  const enterpriseProjects = projects.filter((p) => p.category !== 'personal');

  // Handle active image index for a project
  const getActiveImageIndex = (projectId: string) => activeImageIndices[projectId] || 0;

  const setImageIndex = (projectId: string, index: number) => {
    setActiveImageIndices((prev) => ({ ...prev, [projectId]: index }));
  };

  const handleNextImage = (e: React.MouseEvent, project: Project) => {
    e.stopPropagation();
    if (!project.screenshots || project.screenshots.length <= 1) return;
    const current = getActiveImageIndex(project.id);
    const next = (current + 1) % project.screenshots.length;
    setImageIndex(project.id, next);
  };

  const handlePrevImage = (e: React.MouseEvent, project: Project) => {
    e.stopPropagation();
    if (!project.screenshots || project.screenshots.length <= 1) return;
    const current = getActiveImageIndex(project.id);
    const prev = (current - 1 + project.screenshots.length) % project.screenshots.length;
    setImageIndex(project.id, prev);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightbox) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const currentProject = projects.find((p) => p.id === lightbox.projectId);
      if (!currentProject?.screenshots?.length) return;

      if (e.key === 'Escape') {
        setLightbox(null);
      } else if (e.key === 'ArrowRight') {
        setLightbox((prev) => {
          if (!prev) return null;
          return {
            ...prev,
            imageIndex: (prev.imageIndex + 1) % currentProject.screenshots!.length
          };
        });
      } else if (e.key === 'ArrowLeft') {
        setLightbox((prev) => {
          if (!prev) return null;
          return {
            ...prev,
            imageIndex:
              (prev.imageIndex - 1 + currentProject.screenshots!.length) %
              currentProject.screenshots!.length
          };
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox, projects]);

  const activeLightboxProject = lightbox
    ? projects.find((p) => p.id === lightbox.projectId)
    : null;
  const activeLightboxScreenshot =
    activeLightboxProject?.screenshots?.[lightbox?.imageIndex ?? 0];

  return (
    <section id="projects" className="relative py-20 sm:py-24 bg-ink-950 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary-500/5 rounded-full blur-3xl pointer-events-none max-w-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-accent-500/5 rounded-full blur-3xl pointer-events-none max-w-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-10 sm:mb-12">
          <span className="section-eyebrow flex items-center justify-center gap-2">
            <Sparkles size={14} className="text-primary-400" /> {t.eyebrow}
          </span>
          <h2 className="section-title">
            {t.title} <span className="gradient-text">{t.titleHighlight}</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto px-2">
            {t.subtitle}
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6 sm:mt-8">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeFilter === 'all'
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25 ring-1 ring-primary-400'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {t.filterAll} ({projects.length})
            </button>
            <button
              onClick={() => setActiveFilter('personal')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 ${
                activeFilter === 'personal'
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25 ring-1 ring-accent-400'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <Sparkles size={14} className="text-accent-300" />
              {t.filterPersonal} ({personalProjects.length})
            </button>
            <button
              onClick={() => setActiveFilter('enterprise')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeFilter === 'enterprise'
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25 ring-1 ring-primary-400'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {t.filterEnterprise} ({enterpriseProjects.length})
            </button>
          </div>
        </Reveal>

        {/* PERSONAL PROJECTS SHOWCASE (Cards with Interactive Gallery) */}
        {(activeFilter === 'all' || activeFilter === 'personal') && personalProjects.length > 0 && (
          <div className="space-y-10 sm:space-y-12 mb-16">
            {personalProjects.map((project, i) => {
              const activeIndex = getActiveImageIndex(project.id);
              const currentScreenshot = project.screenshots?.[activeIndex];
              const totalScreenshots = project.screenshots?.length || 0;

              return (
                <Reveal key={project.id} delay={i * 0.1}>
                  <div className="group glass-card p-4 sm:p-6 md:p-8 hover:border-primary-400/40 hover:shadow-glow-accent transition-all duration-300 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                      
                      {/* Left: Gallery & Browser Mockup */}
                      <div className="lg:col-span-7 flex flex-col space-y-3">
                        {/* Browser Window Frame */}
                        <div className="rounded-xl overflow-hidden border border-white/15 bg-slate-900/90 shadow-2xl">
                          {/* Browser Top Bar */}
                          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-white/10">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 rounded-full bg-red-500/80" />
                              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                            </div>
                            
                            {/* Domain Pill */}
                            <div className="flex items-center space-x-1 px-2.5 sm:px-3 py-1 bg-white/5 rounded-md text-[11px] text-slate-400 border border-white/5 font-mono max-w-[150px] sm:max-w-none truncate">
                              <Globe size={11} className="text-primary-400 mr-1 shrink-0" />
                              <span className="truncate">{project.link?.replace('https://', '')}</span>
                            </div>

                            {/* Screenshot Counter */}
                            <div className="text-[11px] text-slate-500 font-mono shrink-0">
                              {activeIndex + 1} / {totalScreenshots}
                            </div>
                          </div>

                            {/* Screenshot Container */}
                          <div
                            className="relative aspect-[16/10] bg-black/60 overflow-hidden cursor-pointer group/img"
                            onClick={() =>
                              setLightbox({ projectId: project.id, imageIndex: activeIndex })
                            }
                          >
                            {currentScreenshot ? (
                              <img
                                src={getAssetUrl(currentScreenshot.url)}
                                alt={currentScreenshot.title}
                                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                                loading="lazy"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-slate-600">
                                {t.noPreview}
                              </div>
                            )}

                            {/* Hover overlay with zoom button */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <span className="flex items-center gap-2 px-4 py-2 bg-primary-500/90 text-white text-xs font-semibold rounded-lg shadow-lg backdrop-blur-sm transform translate-y-2 group-hover/img:translate-y-0 transition-transform">
                                <Maximize2 size={14} /> {t.expandScreenshot}
                              </span>
                            </div>

                            {/* Prev / Next navigation arrows */}
                            {totalScreenshots > 1 && (
                              <>
                                <button
                                  onClick={(e) => handlePrevImage(e, project)}
                                  aria-label={t.prevScreenshot}
                                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-950/80 hover:bg-primary-500 text-white flex items-center justify-center opacity-80 hover:opacity-100 transition-all shadow-md z-10"
                                >
                                  <ChevronLeft size={18} />
                                </button>
                                <button
                                  onClick={(e) => handleNextImage(e, project)}
                                  aria-label={t.nextScreenshot}
                                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-950/80 hover:bg-primary-500 text-white flex items-center justify-center opacity-80 hover:opacity-100 transition-all shadow-md z-10"
                                >
                                  <ChevronRight size={18} />
                                </button>
                              </>
                            )}

                            {/* Screenshot Caption at bottom */}
                            {currentScreenshot && (
                              <div className="absolute bottom-0 inset-x-0 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 border-t border-white/10 text-[11px] text-slate-300 flex justify-between items-center">
                                <span className="font-semibold text-white">
                                  {currentScreenshot.title}
                                </span>
                                <span className="text-slate-400 hidden sm:inline">
                                  {currentScreenshot.caption}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Thumbnail Bar */}
                        {totalScreenshots > 1 && (
                          <div className="flex gap-2 overflow-x-auto py-1">
                            {project.screenshots?.map((shot, idx) => (
                              <button
                                key={idx}
                                onClick={() => setImageIndex(project.id, idx)}
                                className={`relative flex-shrink-0 w-24 h-14 rounded-lg overflow-hidden border transition-all ${
                                  idx === activeIndex
                                    ? 'border-primary-400 ring-2 ring-primary-400/40 opacity-100 scale-105'
                                    : 'border-white/15 opacity-60 hover:opacity-100'
                                }`}
                              >
                                <img
                                  src={getAssetUrl(shot.url)}
                                  alt={shot.title}
                                  className="w-full h-full object-cover object-top"
                                />
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Right: Project Details & Tech Stack */}
                      <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                        <div>
                          {/* Header badges */}
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            {project.badge && (
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                {project.badge}
                              </span>
                            )}
                            <span className="text-xs text-slate-500 font-mono">
                              {formatDate(project.date, language)}
                            </span>
                          </div>

                          <h3 className="text-2xl font-display font-bold text-white mb-1">
                            {project.name}
                          </h3>

                          {project.tagline && (
                            <p className="text-sm font-medium text-primary-300 mb-3">
                              {project.tagline}
                            </p>
                          )}

                          <p className="text-slate-300 text-sm leading-relaxed mb-4">
                            {project.description}
                          </p>

                          {/* Highlights */}
                          {project.highlights.length > 0 && (
                            <div className="mb-4">
                              <h4 className="text-xs uppercase font-semibold tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                                <Layers size={13} className="text-primary-400" /> {t.architectureHighlights}
                              </h4>
                              <ul className="space-y-2">
                                {project.highlights.map((highlight, hi) => (
                                  <li key={hi} className="text-xs text-slate-300 flex items-start">
                                    <CheckCircle2
                                      size={14}
                                      className="text-primary-400 mr-2 mt-0.5 shrink-0"
                                    />
                                    <span>{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        <div>
                          {/* Technologies */}
                          <div className="flex flex-wrap gap-1.5 mb-5">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 bg-white/5 border border-white/10 hover:border-primary-400/40 text-slate-300 rounded-lg text-xs font-medium transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* CTA Live Button */}
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-400 hover:to-accent-400 text-white text-sm font-semibold shadow-lg shadow-primary-500/20 transition-all hover:scale-[1.02]"
                            >
                              <span>{language === 'es' ? `Visitar ${project.name}` : `Visit ${project.name}`}</span>
                              <ExternalLink size={16} />
                            </a>
                          )}
                        </div>
                      </div>

                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        )}

        {/* ENTERPRISE PROJECTS (Grid Cards) */}
        {(activeFilter === 'all' || activeFilter === 'enterprise') && enterpriseProjects.length > 0 && (
          <div>
            {activeFilter === 'all' && (
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary-500/10 text-primary-300">
                  <FolderGit2 size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white">
                    {t.enterpriseTitle}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {t.enterpriseSubtitle}
                  </p>
                </div>
                <div className="flex-1 border-t border-white/10 ml-4 hidden md:block" />
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {enterpriseProjects.map((project, i) => (
                <Reveal key={project.id} delay={Math.min(i, 5) * 0.05}>
                  <div className="group relative glass-card p-4 sm:p-6 h-full hover:border-primary-400/40 hover:shadow-glow-accent transition-all duration-300 overflow-hidden flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-2.5 sm:gap-3">
                          <div className="p-2 sm:p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 group-hover:text-primary-300 group-hover:border-primary-400/30 transition-colors shrink-0">
                            <FolderGit2 size={18} className="sm:w-5 sm:h-5" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-base font-display font-bold text-white truncate">
                              {project.name}
                            </h3>
                            <p className="text-xs text-slate-500">{formatDate(project.date, language)}</p>
                          </div>
                        </div>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-primary-300 hover:bg-white/10 rounded-lg transition-colors shrink-0"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>

                      <p className="text-slate-300 mb-4 text-xs sm:text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {project.highlights.length > 0 && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-white mb-2 text-xs uppercase tracking-wide text-slate-400">
                            {t.keyAchievements}
                          </h4>
                          <ul className="space-y-1.5">
                            {project.highlights.map((highlight, hi) => (
                              <li key={hi} className="text-xs text-slate-300 flex items-start">
                                <span className="text-accent-400 mr-2 mt-0.5">▸</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 bg-white/5 border border-white/10 text-slate-300 rounded-full text-xs font-medium"
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
        )}
      </div>

      {/* LIGHTBOX MODAL */}
      {lightbox && activeLightboxProject && activeLightboxScreenshot && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-6xl w-full bg-slate-900 border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10 bg-slate-950/70">
              <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
                <Globe size={16} className="text-primary-400 shrink-0 hidden sm:block" />
                <div className="min-w-0">
                  <h3 className="text-white font-bold text-sm sm:text-base leading-tight truncate">
                    {activeLightboxProject.name} — {activeLightboxScreenshot.title}
                  </h3>
                  <p className="text-xs text-slate-400 truncate">
                    {activeLightboxScreenshot.caption}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-1 sm:space-x-2 shrink-0">
                {activeLightboxProject.link && (
                  <a
                    href={activeLightboxProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors text-xs flex items-center gap-1.5"
                  >
                    <span>{t.visitSite}</span>
                    <ExternalLink size={14} />
                  </a>
                )}
                <button
                  onClick={() => setLightbox(null)}
                  className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  aria-label={t.closePreview}
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Image Viewport */}
            <div className="relative flex-1 bg-black/90 flex items-center justify-center p-2 overflow-auto">
              <img
                src={getAssetUrl(activeLightboxScreenshot.url)}
                alt={activeLightboxScreenshot.title}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded shadow-lg"
              />

              {/* Prev / Next Modal Buttons */}
              {activeLightboxProject.screenshots && activeLightboxProject.screenshots.length > 1 && (
                <>
                  <button
                    onClick={() => {
                      const total = activeLightboxProject.screenshots!.length;
                      setLightbox((prev) =>
                        prev ? { ...prev, imageIndex: (prev.imageIndex - 1 + total) % total } : null
                      );
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-950/80 hover:bg-primary-500 text-white flex items-center justify-center transition-all shadow-xl"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={() => {
                      const total = activeLightboxProject.screenshots!.length;
                      setLightbox((prev) =>
                        prev ? { ...prev, imageIndex: (prev.imageIndex + 1) % total } : null
                      );
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-950/80 hover:bg-primary-500 text-white flex items-center justify-center transition-all shadow-xl"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Modal Footer Thumbnails */}
            {activeLightboxProject.screenshots && activeLightboxProject.screenshots.length > 1 && (
              <div className="flex items-center justify-center gap-2 p-3 bg-slate-950 border-t border-white/10 overflow-x-auto">
                {activeLightboxProject.screenshots.map((shot, idx) => (
                  <button
                    key={idx}
                    onClick={() => setLightbox({ ...lightbox, imageIndex: idx })}
                    className={`relative w-20 h-12 rounded overflow-hidden border transition-all ${
                      idx === lightbox.imageIndex
                        ? 'border-primary-400 ring-2 ring-primary-400/50 scale-105 opacity-100'
                        : 'border-white/10 opacity-50 hover:opacity-90'
                    }`}
                  >
                    <img
                      src={getAssetUrl(shot.url)}
                      alt={shot.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
