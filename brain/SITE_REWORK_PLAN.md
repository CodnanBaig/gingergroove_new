# Site Rework Plan - Complete UI Migration

## Overview

This document outlines the complete process to rework all pages in the `ggs-nextjs` project to match the new homepage UI design system. The homepage has been successfully migrated with a modern, animation-heavy design using GSAP, Tailwind CSS, and TypeScript.

**Target**: Migrate all existing pages from the old Bootstrap-based design to the new glassmorphism, animation-heavy design system.

---

## Design System Reference

### Color Palette
- **Background**: `#141414` (primary), `#1b1b1b` (surface), `#1f1f1f` (overlay)
- **Primary**: `#ec2021` (red)
- **Accent**: `#83caaf` (teal)
- **Foreground**: `#f5f5dc` (beige)
- **Muted**: `rgba(245, 245, 220, 0.7)`

### Typography
- **Display Font**: Bebas Neue (`--font-bebas`)
- **Body Font**: Roboto (`--font-roboto`)

### Design Patterns
- **Glassmorphism**: `bg-white/5`, `backdrop-blur-xl`, `border border-white/5`
- **Gradients**: `from-[#ec2021] to-[#83caaf]`
- **Shadows**: `shadow-[0_20px_60px_rgba(0,0,0,0.5)]`
- **Border Radius**: `rounded-3xl` (24px), `rounded-[32px]` (32px)
- **Spacing**: Consistent `px-6 sm:px-10 lg:px-16` for containers

### Animation Guidelines
- Use GSAP for all animations
- Respect `prefers-reduced-motion` via `usePrefersReducedMotion` hook
- Scroll-triggered reveals using `useGsapReveal` hook
- Stagger animations for lists/grids
- Smooth transitions: `duration-300`, `ease-out`

---

## Pages to Migrate

### 1. Services Page (`/services`) ✅ **COMPLETED**
**Current State**: Bootstrap grid with ServiceCard components
**Target**: Modern card grid with enhanced animations

**Components Needed**:
- ✅ Enhanced ServiceCard component (glassmorphism style)
- ✅ Section heading with eyebrow text
- ✅ Grid layout with hover effects
- ✅ GSAP scroll reveals

**Content Structure**:
- Main Services: Sound Recording, Music Production, Mixing/Mastering
- Other Services: Session Musicians, Voiceovers, Video Production

**Migration Steps**:
1. ✅ Create `src/data/services.ts` with service data
2. ✅ Create `src/components/sections/ServicesPageSection.tsx`
3. ✅ Create enhanced `src/components/ui/ServiceCard.tsx` (new design)
4. ✅ Update `src/app/services/page.tsx`
5. ✅ Add animations and interactions

**Completed Date**: 2025-11-25
**Files Created**:
- `src/data/services.ts` - Service data with main and other services
- `src/components/ui/ServiceCard.tsx` - Enhanced glassmorphism card with GSAP hover effects
- `src/components/sections/ServicesPageSection.tsx` - Services page section component
- `src/app/services/page.tsx` - Updated services page

**Features Implemented**:
- Glassmorphism design matching homepage
- GSAP scroll-triggered reveals
- Hover animations with scale and shadow effects
- Enhanced ServiceCard with description and features list
- Call and WhatsApp action buttons
- Responsive grid layout
- Proper metadata for SEO

---

### 2. Contact Us Page (`/contact-us`) ✅ **COMPLETED**
**Current State**: Simple form with contact info
**Target**: Modern form with split layout, enhanced UX

**Components Needed**:
- ✅ Enhanced ContactForm component
- ✅ Contact info cards with icons
- ✅ Form validation with visual feedback
- ✅ Success/error states with animations

**Content Structure**:
- Left: Contact information (email, phone, address if available)
- Right: Contact form (name, email, number, message)

**Migration Steps**:
1. ✅ Create `src/components/sections/ContactSection.tsx`
2. ✅ Create `src/components/ui/ContactForm.tsx` (new design)
3. ✅ Create `src/components/ui/ContactInfoCard.tsx`
4. ✅ Update `src/app/contact-us/page.tsx`
5. ✅ Enhance form validation and error handling
6. ✅ Add form submission animations

**Files Created/Updated**:
- `src/data/contact.ts` – Structured contact information and highlights
- `src/components/ui/ContactInfoCard.tsx` – Animated info cards with GSAP
- `src/components/ui/ContactForm.tsx` – Glassmorphism form with validation, status states, and CTA buttons
- `src/components/sections/ContactSection.tsx` – Split layout combining info and form
- `src/app/contact-us/page.tsx` – Page wired to new section with metadata

