import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { Experience } from '../types/cv';

interface ExperienceSectionProps {
  experiences: Experience[];
}

const formatDate = (dateString: string) => {
  const [year, month] = dateString.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
};

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-lg text-gray-600">My career journey and key accomplishments</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary-600 border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                        <Briefcase className="text-primary-600 flex-shrink-0 ml-2" size={20} />
                      </div>
                      <p className="text-lg font-semibold text-primary-600 mb-2">{exp.company}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>
                            {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-4">{exp.description}</p>

                    {/* Achievements */}
                    {exp.achievements.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-gray-700 flex items-start">
                              <span className="text-primary-600 mr-2">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
