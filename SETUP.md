# CV Miguel Molina - Setup Instructions

## Quick Start

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager
- Git

### Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Customizing Your CV

### Step 1: Update Personal Information

Open `src/data/cvData.ts` and modify the data structure with your information:

```typescript
export const cvData: CVData = {
  profile: {
    name: "Your Name",
    title: "Your Job Title",
    summary: "Your professional summary...",
    contact: {
      email: "your.email@example.com",
      phone: "+XX XXX XXX XXX",
      location: "Your City, Country",
      linkedin: "linkedin.com/in/yourprofile",
      github: "github.com/yourusername",
    }
  },
  // ... rest of the data
};
```

### Step 2: Add Your Experience

Update the `experience` array with your work history.

### Step 3: Update Skills

Modify the `skills` array to reflect your technical expertise.

### Step 4: Add Projects

Include your notable projects in the `projects` array.

## Deploying to GitHub Pages

### Option 1: Using npm script

1. Update `vite.config.ts` with your repository name:
   ```typescript
   base: '/your-repository-name/',
   ```

2. Deploy:
   ```bash
   npm run deploy
   ```

### Option 2: Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. The built files will be in the `dist` directory. Deploy these files to your hosting service.

## GitHub Pages Configuration

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "gh-pages" branch
4. Your site will be available at `https://yourusername.github.io/repository-name/`

## Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically use the next available port.

### Build Errors
Make sure all dependencies are installed:
```bash
rm -rf node_modules
npm install
```

### TypeScript Errors
Run the TypeScript compiler to check for errors:
```bash
npx tsc --noEmit
```

## Updating Content

The CV data is stored in `src/data/cvData.ts`. This file follows a specific structure defined in `src/types/cv.ts`. All fields are type-checked, ensuring data consistency.

## Color Customization

To change the color scheme, edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#your-color',
        // ... other shades
      },
    },
  },
}
```

## Support

For issues or questions, please open an issue on the GitHub repository.