**Features Implemented**:
- Split layout with SectionHeading and highlights
- Contact info cards linking to mail/phone
- Animated glass form with success/error feedback
- API integration with `/api/contact`
- Responsive design + accessibility improvements

---

### 3. Portfolio Landing Page (`/portfolio`) ✅ **COMPLETED**
**Current State**: Two PageCard components (Artists, Commercial)
**Target**: Enhanced card layout with hover effects and animations

**Components Needed**:
- ✅ Enhanced PortfolioCard component
- ✅ Section heading
- ✅ Hover animations with GSAP
- ✅ Smooth transitions

**Content Structure**:
- Two large cards: Artists Portfolio, Commercial Portfolio

**Migration Steps**:
1. ✅ Create `src/data/portfolio.ts` with portfolio categories
2. ✅ Create `src/components/sections/PortfolioLandingSection.tsx`
3. ✅ Create `src/components/ui/PortfolioCard.tsx` (enhanced)
4. ✅ Update `src/app/portfolio/page.tsx`
5. ✅ Add hover effects and animations

**Files Created/Updated**:
- `src/data/portfolio.ts` – Structured category data with stats and links
- `src/components/ui/PortfolioCard.tsx` – Animated card with hover effects, stats chips, gradient overlays
- `src/components/sections/PortfolioLandingSection.tsx` – Section heading + grid layout
- `src/app/portfolio/page.tsx` – Uses new section with metadata

**Features Implemented**:
- Glassmorphism cards with GSAP hover animation
- Category stats chips and CTA indicator
- Responsive grid layout (1 column mobile, 2 desktop)
- Centralized heading and supporting text

---

### 4. Artist Portfolio Page (`/portfolio/artist-portfolio`) ✅ **COMPLETED**
**Current State**: SpotifyPlayer component
**Target**: Enhanced artist showcase with Spotify integration

**Components Needed**:
- ✅ Enhanced Spotify embed card
- ✅ Artist stats/highlights layout
- ✅ GSAP scroll reveals
- ✅ Loading-safe embed container

**Content Structure**:
- Section heading
- Stats chips
- Highlight cards
- Spotify playlist embed

**Migration Steps**:
1. ✅ Create `src/components/sections/ArtistPortfolioSection.tsx`
2. ✅ Create `src/components/ui/SpotifyEmbed.tsx`
3. ✅ Update `src/app/portfolio/artist-portfolio/page.tsx`
4. ✅ Add animations for cards and embeds

**Files Created/Updated**:
- `src/data/portfolioDetails.ts` – Artist portfolio copy/stats
- `src/components/ui/SpotifyEmbed.tsx` – Glassmorphism embed wrapper
- `src/components/sections/ArtistPortfolioSection.tsx` – Layout + highlights
- `src/app/portfolio/artist-portfolio/page.tsx` – Page entry with metadata

---

### 5. Commercial Portfolio Page (`/portfolio/commercial-portfolio`) ✅ **COMPLETED**
**Current State**: YouTube API integration with video grid
**Target**: Enhanced video grid with better layout and animations

**Components Needed**:
- ✅ Enhanced VideoCard component
- ✅ Loading skeleton states
- ✅ Error handling UI
- (Modal optional) – deferred

**Content Structure**:
- Section heading
- Stats + highlight cards
- YouTube video grid with embeds

**Migration Steps**:
1. ✅ Create `src/components/sections/CommercialPortfolioSection.tsx`
2. ✅ Create `src/components/ui/VideoCard.tsx`
3. ✅ Create `src/hooks/useYouTubePlaylist.ts`
4. ✅ Update `src/app/portfolio/commercial-portfolio/page.tsx`
5. ✅ Add loading skeletons and error messaging

**Files Created/Updated**:
- `src/data/portfolioDetails.ts` – Commercial copy/stats
- `src/components/ui/VideoCard.tsx` – Responsive embed card
- `src/hooks/useYouTubePlaylist.ts` – Client hook with error handling
- `src/components/sections/CommercialPortfolioSection.tsx` – Layout + grid
- `src/app/portfolio/commercial-portfolio/page.tsx` – Page entry with metadata

---

## Component Migration Strategy

### Existing Components to Enhance

#### 1. ServiceCard → Enhanced ServiceCard
**Location**: `src/components/ui/ServiceCard.tsx`

