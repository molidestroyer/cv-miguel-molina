import { useState } from 'react';
import { Menu, X, User, Briefcase, GraduationCap, Code, FolderGit2, Award } from 'lucide-react';

interface NavbarProps {
  onSearch: (query: string) => void;
}

export default function Navbar({ onSearch }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'certifications', label: 'Certifications', icon: Award },
  ];

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-primary-600">Miguel Molina</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="flex items-center gap-1 px-3 py-2 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                >
                  <Icon size={16} />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-primary-50"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="mb-3">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="flex items-center gap-2 w-full px-4 py-3 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  >
                    <Icon size={18} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
