import { Award, ExternalLink } from 'lucide-react';
import { Certification } from '../types/cv';

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
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Languages</h2>
          <p className="text-lg text-gray-600">Professional certifications and language proficiencies</p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border border-primary-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary-600 rounded-lg">
                    <Award className="text-white" size={24} />
                  </div>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-primary-600 hover:bg-primary-100 rounded-lg transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{cert.name}</h4>
                <p className="text-sm text-gray-700 mb-2">{cert.issuer}</p>
                <p className="text-xs text-gray-600">{formatDate(cert.date)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Languages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languages.map((lang) => (
              <div
                key={lang.language}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-2">{lang.language}</h4>
                <p className="text-primary-600 font-semibold">{lang.proficiency}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