**Changes**:
- Replace Bootstrap card with glassmorphism design
- Add hover animations (scale, shadow, border glow)
- Update button styles to match ActionLink component
- Add GSAP reveal animations
- Improve mobile responsiveness

**Design**:
```tsx
- Glass panel background
- Image with gradient overlay
- Hover: scale(1.05), enhanced shadow, border glow
- Action buttons matching site style
```

#### 2. ContactForm → Enhanced ContactForm
**Location**: `src/components/ui/ContactForm.tsx`

**Changes**:
- Modern input styling with focus states
- Split layout (info left, form right)
- Enhanced validation feedback
- Success/error animations
- Loading states

**Design**:
```tsx
- Glass panel for form container
- Input fields with gradient focus borders
- Contact info cards with icons
- Smooth form submission animations
```

#### 3. PageCard → PortfolioCard
**Location**: `src/components/ui/PortfolioCard.tsx`

**Changes**:
- Enhanced hover effects
- GSAP animations on scroll
- Better image handling
- Typography improvements

**Design**:
```tsx
- Large card with image overlay
- Hover: scale, parallax effect
- Gradient text overlay
- Smooth transitions
```

#### 4. SpotifyPlayer → Enhanced SpotifyPlayer
**Location**: `src/components/ui/SpotifyPlayer.tsx`

**Changes**:
- Grid layout for multiple players
- Card-based design
- Loading states
- Better responsive design

---

## Step-by-Step Migration Process

### Phase 1: Setup & Data Extraction

#### Step 1.1: Create Data Files
Create structured data files for each page:

```bash
src/data/
  ├── services.ts      # Service data
  ├── portfolio.ts     # Portfolio categories
  ├── contact.ts       # Contact information
  └── artists.ts       # Artist data (if applicable)
```

**Example Structure** (`src/data/services.ts`):
```typescript
export const mainServices = [
  {
    title: "Sound Recording",
    image: "/assets/Gallery/DSC00636-topaz-rawdenoise-lighting-color.webp",
    description: "...",
    features: [...],
  },
  // ...
];

export const otherServices = [
  {
    title: "Session Musicians",
    image: "...",
    description: "...",
  },
  // ...
];
```

#### Step 1.2: Create Reusable UI Components
Enhance/create components in `src/components/ui/`:

- `ServiceCard.tsx` - Enhanced service card
- `ContactForm.tsx` - Modern contact form
- `ContactInfoCard.tsx` - Contact information card
- `PortfolioCard.tsx` - Portfolio category card
- `VideoCard.tsx` - YouTube video card
- `SpotifyPlayerCard.tsx` - Spotify embed card
- `FormInput.tsx` - Reusable form input
- `FormTextarea.tsx` - Reusable textarea
- `LoadingSkeleton.tsx` - Loading state component

---

### Phase 2: Services Page Migration ✅ **COMPLETED**

#### Step 2.1: Create Services Data ✅
- ✅ Extract service information to `src/data/services.ts`
- ✅ Include images, descriptions, features
- ✅ Created TypeScript types for Service

#### Step 2.2: Create Enhanced ServiceCard ✅
- ✅ Design glassmorphism card
- ✅ Add hover animations with GSAP
- ✅ Update button styles to match ActionLink
- ✅ Add GSAP reveal animations
- ✅ Implement Call and WhatsApp buttons with SVG icons

#### Step 2.3: Create Services Page Section ✅
- ✅ Create `src/components/sections/ServicesPageSection.tsx`
- ✅ Use SectionHeading component
- ✅ Implement responsive grid layout
- ✅ Add scroll-triggered animations
- ✅ Separate main services and other services sections

#### Step 2.4: Update Services Page ✅
- ✅ Replace old page content
- ✅ Use new components
- ✅ Test responsiveness
- ✅ Verify animations
- ✅ Add proper metadata

---

### Phase 3: Contact Page Migration

#### Step 3.1: Create Contact Data
- Extract contact info to `src/data/contact.ts`
- Include email, phone, address (if available)

#### Step 3.2: Create Contact Components
- Enhanced ContactForm with modern styling
- ContactInfoCard components
- Form validation logic
- Success/error states

#### Step 3.3: Create Contact Section
- Split layout (info + form)
- Responsive design
- Animations

#### Step 3.4: Update Contact Page
- Replace old page
- Test form submission
- Verify API integration
- Test error handling

---

### Phase 4: Portfolio Pages Migration

#### Step 4.1: Portfolio Landing Page
- Create portfolio data
- Enhanced PortfolioCard component
- Section with animations
- Update page

