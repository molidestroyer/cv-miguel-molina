import { Award, ExternalLink } from 'lucide-react';
import { Certification } from '../types/cv';
import Reveal from './Reveal';

interface CertificationsSectionProps {
  certifications: Certification[];
  languages: { language: string; proficiency: string }[];
}

const formatDate = (dateString: string) => {
  const [year, month] = dateString.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
};

export default function CertificationsSection({ certifications, languages }: CertificationsSectionProps) {
  return (
    <section id="certifications" className="relative py-24 bg-ink-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <span className="section-eyebrow">Credentials</span>
          <h2 className="section-title">Certifications &amp; Languages</h2>
          <p className="text-lg text-slate-400">Professional certifications and language proficiencies</p>
        </Reveal>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-xl font-display font-bold text-white mb-6">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, i) => (
              <Reveal key={cert.id} delay={Math.min(i, 6) * 0.05}>
                <div className="glass-card p-6 h-full hover:border-primary-400/40 hover:shadow-glow transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary-500 to-accent-600 shadow-glow">
                      <Award className="text-white" size={22} />
                    </div>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-primary-300 hover:bg-white/10 rounded-lg transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                  <h4 className="font-bold text-white mb-2">{cert.name}</h4>
                  <p className="text-sm text-slate-300 mb-2">{cert.issuer}</p>
                  <p className="text-xs text-slate-500">{formatDate(cert.date)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <h3 className="text-xl font-display font-bold text-white mb-6">Languages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {languages.map((lang, i) => (
              <Reveal key={lang.language} delay={i * 0.05}>
                <div className="glass-card p-6 text-center hover:border-primary-400/40 transition-all duration-300">
                  <h4 className="text-lg font-display font-bold text-white mb-2">{lang.language}</h4>
                  <p className="gradient-text font-semibold text-sm">{lang.proficiency}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
