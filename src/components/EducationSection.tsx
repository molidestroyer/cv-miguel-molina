import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Education } from '../types/cv';
import Reveal from './Reveal';

interface EducationSectionProps {
  education: Education[];
}

const formatDate = (dateString: string) => {
  const [year, month] = dateString.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
};

export default function EducationSection({ education }: EducationSectionProps) {
  return (
    <section id="education" className="relative py-24 bg-ink-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <span className="section-eyebrow">Foundations</span>
          <h2 className="section-title">Education</h2>
          <p className="text-lg text-slate-400">Academic background and qualifications</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <Reveal key={edu.id} delay={Math.min(i, 5) * 0.06}>
              <div className="glass-card p-6 h-full hover:border-primary-400/40 hover:shadow-glow transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary-500/10 text-primary-300 flex-shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-bold text-white mb-1">{edu.degree}</h3>
                    <p className="text-base gradient-text font-semibold mb-3">{edu.field}</p>
                    <p className="text-slate-300 font-medium mb-3">{edu.institution}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-3">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        <span>
                          {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    {edu.description && (
                      <p className="text-sm text-slate-500 italic">{edu.description}</p>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