#### Step 4.2: Artist Portfolio Page
- Enhanced SpotifyPlayer component
- Grid layout
- Loading states
- Update page

#### Step 4.3: Commercial Portfolio Page
- Create YouTube playlist hook
- Enhanced VideoCard component
- Loading skeletons
- Error handling
- Update page

---

### Phase 5: Testing & Refinement

#### Step 5.1: Cross-Browser Testing
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

#### Step 5.2: Responsive Testing
- Desktop (1920px, 1440px, 1280px)
- Tablet (768px, 1024px)
- Mobile (375px, 414px)

#### Step 5.3: Animation Testing
- Test with reduced motion preferences
- Verify performance (60fps animations)
- Test on lower-end devices

#### Step 5.4: Accessibility Testing
- Keyboard navigation
- Screen reader compatibility
- Focus states
- ARIA labels

---

## Component Patterns & Best Practices

### 1. Section Component Pattern
```typescript
"use client";

import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export function YourSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useGsapReveal(sectionRef);

  return (
    <section ref={sectionRef} className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="rounded-[32px] border border-white/5 bg-white/5 p-8">
        <SectionHeading
          eyebrow="Eyebrow Text"
          title="Section Title"
          description="Section description"
        />
        {/* Content */}
      </div>
    </section>
  );
}
```

### 2. Card Component Pattern
```typescript
"use client";

import { useRef } from "react";
import Image from "next/image";
import { ActionLink } from "@/components/ui/ActionLink";

export function YourCard({ title, image, description }) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <article
      ref={cardRef}
      className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5"
      data-animate
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent" />
      </div>
      <div className="relative space-y-3 p-6">
        <h3 className="font-[family-name:var(--font-bebas)] text-3xl text-[#f5f5dc]">
          {title}
        </h3>
        <p className="text-sm text-[#83caaf]">{description}</p>
        <ActionLink href="/contact-us" label="Get Started" />
      </div>
    </article>
  );
}
```

### 3. Form Component Pattern
```typescript
"use client";

import { useState } from "react";
import { FormInput } from "@/components/ui/FormInput";
import { ActionLink } from "@/components/ui/ActionLink";

export function YourForm() {
  const [formData, setFormData] = useState({});
  const [status, setStatus] = useState({ type: null, message: "" });

  // Form handling logic

  return (
    <form className="glass-panel rounded-[32px] border border-white/5 p-8">
      <FormInput
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      {/* More fields */}
      <ActionLink
        type="submit"
        label="Submit"
        variant="primary"
        className="w-full"
      />
    </form>
  );
}
```

---

## Animation Guidelines

### 1. Scroll Reveals
Always use `useGsapReveal` hook for scroll-triggered animations:

```typescript
const sectionRef = useRef<HTMLElement>(null);
useGsapReveal(sectionRef);
```

Add `data-animate` attribute to elements:
```tsx
<div data-animate>Content</div>
```

### 2. Hover Effects
Use Tailwind classes for simple hover effects:
```tsx
className="transition-transform duration-300 hover:scale-105"
```

For complex animations, use GSAP:
```typescript
useEffect(() => {
  const { gsap } = ensureGsap();
  gsap.to(elementRef.current, {
    scale: 1.05,
    duration: 0.3,
    ease: "power2.out",
  });
}, []);
```

### 3. Stagger Animations
For lists/grids, use GSAP stagger:
```typescript
gsap.from("[data-card]", {
  opacity: 0,
  y: 20,
  duration: 0.6,
  stagger: 0.1,
  ease: "power2.out",
});
```

### 4. Reduced Motion
Always check `prefersReducedMotion`:
```typescript
const prefersReducedMotion = usePrefersReducedMotion();

useEffect(() => {
  if (prefersReducedMotion) return;
  // Animation code
}, [prefersReducedMotion]);
```

---

## File Structure

```
ggs-nextjs/
├── src/
│   ├── app/
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── contact-us/
│   │   │   └── page.tsx
│   │   └── portfolio/
│   │       ├── page.tsx
│   │       ├── artist-portfolio/
│   │       │   └── page.tsx
│   │       └── commercial-portfolio/
│   │           └── page.tsx
│   ├── components/
│   │   ├── sections/
│   │   │   ├── ServicesPageSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── PortfolioLandingSection.tsx
│   │   │   ├── ArtistPortfolioSection.tsx
│   │   │   └── CommercialPortfolioSection.tsx
│   │   └── ui/
│   │       ├── ServiceCard.tsx
│   │       ├── ContactForm.tsx
│   │       ├── ContactInfoCard.tsx
│   │       ├── PortfolioCard.tsx
│   │       ├── VideoCard.tsx
│   │       ├── SpotifyPlayerCard.tsx
│   │       ├── FormInput.tsx
│   │       ├── FormTextarea.tsx
│   │       └── LoadingSkeleton.tsx
│   ├── data/
│   │   ├── services.ts
│   │   ├── portfolio.ts
│   │   ├── contact.ts
│   │   └── artists.ts
│   └── hooks/
│       └── useYouTubePlaylist.ts
```

