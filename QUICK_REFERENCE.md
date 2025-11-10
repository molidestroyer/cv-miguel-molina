# Quick Reference Guide

## 🚀 Common Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## 📝 Quick Edits

### Update Contact Info
**File**: `src/data/cvData.ts`
```typescript
contact: {
  email: "your.email@example.com",
  phone: "+XX XXX XXX XXX",
  location: "Your City, Country",
}
```

### Add New Experience
**File**: `src/data/cvData.ts`
```typescript
experience: [
  {
    id: "exp-new",
    company: "Company Name",
    position: "Job Title",
    location: "City, Country",
    startDate: "2023-01",
    endDate: "2024-06",
    current: false,
    description: "Role description",
    achievements: ["Achievement 1", "Achievement 2"],
    technologies: ["Tech1", "Tech2"]
  }
]
```

### Add New Skill
**File**: `src/data/cvData.ts`
```typescript
skills: [
  {
    name: "New Skill",
    category: "Category Name",
    level: 85  // 1-100
  }
]
```

### Change Colors
**File**: `tailwind.config.js`
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#YOUR_COLOR',
        600: '#YOUR_COLOR',
      }
    }
  }
}
```

## 🔍 File Locations

| What to Edit | File Location |
|--------------|---------------|
| CV Data | `src/data/cvData.ts` |
| Profile Info | `src/data/cvData.ts` → profile |
| Experience | `src/data/cvData.ts` → experience |
| Skills | `src/data/cvData.ts` → skills |
| Projects | `src/data/cvData.ts` → projects |
| Colors | `tailwind.config.js` |
| Site Title | `index.html` |
| Deployment Config | `vite.config.ts` |

## 🎨 Color Classes

```css
/* Primary Colors */
bg-primary-50    /* Lightest */
bg-primary-100
bg-primary-200
bg-primary-300
bg-primary-400
bg-primary-500   /* Base */
bg-primary-600   /* Darker */
bg-primary-700
bg-primary-800
bg-primary-900   /* Darkest */

/* Text Colors */
text-primary-600
text-gray-900
text-gray-700
text-gray-600
```

## 📐 Responsive Breakpoints

```css
/* Mobile First */
default         /* < 640px */
sm:            /* ≥ 640px */
md:            /* ≥ 768px */
lg:            /* ≥ 1024px */
xl:            /* ≥ 1280px */

/* Example */
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

## 🐛 Troubleshooting

### Issue: Blank page after deployment
**Solution**: Check `vite.config.ts` → base path matches repo name

### Issue: Build fails
**Solution**: 
```bash
rm -rf node_modules
npm install
npm run build
```

### Issue: Styles not updating
**Solution**:
```bash
# Clear cache
npm run dev -- --force
```

### Issue: Port already in use
**Solution**: Vite will auto-select next available port

## 🔗 Useful Links

- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Docs](https://vitejs.dev)
- [Recharts Docs](https://recharts.org)

## ⌨️ VS Code Extensions (Recommended)

- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- ESLint
- Prettier
- TypeScript Vue Plugin (Volar)

## 📦 Package Scripts

```json
{
  "dev": "vite",                    // Start dev server
  "build": "tsc && vite build",     // Build for production
  "preview": "vite preview",        // Preview prod build
  "predeploy": "npm run build",     // Pre-deploy build
  "deploy": "gh-pages -d dist"      // Deploy to GitHub Pages
}
```

## 🎯 Git Commands

```bash
# Initial setup
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin URL
git push -u origin main

# Regular updates
git add .
git commit -m "Update CV"
git push

# Create version tag
git tag -a v1.0 -m "Version 1.0"
git push origin v1.0
```

## 📊 Data Validation

All data is type-checked. Required fields:
- **Experience**: id, company, position, location, startDate, endDate, current
- **Skill**: name, category, level
- **Project**: id, name, description, technologies, date
- **Education**: id, institution, degree, field, location, startDate, endDate

## 🌐 Deployment URLs

- **GitHub Pages**: `https://USERNAME.github.io/REPO-NAME/`
- **Custom Domain**: Configure in repo settings → Pages

## 📱 Testing Checklist

- [ ] Desktop (1920x1080)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)
- [ ] Navigation works
- [ ] Search functions properly
- [ ] All links clickable
- [ ] Charts display correctly
- [ ] Images load
- [ ] No console errors

## 💾 Backup Strategy

```bash
# Tag important versions
git tag -a v1.0 -m "Stable version"
git push origin --tags

# Export data
cp src/data/cvData.ts backup-$(date +%Y%m%d).ts
```

## 🔐 Environment Variables (if needed)

Create `.env.local`:
```
VITE_API_KEY=your_key
VITE_ANALYTICS_ID=your_id
```

Access in code:
```typescript
const apiKey = import.meta.env.VITE_API_KEY;
```

---

**Keep this guide handy for quick reference!**
