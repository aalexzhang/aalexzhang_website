# Modern Portfolio Website

A modern, responsive portfolio website built with Next.js and Shadcn UI. This portfolio template is designed to showcase your projects, skills, and experience in a clean and professional way.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Modular project cards that are easy to customize
- Sections for introduction, projects, about, and contact
- Customizable social media links and contact information
- Mobile-friendly navigation

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or later)
- [Bun](https://bun.sh/) (optional but recommended)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd modern-portfolio
```

2. Install dependencies:
```bash
bun install
# or
npm install
```

3. Start the development server:
```bash
bun run dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Personal Information

You can customize your personal information in the following files:

- `src/components/HeroSection.tsx` - Update your name and introduction
- `src/components/AboutSection.tsx` - Update your skills, experience, and about text
- `src/components/ContactSection.tsx` - Update your contact information and social media links
- `src/components/Footer.tsx` - Update the footer text and social media links

### Projects

The projects are stored in `src/data/projects.ts`. You can easily add, remove, or modify projects by editing this file. Each project follows this structure:

```typescript
{
  id: "unique-id",
  title: "Project Title",
  description: "Project description goes here",
  imageUrl: "https://example.com/image.jpg",
  tags: ["Tag1", "Tag2", "Tag3"],
  demoUrl: "https://demo-link.com",  // Optional
  githubUrl: "https://github.com/repo"  // Optional
}
```

### Styling

This project uses Tailwind CSS for styling. You can customize the colors, fonts, and other design elements by editing:

- `tailwind.config.js` - For global style configurations
- Individual component files for component-specific styling

## Deployment

You can deploy this portfolio to various platforms:

### Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

### Netlify

You can also deploy to [Netlify](https://www.netlify.com/) by connecting your GitHub repository.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
- [Unsplash](https://unsplash.com/) for the sample images
