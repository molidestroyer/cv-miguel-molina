import { useState, useMemo, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProfileSection from './components/ProfileSection';
import ExperienceSection from './components/ExperienceSection';
import RecommendationsSection from './components/RecommendationsSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import PrintableCV from './components/PrintableCV';
import { cvDataEn, cvDataEs } from './data/cvData';
import { Language } from './types/cv';
import { translations } from './data/translations';

function getInitialLanguage(): Language {
  const saved = localStorage.getItem('cv_lang') as Language | null;
  if (saved === 'en' || saved === 'es') return saved;
  const browserLang = navigator.language?.toLowerCase() || '';
  if (browserLang.startsWith('es')) return 'es';
  return 'en';
}

function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const [searchQuery, setSearchQuery] = useState('');

  const currentCvData = language === 'es' ? cvDataEs : cvDataEn;
  const t = translations[language];

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
    localStorage.setItem('cv_lang', newLang);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // Filter data based on search query
  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) {
      return currentCvData;
    }

    const query = searchQuery.toLowerCase();
    
    return {
      ...currentCvData,
      experience: currentCvData.experience.filter(exp => 
        exp.company.toLowerCase().includes(query) ||
        exp.position.toLowerCase().includes(query) ||
        exp.description.toLowerCase().includes(query) ||
        exp.technologies.some(tech => tech.toLowerCase().includes(query)) ||
        exp.achievements.some(ach => ach.toLowerCase().includes(query))
      ),
      education: currentCvData.education.filter(edu =>
        edu.institution.toLowerCase().includes(query) ||
        edu.degree.toLowerCase().includes(query) ||
        edu.field.toLowerCase().includes(query)
      ),
      skills: currentCvData.skills.filter(skill =>
        skill.name.toLowerCase().includes(query) ||
        skill.category.toLowerCase().includes(query)
      ),
      projects: currentCvData.projects.filter(proj =>
        proj.name.toLowerCase().includes(query) ||
        proj.description.toLowerCase().includes(query) ||
        proj.tagline?.toLowerCase().includes(query) ||
        proj.technologies.some(tech => tech.toLowerCase().includes(query)) ||
        proj.highlights.some(h => h.toLowerCase().includes(query))
      ),
      certifications: currentCvData.certifications.filter(cert =>
        cert.name.toLowerCase().includes(query) ||
        cert.issuer.toLowerCase().includes(query)
      )
    };
  }, [searchQuery, currentCvData]);

  const heroStats = useMemo(() => {
    const startYears = currentCvData.experience.map((exp) => parseInt(exp.startDate.split('-')[0], 10));
    const yearsExperience = new Date().getFullYear() - Math.min(...startYears);
    const companies = new Set(currentCvData.experience.map((exp) => exp.company)).size;

    return [
      { label: t.profile.stats.yearsExperience, value: `${yearsExperience}+` },
      { label: t.profile.stats.companies, value: `${companies}` },
      { label: t.profile.stats.projectsDelivered, value: `${currentCvData.projects.length}+` },
      { label: t.profile.stats.coreSkills, value: `${currentCvData.skills.length}+` },
    ];
  }, [currentCvData, t]);

  return (
    <>
      {/* Print / PDF version — hidden on screen, replaces the site on paper */}
      <PrintableCV data={currentCvData} lang={language} />

      <div className="screen-only min-h-screen bg-ink-950">
        <Navbar
          onSearch={setSearchQuery}
          language={language}
          onLanguageChange={handleLanguageChange}
        />

        <ProfileSection
          name={currentCvData.profile.name}
          title={currentCvData.profile.title}
          summary={currentCvData.profile.summary}
          contact={currentCvData.profile.contact}
          stats={heroStats}
          language={language}
        />

        {filteredData.experience.length > 0 && (
          <ExperienceSection
            experiences={filteredData.experience}
            language={language}
          />
        )}

        {!searchQuery.trim() && (
          <RecommendationsSection
            recommendations={currentCvData.recommendations}
            language={language}
          />
        )}

        {filteredData.education.length > 0 && (
          <EducationSection
            education={filteredData.education}
            language={language}
          />
        )}

        {filteredData.skills.length > 0 && (
          <SkillsSection
            skills={filteredData.skills}
            language={language}
          />
        )}

        {filteredData.projects.length > 0 && (
          <ProjectsSection
            projects={filteredData.projects}
            language={language}
          />
        )}

        <CertificationsSection 
          certifications={filteredData.certifications}
          languages={currentCvData.languages}
          language={language}
        />

        {/* Footer */}
        <footer className="bg-ink-950 border-t border-white/10 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} {currentCvData.profile.name}. {t.footer.copyright}
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;

