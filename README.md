# Personal Website

A clean, modern personal academic profile website template built with Next.js.

## Features

- **Two-column layout**: Profile picture and links on the left, content on the right
- **Dark theme**: Black background with white text
- **Responsive design**: Works on mobile and desktop
- **Easy to customize**: Simple template structure

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Generate Resume PDF

To generate a PDF version of your resume from the JSON data files:

```bash
npm run generate-resume
```

This will create a `resume.pdf` file in the `public/` folder.

## Customization

1. **Add your profile picture**: Place your image at `public/profile.jpg`
2. **Update your name**: Change "Jordan Chen" in `app/page.tsx` and `app/layout.tsx`
3. **Update contact info**: Replace the email and links with your actual information
4. **Write your bio**: Customize the "About Me" section with your background and research
5. **Add publications**: Replace the example publication with your own work
6. **Update links**: Replace the `#` placeholders with your actual URLs for CV, GitHub, LinkedIn, etc.
7. **Optional sections**: Remove the "Research Opportunities" section if not applicable

## Project Structure

- `app/page.tsx` - Main page component (customize content here)
- `app/layout.tsx` - Root layout (update title and metadata)
- `app/globals.css` - Global styles with Tailwind CSS
- `data/roles.json` - Work experience data
- `data/projects.json` - Projects data
- `data/publications.json` - Publications data
- `data/skills.json` - Skills data
- `scripts/generate-resume.js` - Script to generate PDF resume
- `public/` - Static assets (add your images here)

## Building for Production

```bash
npm run build
npm start
```
