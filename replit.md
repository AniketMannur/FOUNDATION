# Shree Balaji Foundation Website

## Overview

This is a modern, responsive website for the Shree Balaji Foundation, a non-profit organization focused on social impact through education, healthcare, women empowerment, and community development programs. The application is built as a single-page application (SPA) using React with Vite as the build tool, featuring a clean, accessible UI built with shadcn/ui components and Tailwind CSS.

The website serves as the primary digital presence for the foundation, showcasing their programs, impact statistics, gallery of work, and providing contact mechanisms for potential donors, volunteers, and beneficiaries.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR (Hot Module Replacement)
- Single-page application using client-side routing via Wouter

**UI Component System:**
- shadcn/ui component library with Radix UI primitives for accessible, customizable components
- Tailwind CSS for utility-first styling with custom design tokens
- Custom theme system supporting light/dark modes via next-themes
- Design system uses HSL color values with CSS variables for flexible theming

**State Management:**
- TanStack Query (React Query) for server state management and data fetching
- React hooks for local component state
- Query client configured with custom fetch wrapper for API requests

**Routing Strategy:**
- Client-side routing using Wouter (lightweight alternative to React Router)
- Route structure includes: home, about-us, impact, programs, gallery, contact, feedback, dynamic sector pages, and campaign pages
- 404 handling with custom NotFound component

**Animation & Interactions:**
- Framer Motion for declarative animations
- Custom CSS animations defined in index.css (fade-in, scale-in, ken-burns effects)
- Embla Carousel for image galleries and slideshows
- Lucide React for consistent iconography

**Form Handling:**
- React Hook Form with Zod resolvers for form validation
- Google Forms integration for contact and feedback submissions (iframe-less POST requests)
- Custom validation patterns for name, email, and phone number inputs

**Design Patterns:**
- Component composition with reusable UI primitives
- Separation of page components from shared layout components
- Custom hooks for common functionality (use-toast, use-mobile)
- TypeScript interfaces for type safety across components

### External Dependencies

**Google Forms Integration:**
- Contact form submits to Google Forms endpoint for data collection
- Feedback form similarly integrated with Google Forms
- No backend database required for form submissions

**Image Assets:**
- Static images stored in `attached_assets` directory
- Images imported directly in components via Vite's asset handling
- Support for various image formats (PNG, JPEG)

**Font Loading:**
- Google Fonts (Inter, Poppins, Noto Serif Devanagari) loaded via link tags in HTML
- Font families defined as CSS custom properties

**Third-Party UI Libraries:**
- Radix UI primitives for accessible components (dialogs, dropdowns, tooltips, etc.)
- Class Variance Authority (CVA) for variant-based component styling
- CLSX and Tailwind Merge for conditional className management

**Deployment:**
- Configured for Vercel deployment with SPA rewrites
- Build output to `dist` directory
- Static site generation with client-side hydration

**Development Tools:**
- Replit-specific plugins for development environment integration
- PostCSS with Tailwind and Autoprefixer
- TypeScript strict mode enabled for type checking

**Key Architectural Decisions:**

1. **No Backend Server**: The application is purely client-side, relying on Google Forms for data collection rather than implementing a custom backend API. This simplifies deployment and reduces infrastructure costs.

2. **Component-First Design**: Heavy use of composition with shadcn/ui components allows for consistent UI/UX while maintaining flexibility for customization.

3. **TypeScript Throughout**: Strict TypeScript configuration ensures type safety and better developer experience with IntelliSense.

4. **Static Asset Management**: Images and fonts are managed as static assets, with Vite handling optimization and bundling.

5. **Accessibility Focus**: Radix UI primitives provide ARIA-compliant, keyboard-navigable components out of the box.

6. **Mobile-First Responsive Design**: Tailwind's responsive utilities enable mobile-first development with breakpoints for larger screens.