---

## Testing Checklist

### Functionality
- [ ] All links work correctly
- [ ] Forms submit successfully
- [ ] API integrations work (YouTube, Contact form)
- [ ] Navigation works on all pages
- [ ] Mobile menu functions properly

### Design
- [ ] Colors match design system
- [ ] Typography is consistent
- [ ] Spacing is uniform
- [ ] Images load correctly
- [ ] Icons display properly

### Responsiveness
- [ ] Desktop (1920px, 1440px, 1280px)
- [ ] Tablet (768px, 1024px)
- [ ] Mobile (375px, 414px)
- [ ] Landscape orientations

### Animations
- [ ] Scroll reveals work
- [ ] Hover effects are smooth
- [ ] Reduced motion is respected
- [ ] Performance is good (60fps)

### Accessibility
- [ ] Keyboard navigation works
- [ ] Focus states are visible
- [ ] ARIA labels are present
- [ ] Screen reader compatible
- [ ] Color contrast meets WCAG AA

### Browser Compatibility
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers

---

## Performance Optimization

### Images
- Use Next.js Image component
- Optimize images (WebP format)
- Use appropriate `sizes` attribute
- Lazy load below-fold images

### Animations
- Use `will-change` sparingly
- Prefer CSS transforms over position changes
- Use `requestAnimationFrame` for complex animations
- Debounce scroll handlers

### Code Splitting
- Use dynamic imports for heavy components
- Lazy load sections below fold
- Code split by route

---

## Migration Priority

1. **High Priority** (Core pages):
   - ✅ Services Page - **COMPLETED**
   - ✅ Contact Us Page - **COMPLETED**
   - ✅ Portfolio Landing Page - **COMPLETED**

2. **Medium Priority** (Sub-pages):
   - ✅ Artist Portfolio Page - **COMPLETED**
   - ✅ Commercial Portfolio Page - **COMPLETED**

3. **Low Priority** (Enhancements):
   - ✅ Loading skeletons (`LoadingSkeleton` component, Spotify embed lazy loader, playlist skeletons)
   - ✅ Error boundaries (`app/error.tsx`, `app/global-error.tsx`)
   - ✅ Advanced animations (scroll progress overlay, GSAP-powered skeleton reveals)
   - ✅ Performance optimizations (lazy iframe loading, IntersectionObserver gating, transition-based state updates)

---

## Notes & Considerations

### API Keys
- Ensure `NEXT_PUBLIC_YOUTUBE_API_KEY` is set in `.env.local`
- Contact form API endpoint should be tested

### Content Updates
- Review all copy for consistency
- Ensure all images are optimized
- Verify all links are correct

### SEO
- Update metadata for each page
- Add structured data if needed
- Ensure proper heading hierarchy

### Future Enhancements
- Add search functionality (if needed)
- Implement filtering (portfolio pages)
- Add pagination (if content grows)
- Consider adding blog/news section

---

## Getting Started

1. **Review this document** thoroughly
2. **Set up data files** in `src/data/`
3. **Create UI components** in `src/components/ui/`
4. **Build section components** in `src/components/sections/`
5. **Update pages** one at a time
6. **Test thoroughly** after each migration
7. **Refine and optimize** based on feedback

---

## Support & Resources

- **Design System**: Reference `src/app/globals.css` and homepage components
- **Animation Examples**: Check `src/components/sections/HeroSection.tsx`
- **Component Patterns**: See `src/components/ui/ActionLink.tsx` and `SectionHeading.tsx`
- **GSAP Documentation**: https://greensock.com/docs/
- **Tailwind CSS**: https://tailwindcss.com/docs

---

**Last Updated**: 2025-11-25
**Status**: Site Refresh Complete
**Progress**: 5/5 pages + enhancements delivered
**Estimated Time**: — (feature-complete; future work optional)
**Next Focus**: Optional future features (search, filtering, pagination, blog) as needed

