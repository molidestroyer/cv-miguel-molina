import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Education, Language } from '../types/cv';
import { translations } from '../data/translations';
import Reveal from './Reveal';

interface EducationSectionProps {
  education: Education[];
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

export default function EducationSection({ education, language = 'en' }: EducationSectionProps) {
  const t = translations[language].education;

  return (
    <section id="education" className="relative py-24 bg-ink-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <span className="section-eyebrow">{t.eyebrow}</span>
          <h2 className="section-title">
            {t.title} <span className="gradient-text">{t.titleHighlight}</span>
          </h2>
          <p className="text-lg text-slate-400">{t.subtitle}</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {education.map((edu, i) => (
            <Reveal key={edu.id} delay={Math.min(i, 5) * 0.06}>
              <div className="glass-card p-4 sm:p-6 h-full hover:border-primary-400/40 hover:shadow-glow transition-all duration-300">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2.5 sm:p-3 rounded-lg bg-primary-500/10 text-primary-300 shrink-0">
                    <GraduationCap size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-1 leading-snug">{edu.degree}</h3>
                    <p className="text-sm sm:text-base gradient-text font-semibold mb-2">{edu.field}</p>
                    <p className="text-slate-300 text-sm font-medium mb-3">{edu.institution}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-3">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        <span>
                          {formatDate(edu.startDate, language)} - {formatDate(edu.endDate, language)}
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
