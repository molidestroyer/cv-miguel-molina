import { useState } from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types/cv';
import Reveal from './Reveal';

interface SkillsSectionProps {
  skills: Skill[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(skills.map((s) => s.category)))];

  const filteredSkills = selectedCategory === 'all' ? skills : skills.filter((s) => s.category === selectedCategory);

  const groupedSkills = filteredSkills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const chartData = filteredSkills
    .sort((a, b) => b.level - a.level)
    .slice(0, 10)
    .map((skill) => ({ name: skill.name, level: skill.level }));

  return (
    <section id="skills" className="relative py-24 bg-ink-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <span className="section-eyebrow">Toolbox</span>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="text-lg text-slate-400">Technical expertise and proficiency levels</p>
        </Reveal>

        {/* Category Filter */}
        <Reveal delay={0.1} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-all border ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 border-transparent text-white shadow-glow'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category === 'all' ? 'All Skills' : category}
            </button>
          ))}
        </Reveal>

        {/* Skills Chart */}
        <Reveal delay={0.15} className="mb-16">
          <h3 className="text-xl font-display font-bold text-white mb-6 text-center">Top Skills Overview</h3>
          <div className="glass-card p-6">
            <div className="space-y-3">
              {chartData.map((skill, i) => (
                <div key={skill.name} className="flex items-center gap-4">
                  <div className="w-32 text-sm font-medium text-slate-300 text-right flex-shrink-0">{skill.name}</div>
                  <div className="flex-1 bg-white/5 rounded-full h-7 relative overflow-hidden border border-white/5">
                    <motion.div
                      className="h-full rounded-full flex items-center justify-end pr-3 bg-gradient-to-r from-primary-500 to-accent-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <span className="text-white text-xs font-semibold whitespace-nowrap">{skill.level}%</span>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Skills by Category */}
        <div className="space-y-10">
          {Object.entries(groupedSkills).map(([category, categorySkills], gi) => (
            <Reveal key={category} delay={Math.min(gi, 5) * 0.05}>
              <h3 className="text-lg font-display font-bold text-white mb-4">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categorySkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="glass-card p-4 hover:border-primary-400/40 hover:shadow-glow transition-all duration-300"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-white text-sm">{skill.name}</span>
                      <span className="text-xs font-medium text-primary-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        className="h-1.5 rounded-full bg-gradient-to-r from-primary-400 to-accent-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
