import { Quote, Linkedin } from 'lucide-react';
import { Recommendation, Language } from '../types/cv';
import { translations } from '../data/translations';
import Reveal from './Reveal';

interface RecommendationsSectionProps {
  recommendations: Recommendation[];
  language?: Language;
}

export default function RecommendationsSection({ recommendations, language = 'en' }: RecommendationsSectionProps) {
  if (recommendations.length === 0) return null;

  const t = translations[language].recommendations;

  return (
    <section id="recommendations" className="relative py-24 bg-ink-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <span className="section-eyebrow">{t.eyebrow}</span>
          <h2 className="section-title">
            {t.title} <span className="gradient-text">{t.titleHighlight}</span>
          </h2>
          <p className="text-lg text-slate-400">{t.subtitle}</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommendations.map((rec, i) => (
            <Reveal key={rec.id} delay={i * 0.08}>
              <div className="relative glass-card p-5 sm:p-8 h-full hover:border-primary-400/40 hover:shadow-glow transition-all duration-300">
                <Quote className="absolute top-5 right-5 sm:top-6 sm:right-6 text-primary-500/20 w-8 h-8 sm:w-12 sm:h-12" />
                <p className="relative text-slate-300 leading-relaxed mb-6 italic text-sm sm:text-base">"{rec.text}"</p>
                <div className="relative flex items-center justify-between gap-3 pt-4 border-t border-white/10">
                  <div>
                    {rec.linkedinUrl ? (
                      <a
                        href={rec.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-white hover:text-primary-400 transition-colors"
                      >
                        {rec.name}
                      </a>
                    ) : (
                      <p className="font-semibold text-white">{rec.name}</p>
                    )}
                    <p className="text-sm text-slate-400">{rec.relationship}</p>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-slate-500 flex-shrink-0">
                    <Linkedin size={14} />
                    {rec.source}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
