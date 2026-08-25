# Miguel Molina - Interactive CV Website

A beautiful, modern, and interactive personal website showcasing my professional CV. Built with React, TypeScript, Tailwind CSS, and Recharts for data visualization.

## 🌟 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Navigation**: Smooth scrolling to different sections
- **Search Functionality**: Filter content across all sections in real-time
- **PDF Export**: One-click download of a print-optimised A4 version of the CV
- **Data Visualization**: Beautiful charts showing skill proficiency levels
- **Timeline View**: Visual timeline of professional experience
- **Modern UI**: Clean, minimal design with smooth animations
- **Type-Safe**: Built with TypeScript for better code quality
- **Easy Customization**: Structured data format makes it easy to update CV information

## 🛠️ Technologies Used

- **React 18**: Modern UI library
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Recharts**: Data visualization library
- **Lucide React**: Beautiful icon library

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/molidestroyer/cv-miguel-molina.git
cd cv-miguel-molina
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🚀 Deployment to GitHub Pages

1. Update the `base` property in `vite.config.ts` to match your repository name:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',
})
```

2. Build and deploy:
```bash
npm run build
npm run deploy
```

Your site will be available at `https://yourusername.github.io/your-repo-name/`

## 📝 Customization

### Update CV Data

Edit the file `src/data/cvData.ts` to update your personal information, experience, education, skills, projects, and certifications.

### Modify Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors here
      },
    },
  },
}
```

### Add/Remove Sections

Modify `src/App.tsx` to add or remove sections from your CV website.

## 📁 Project Structure

```
cv-miguel-molina/
├── src/
│   ├── components/         # React components
│   │   ├── Navbar.tsx
│   │   ├── ProfileSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── CertificationsSection.tsx
│   ├── data/
│   │   └── cvData.ts      # Your CV data
│   ├── types/
│   │   └── cv.ts          # TypeScript interfaces
│   ├── App.tsx            # Main application
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## 🎨 Features Breakdown

### Profile Section
- Hero section with name, title, and professional summary
- Contact information with icons
- Social media links (LinkedIn, GitHub)

### Experience Section
- Timeline view of work history
- Detailed job descriptions and achievements
- Technology tags
- Date and location information

### Education Section
- Academic qualifications
- Institution details
- Dates and locations

### Skills Section
- Interactive bar chart visualization
- Category filtering
- Proficiency levels with progress bars
- Grouped by skill categories

### Projects Section
- Featured projects with descriptions
- Technology stacks
- Key highlights
- External links

### Certifications Section
- Professional certifications
- Issuing organizations
- Dates and verification links
- Language proficiencies

### Search Feature
- Real-time filtering across all sections
- Searches through titles, descriptions, technologies, and more
- Responsive to user input

### PDF Export
- "Download PDF" buttons in the hero section and the navbar (desktop + mobile menu)
- Uses the browser's native print dialog (`Save as PDF`) — no extra dependencies, selectable text, ATS friendly
- `src/components/PrintableCV.tsx` renders a dedicated light A4 layout that is `display: none` on screen and replaces the whole site inside `@media print` (see the print block in `src/index.css`)
- Add `print-avoid-break` to any block that must not be split across pages

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and adapt it for your own CV. If you have suggestions for improvements, please open an issue or submit a pull request.

## 📧 Contact

Miguel Molina
- Email: miguel.molina@example.com
- LinkedIn: [linkedin.com/in/miguelmolina](https://linkedin.com/in/miguelmolina)
- GitHub: [github.com/molidestroyer](https://github.com/molidestroyer)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
