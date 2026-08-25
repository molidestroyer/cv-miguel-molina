import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, ArrowDown, Download } from 'lucide-react';
import { ContactInfo } from '../types/cv';
import { downloadCvPdf } from '../utils/printCV';

interface ProfileSectionProps {
  name: string;
  title: string;
  summary: string;
  contact: ContactInfo;
  stats: { label: string; value: string }[];
}

export default function ProfileSection({ name, title, summary, contact, stats }: ProfileSectionProps) {
  return (
    <section
      id="profile"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-ink-950"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-glow" />
      <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black,transparent)]" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-accent-500/25 rounded-full blur-3xl animate-blob" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-sky-400/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '6s' }} />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 flex justify-center"
          >
            <div className="relative animate-float">
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-primary-400 via-sky-300 to-accent-500 blur-md opacity-70" />
              <div className="relative w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden shadow-2xl border-4 border-ink-950">
                <img
                  src="/cv-miguel-molina/profile.jpg"
                  alt={name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.className =
                        'relative w-36 h-36 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center text-white text-5xl font-display font-bold shadow-2xl border-4 border-ink-950';
                      target.parentElement.textContent = name.split(' ').map((n) => n[0]).join('');
                    }
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-display font-extrabold gradient-text mb-4 tracking-tight"
          >
            {name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-slate-200 font-semibold mb-6"
          >
            {title}
          </motion.p>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-base md:text-lg text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            {summary}
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card px-6 py-4 min-w-[120px]">
                <div className="text-2xl md:text-3xl font-display font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-slate-400 uppercase tracking-wide mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 text-slate-300 hover:text-primary-300 transition-colors"
            >
              <Mail size={18} />
              <span className="text-sm">{contact.email}</span>
            </a>
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center gap-2 text-slate-300 hover:text-primary-300 transition-colors"
            >
              <Phone size={18} />
              <span className="text-sm">{contact.phone}</span>
            </a>
            <div className="flex items-center gap-2 text-slate-300">
              <MapPin size={18} />
              <span className="text-sm">{contact.location}</span>
            </div>
          </motion.div>

          {/* Download PDF */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center mb-8"
          >
            <button
              onClick={downloadCvPdf}
              className="group flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-400 hover:to-accent-400 shadow-glow hover:shadow-glow-accent transition-all"
            >
              <Download size={18} className="transition-transform group-hover:translate-y-0.5" />
              <span>Download PDF</span>
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center gap-4"
          >
            {contact.linkedin && (
              <a
                href={`https://${contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card text-primary-300 hover:text-white hover:shadow-glow hover:border-primary-400/50 transition-all"
              >
                <Linkedin size={22} />
              </a>
            )}
            {contact.github && (
              <a
                href={`https://${contact.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card text-primary-300 hover:text-white hover:shadow-glow hover:border-primary-400/50 transition-all"
              >
                <Github size={22} />
              </a>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16 flex justify-center"
          >
            <ArrowDown className="text-slate-500 animate-bounce" size={22} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
