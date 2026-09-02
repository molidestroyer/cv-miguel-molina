import { Quote, Linkedin } from 'lucide-react';
import { Recommendation } from '../types/cv';
import Reveal from './Reveal';

interface RecommendationsSectionProps {
  recommendations: Recommendation[];
}

export default function RecommendationsSection({ recommendations }: RecommendationsSectionProps) {
  if (recommendations.length === 0) return null;

  return (
    <section id="recommendations" className="relative py-24 bg-ink-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <span className="section-eyebrow">What people say</span>
          <h2 className="section-title">Recommendations</h2>
          <p className="text-lg text-slate-400">Straight from LinkedIn colleagues and managers</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommendations.map((rec, i) => (
            <Reveal key={rec.id} delay={i * 0.08}>
              <div className="relative glass-card p-8 h-full hover:border-primary-400/40 hover:shadow-glow transition-all duration-300">
                <Quote className="absolute top-6 right-6 text-primary-500/20" size={48} />
                <p className="relative text-slate-300 leading-relaxed mb-6 italic">"{rec.text}"</p>
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
