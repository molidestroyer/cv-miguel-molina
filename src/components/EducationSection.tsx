import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Education } from '../types/cv';

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
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-lg text-gray-600">Academic background and qualifications</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 rounded-lg flex-shrink-0">
                  <GraduationCap className="text-primary-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{edu.degree}</h3>
                  <p className="text-lg text-primary-600 font-semibold mb-3">{edu.field}</p>
                  <p className="text-gray-700 font-medium mb-3">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>
                        {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  {edu.description && (
                    <p className="text-sm text-gray-600 italic">{edu.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
