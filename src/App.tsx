import { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import ProfileSection from './components/ProfileSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onSearch={setSearchQuery} />
      
      <ProfileSection
        name={cvData.profile.name}
        title={cvData.profile.title}
        summary={cvData.profile.summary}
        contact={cvData.profile.contact}
      />

      {filteredData.experience.length > 0 && (
        <ExperienceSection experiences={filteredData.experience} />
      )}

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
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} {cvData.profile.name}. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
