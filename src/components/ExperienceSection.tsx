import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { Experience } from '../types/cv';
import { getCompanyLogoUrl, COMPANY_LOGO_OPAQUE } from '../data/companyLogos';
import Reveal from './Reveal';

interface ExperienceSectionProps {
  experiences: Experience[];
}

const formatDate = (dateString: string) => {
  const [year, month] = dateString.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
};

function CompanyBadge({ company }: { company: string }) {
  const logoUrl = getCompanyLogoUrl(company);
  const [errored, setErrored] = useState(false);

  if (logoUrl && !errored) {
    const opaque = COMPANY_LOGO_OPAQUE.has(company);
    return (
      <span
        className={`rounded-lg flex-shrink-0 w-9 h-9 flex items-center justify-center overflow-hidden ${
          opaque ? 'border border-white/10' : 'p-1.5 bg-white/90'
        }`}
      >
        <img
          src={logoUrl}
          alt={`${company} logo`}
          className="w-full h-full object-cover"
          onError={() => setErrored(true)}
        />
      </span>
    );
  }

  return (
    <span className="p-2 rounded-lg bg-primary-500/10 text-primary-300 flex-shrink-0">
      <Briefcase size={18} />
    </span>
  );
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="relative py-24 bg-ink-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <span className="section-eyebrow">Career journey</span>
          <h2 className="section-title">Professional Experience</h2>
          <p className="text-lg text-slate-400">Leading teams, shipping software, keeping the lights on</p>
        </Reveal>

        <div className="relative pl-8 md:pl-12">
          {/* Timeline Line */}
          <div className="absolute left-[11px] md:left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-primary-400/60 via-accent-500/40 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: Math.min(index, 4) * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Timeline Dot */}
                <span className="absolute -left-8 md:-left-12 top-6 w-[22px] h-[22px] rounded-full bg-ink-900 border-2 border-primary-400 flex items-center justify-center">
                  <span className={`w-2 h-2 rounded-full ${exp.current ? 'bg-emerald-400 animate-pulse' : 'bg-primary-400'}`} />
                </span>

                {/* Content Card */}
                <div className="glass-card p-6 hover:border-primary-400/40 hover:shadow-glow transition-all duration-300">
                  <div className="mb-4">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-xl font-display font-bold text-white">{exp.position}</h3>
                      <CompanyBadge company={exp.company} />
                    </div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <p className="text-base font-semibold gradient-text">{exp.company}</p>
                      {exp.current && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide bg-emerald-500/15 text-emerald-300 border border-emerald-400/30">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        <span>
                          {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-4">{exp.description}</p>

                  {exp.achievements.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-2 text-sm uppercase tracking-wide text-slate-400">
                        Key Achievements
                      </h4>
                      <ul className="space-y-1.5">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-slate-300 flex items-start">
                            <span className="text-primary-400 mr-2 mt-0.5">▸</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 border border-white/10 text-slate-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
