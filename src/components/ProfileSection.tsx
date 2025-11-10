import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { ContactInfo } from '../types/cv';

interface ProfileSectionProps {
  name: string;
  title: string;
  summary: string;
  contact: ContactInfo;
}

export default function ProfileSection({ name, title, summary, contact }: ProfileSectionProps) {
  return (
    <section id="profile" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-blue-50 pt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Avatar */}
          <div className="mb-8 flex justify-center">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-5xl font-bold shadow-2xl">
              {name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            {name}
          </h1>
          <p className="text-2xl md:text-3xl text-primary-600 font-semibold mb-6">
            {title}
          </p>

          {/* Summary */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            {summary}
          </p>

          {/* Contact Information */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              <Mail size={20} />
              <span>{contact.email}</span>
            </a>
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              <Phone size={20} />
              <span>{contact.phone}</span>
            </a>
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin size={20} />
              <span>{contact.location}</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {contact.linkedin && (
              <a
                href={`https://${contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary-100 text-primary-600 hover:bg-primary-600 hover:text-white transition-all shadow-md hover:shadow-lg"
              >
                <Linkedin size={24} />
              </a>
            )}
            {contact.github && (
              <a
                href={`https://${contact.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary-100 text-primary-600 hover:bg-primary-600 hover:text-white transition-all shadow-md hover:shadow-lg"
              >
                <Github size={24} />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
