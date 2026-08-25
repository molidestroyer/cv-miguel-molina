import { Mail, MapPin, Linkedin, Github, Phone } from 'lucide-react';
import { CVData } from '../types/cv';

interface PrintableCVProps {
  data: CVData;
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function formatDate(value: string) {
  if (!value) return '';
  const [year, month] = value.split('-');
  const monthIndex = parseInt(month, 10) - 1;
  return MONTHS[monthIndex] ? `${MONTHS[monthIndex]} ${year}` : year;
}

function formatRange(startDate: string, endDate: string, current?: boolean) {
  return `${formatDate(startDate)} — ${current ? 'Present' : formatDate(endDate)}`;
}

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-[11pt] font-display font-bold uppercase tracking-[0.14em] text-[#0369a1] border-b border-[#0369a1]/40 pb-1 mb-3">
      {title}
    </h2>
  );
}

export default function PrintableCV({ data }: PrintableCVProps) {
  const { profile, experience, education, skills, projects, certifications, recommendations, languages } = data;

  const skillsByCategory = skills.reduce<Record<string, string[]>>((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill.name);
    return acc;
  }, {});

  return (
    <div className="print-only cv-pdf font-sans text-[9pt] leading-[1.42] text-slate-800">
      {/* Header */}
      <header className="print-avoid-break border-b-2 border-[#0369a1] pb-3 mb-4">
        <h1 className="text-[22pt] font-display font-extrabold tracking-tight text-slate-900 leading-none">
          {profile.name}
        </h1>
        <p className="text-[11pt] font-semibold text-[#0369a1] mt-1">{profile.title}</p>

        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-[8.5pt] text-slate-600">
          <span className="inline-flex items-center gap-1">
            <Mail size={10} /> {profile.contact.email}
          </span>
          {profile.contact.phone && (
            <span className="inline-flex items-center gap-1">
              <Phone size={10} /> {profile.contact.phone}
            </span>
          )}
          <span className="inline-flex items-center gap-1">
            <MapPin size={10} /> {profile.contact.location}
          </span>
          {profile.contact.linkedin && (
            <span className="inline-flex items-center gap-1">
              <Linkedin size={10} /> {profile.contact.linkedin}
            </span>
          )}
          {profile.contact.github && (
            <span className="inline-flex items-center gap-1">
              <Github size={10} /> {profile.contact.github}
            </span>
          )}
        </div>
      </header>

      {/* Summary */}
      <section className="print-avoid-break mb-4">
        <SectionTitle title="Profile" />
        <p className="text-justify text-slate-700">{profile.summary}</p>
      </section>

      {/* Experience */}
      <section className="mb-4">
        <SectionTitle title="Professional Experience" />
        <div className="space-y-3">
          {experience.map((exp) => (
            <article key={exp.id} className="print-avoid-break">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-[10pt] font-semibold text-slate-900">
                  {exp.position} <span className="font-normal text-slate-600">· {exp.company}</span>
                </h3>
                <span className="shrink-0 text-[8pt] font-medium text-slate-500 whitespace-nowrap">
                  {formatRange(exp.startDate, exp.endDate, exp.current)}
                </span>
              </div>
              <p className="text-[8pt] italic text-slate-500 mb-1">{exp.location}</p>
              <p className="text-slate-700">{exp.description}</p>

              {exp.achievements.length > 0 && (
                <ul className="mt-1 ml-4 list-disc space-y-0.5 text-slate-700 marker:text-[#0369a1]">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              )}

              {exp.technologies.length > 0 && (
                <p className="mt-1 text-[8pt] text-slate-600">
                  <span className="font-semibold text-slate-700">Tech:</span> {exp.technologies.join(' · ')}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-4 print-avoid-break">
        <SectionTitle title="Skills" />
        <div className="space-y-1">
          {Object.entries(skillsByCategory).map(([category, names]) => (
            <p key={category}>
              <span className="font-semibold text-slate-900">{category}: </span>
              <span className="text-slate-700">{names.join(' · ')}</span>
            </p>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-4">
        <SectionTitle title="Education" />
        <div className="space-y-2">
          {education.map((edu) => (
            <article key={edu.id} className="print-avoid-break">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-[9.5pt] font-semibold text-slate-900">
                  {edu.degree}
                  {edu.field ? ` — ${edu.field}` : ''}
                </h3>
                <span className="shrink-0 text-[8pt] font-medium text-slate-500 whitespace-nowrap">
                  {formatRange(edu.startDate, edu.endDate)}
                </span>
              </div>
              <p className="text-[8.5pt] text-slate-600">
                {edu.institution}
                {edu.location ? ` · ${edu.location}` : ''}
              </p>
              {edu.description && <p className="text-slate-700">{edu.description}</p>}
            </article>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-4">
        <SectionTitle title="Projects" />
        <div className="space-y-2">
          {projects.map((project) => (
            <article key={project.id} className="print-avoid-break">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-[9.5pt] font-semibold text-slate-900">{project.name}</h3>
                <span className="shrink-0 text-[8pt] font-medium text-slate-500 whitespace-nowrap">
                  {project.date}
                </span>
              </div>
              <p className="text-slate-700">{project.description}</p>
              {project.highlights.length > 0 && (
                <ul className="mt-0.5 ml-4 list-disc space-y-0.5 text-slate-700 marker:text-[#0369a1]">
                  {project.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              )}
              {project.technologies.length > 0 && (
                <p className="mt-0.5 text-[8pt] text-slate-600">
                  <span className="font-semibold text-slate-700">Tech:</span> {project.technologies.join(' · ')}
                </p>
              )}
              {project.link && <p className="text-[8pt] text-[#0369a1]">{project.link}</p>}
            </article>
          ))}
        </div>
      </section>

      {/* Certifications + Languages */}
      <section className="mb-4 print-avoid-break">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <SectionTitle title="Certifications" />
            <ul className="space-y-1">
              {certifications.map((cert) => (
                <li key={cert.id}>
                  <span className="font-semibold text-slate-900">{cert.name}</span>
                  <span className="text-slate-600">
                    {' — '}
                    {cert.issuer}
                    {cert.date ? ` (${cert.date})` : ''}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionTitle title="Languages" />
            <ul className="space-y-1">
              {languages.map((lang) => (
                <li key={lang.language}>
                  <span className="font-semibold text-slate-900">{lang.language}</span>
                  <span className="text-slate-600">{` — ${lang.proficiency}`}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      {recommendations.length > 0 && (
        <section className="print-avoid-break">
          <SectionTitle title="Recommendations" />
          <div className="space-y-2">
            {recommendations.map((rec) => (
              <blockquote key={rec.id} className="print-avoid-break border-l-2 border-[#0369a1]/40 pl-3">
                <p className="italic text-slate-700">&ldquo;{rec.text}&rdquo;</p>
                <footer className="mt-0.5 text-[8pt] text-slate-500">
                  {`— ${rec.name}, ${rec.relationship} (${rec.source})`}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
