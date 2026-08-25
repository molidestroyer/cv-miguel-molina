import { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import ProfileSection from './components/ProfileSection';
import ExperienceSection from './components/ExperienceSection';
import RecommendationsSection from './components/RecommendationsSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import PrintableCV from './components/PrintableCV';
import { cvData } from './data/cvData';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter data based on search query
  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) {
      return cvData;
    }

    const query = searchQuery.toLowerCase();
    
    return {
      ...cvData,
      experience: cvData.experience.filter(exp => 
        exp.company.toLowerCase().includes(query) ||
        exp.position.toLowerCase().includes(query) ||
        exp.description.toLowerCase().includes(query) ||
        exp.technologies.some(tech => tech.toLowerCase().includes(query)) ||
        exp.achievements.some(ach => ach.toLowerCase().includes(query))
      ),
      education: cvData.education.filter(edu =>
        edu.institution.toLowerCase().includes(query) ||
        edu.degree.toLowerCase().includes(query) ||
        edu.field.toLowerCase().includes(query)
      ),
      skills: cvData.skills.filter(skill =>
        skill.name.toLowerCase().includes(query) ||
        skill.category.toLowerCase().includes(query)
      ),
      projects: cvData.projects.filter(proj =>
        proj.name.toLowerCase().includes(query) ||
        proj.description.toLowerCase().includes(query) ||
        proj.technologies.some(tech => tech.toLowerCase().includes(query))
      ),
      certifications: cvData.certifications.filter(cert =>
        cert.name.toLowerCase().includes(query) ||
        cert.issuer.toLowerCase().includes(query)
      )
    };
  }, [searchQuery]);

  const heroStats = useMemo(() => {
    const startYears = cvData.experience.map((exp) => parseInt(exp.startDate.split('-')[0], 10));
    const yearsExperience = new Date().getFullYear() - Math.min(...startYears);
    const companies = new Set(cvData.experience.map((exp) => exp.company)).size;

    return [
      { label: 'Years Experience', value: `${yearsExperience}+` },
      { label: 'Companies', value: `${companies}` },
      { label: 'Projects Delivered', value: `${cvData.projects.length}+` },
      { label: 'Core Skills', value: `${cvData.skills.length}+` },
    ];
  }, []);

  return (
    <>
      {/* Print / PDF version — hidden on screen, replaces the site on paper */}
      <PrintableCV data={cvData} />

      <div className="screen-only min-h-screen bg-ink-950">
      <Navbar onSearch={setSearchQuery} />

      <ProfileSection
        name={cvData.profile.name}
        title={cvData.profile.title}
        summary={cvData.profile.summary}
        contact={cvData.profile.contact}
        stats={heroStats}
      />

      {filteredData.experience.length > 0 && (
        <ExperienceSection experiences={filteredData.experience} />
      )}

      {!searchQuery.trim() && <RecommendationsSection recommendations={cvData.recommendations} />}

      {filteredData.education.length > 0 && (
        <EducationSection education={filteredData.education} />
      )}

      {filteredData.skills.length > 0 && (
        <SkillsSection skills={filteredData.skills} />
      )}

      {filteredData.projects.length > 0 && (
        <ProjectsSection projects={filteredData.projects} />
      )}

      <CertificationsSection 
        certifications={filteredData.certifications}
        languages={cvData.languages}
      />

      {/* Footer */}
      <footer className="bg-ink-950 border-t border-white/10 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {cvData.profile.name}. Built with React, TypeScript, Tailwind CSS &amp; Framer Motion.
          </p>
        </div>
      </footer>
      </div>
    </>
  );
}

export default App;
