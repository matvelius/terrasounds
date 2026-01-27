# Terra Sounds Website Recreation - Research & Planning

## Project Overview

This document outlines research and planning for creating a simplified version of [terrasounds.com](https://terrasounds.com) - a music, arts, and language school website based in Chicago, IL.

### Scope

**Included:**
- Homepage with hero carousel and key information
- About Us page
- Music Classes page
- Art Classes page
- Language Classes page
- eLearning page
- Fees/Pricing page
- Contact page
- Referral Program page

**Excluded (per requirements):**
- Instructors section
- News & Events section
- Blog
- User authentication/login
- Shopping cart/payment integration
- Summer camps (page returns 404 on original site)

---

## Your Development Partner

### Who I Am

I am Claude, functioning as your **professional web developer, designer, and UI/UX specialist** for this project. I bring expertise in:

- **Frontend Development**: Vue 3, Vuetify 3, modern JavaScript/TypeScript, responsive design
- **UI/UX Design**: User experience principles, accessibility (WCAG), visual hierarchy, interaction design
- **Best Practices**: Performance optimization, code organization, maintainability

### How I Work

**Systematic & Organized**
- I track progress using checklists and task lists, marking items complete as we go
- At every step, I update the plan with details, modifications, and new discoveries
- I document decisions and rationale so we can reference them later

**Research-Driven**
- I use **Context7** to look up current documentation for Vue, Vuetify, and other technologies
- I actively research UI/UX best practices when implementing new components or facing design decisions
- I don't guess when I can verify — if something is unclear, I'll research it

**Quality-Focused with Chrome DevTools**
- I use **Chrome DevTools** to inspect every change at all relevant screen resolutions:
  - Mobile: 375px, 414px
  - Tablet: 768px, 1024px
  - Desktop: 1440px, 1920px
- I verify visual appearance, spacing, typography, and interaction states at each breakpoint
- I check for accessibility issues, performance problems, and responsive behavior

**Communicative & Collaborative**
- I ask clarifying questions when requirements are ambiguous rather than making assumptions
- **I provide honest opinions and constructive criticism** — I won't simply agree with everything you say if I see potential issues
- If I think a different approach would work better, I'll explain why and let you decide
- I value getting things right over being agreeable

**Version Control Discipline**
- I regularly commit changes to GitHub with **descriptive, easy-to-understand commit messages**
- Commits are atomic and focused — each commit represents a logical unit of work
- Example commit messages:
  - `Add responsive navigation component with mobile drawer`
  - `Fix pricing table layout on tablet breakpoint`
  - `Implement contact form with Netlify Forms integration`

### Working Together

During implementation, expect me to:
1. **Before starting a task**: Clarify requirements, research best practices, review relevant documentation
2. **During implementation**: Test at multiple breakpoints, verify against quality checklists, document any issues
3. **After completing a task**: Commit with clear message, update progress tracking, note any follow-up items
4. **Throughout**: Proactively flag concerns, suggest improvements, and keep you informed of progress

---

## Original Website Analysis

### Site Structure & Navigation

The original site uses a hierarchical navigation (verified January 2026). For this simplified clone, we focus on these core pages:

```
Home
├── What We Do (dropdown)
│   ├── About Us
│   ├── Music Classes
│   ├── Art Classes
│   └── Language Classes
├── eLearning
├── Fees & Terms
├── Contact Us
└── Referral Program
```

**Excluded from clone (per requirements):**
- Instructors section (14+ individual pages)
- News & Events
- Blog
- Summer Camps & Workshops
- Art & Concert Series
- Shows / Concert Production
- Instrument Rentals & Sales
- Hours of Operation
- Join the team
- Register / My Account
- Feedback

### Visual Design Elements

| Element | Current Implementation |
|---------|----------------------|
| **Primary Color** | Orange (#F57C00 / hsl(28, 91%, 54%)) |
| **Background** | White with light gray (#F5F5F5) section backgrounds |
| **Text** | Dark gray/black |
| **Heading Font** | Rock Salt (decorative, handwritten style) - used for page titles |
| **Menu Font** | Sans-serif (appears to be Dosis or similar) |
| **Body Font** | Sans-serif (Oswald or similar) |
| **CTA Buttons** | Orange background with Rock Salt decorative font |

### Responsive Layout Behavior (Verified January 2026)

| Breakpoint | Navigation | Layout | Hero |
|------------|------------|--------|------|
| **Desktop (1440px+)** | Horizontal menu bar, single row | 3-column grids, 2-column content areas | Full-width with creative illustration |
| **Tablet (768px)** | Horizontal menu, wraps to 2 rows | 3-column grids maintained, tighter spacing | Different hero image (guitar player) |
| **Mobile (<600px)** | Hamburger menu with drawer | Single column, stacked layout | Compact hero with different image |

**Key Responsive Observations:**
- Navigation collapses to hamburger menu on mobile
- 3-column CTA buttons remain side-by-side on tablet, stack on mobile
- 3-step enrollment process stays horizontal on tablet, stacks on mobile
- YouTube video embeds maintain 3-column on tablet, stack on mobile
- Forms remain single-column across all breakpoints
- Footer content is centered and stacks on smaller screens

### Key Components

1. **Hero Carousel** - Rotating slideshow with 5 images showcasing:
   - Virtual lessons
   - Guitarists
   - Children in creative settings
   - In-home instruction
   - Drummers

2. **Navigation** - Expandable desktop menu with mobile hamburger menu

3. **Call-to-Action Buttons** - Contact, referral program, gift cards

4. **Footer** - Address, phone, email, social links, copyright

### Page Content Summary

#### Homepage
- Hero image carousel
- Three-step enrollment visualization
- Mailing list signup form
- Quick links to key services

#### About Us
- Established 2011 in Glenview, IL
- Mission: private lessons for all ages, online or at student's location
- Emphasis on instructor quality and creative development
- Downloadable media kit

#### Music Classes
Instruments offered:
- Bass, Brass, Clarinet, Drums, Flute, Guitar
- Percussion, Piano, Saxophone, Trumpet, Violin, Viola, Voice
- Specialized: Arranging, Audio Recording, Improvisation, Music Theory/Solfeggio

#### Art Classes (Terra Arts)
Disciplines:
- Acting, Acrylic Painting, Color Theory, Drawing
- Oil Painting, Painting to Music, Pencil Drawing
- Photography, Sculpture, Sketching, Watercolors

#### Language Classes (Terra Languages)
Languages offered:
- English, French, Hebrew, Italian, Russian, Spanish, Ukrainian

Teaching approach: Eclectic method developing speaking, listening, reading, and writing skills

#### eLearning
- Online video lessons via Zoom
- Available for: Music, Languages, Art, Audio Production
- Technical requirements and setup guidance provided
- Virtual Recital Hall for group performances

#### Fees & Terms (Updated January 2026 - Monthly Subscription Model)

**IN-HOME LESSONS (Chicago Northshore):**
| Duration | Monthly | Per Lesson |
|----------|---------|-----------|
| 45 min | $285/month | $66/lesson |
| 60 min | $350/month | $81/lesson |

**ONLINE LESSONS (Available Worldwide):**
| Duration | Monthly | Per Lesson |
|----------|---------|-----------|
| 30 min* | $175/month | $40/lesson |
| 45 min* | $225/month | $52/lesson |
| 60 min* | $275/month | $63/lesson |

*allowing a few minutes for connection and sound check

- Pay as you go: 20% premium over subscription rates
- Subscription fee: $100 (refunded after 12 consecutive monthly payments)
- Recital fee: $20 (refunded after 3 consecutive monthly payments)
- 5% discount with 2+ subscriptions per household
- FREE 15-minute one-on-one video lesson offered

#### Contact
- Form fields: Phone, Email, Preference (Call/SMS/Email), Message, Name
- reCAPTCHA verification
- Address: 111 North Wabash Ave. #1305, Chicago, IL 60602
- Phone: +1.847.737.1850
- Email: info@terrasounds.com

#### Referral Program
- $50/$50 split - both referrer and new student get $50 off
- One referral bonus per household
- Cannot combine with other offers

---

## Technology Recommendations

### Framework: Vue 3 + Vuetify 3

**Recommended** based on:
- User's existing experience and preference
- Excellent component library for rapid development
- Material Design provides clean, modern aesthetics
- Good responsive design support out of the box
- Active community and documentation

**Setup approach:**
- Use `create-vue` to scaffold Vite-based project
- Add Vuetify 3 for UI components
- Vue Router for page navigation (with history mode fallback configuration)

### Hosting: Netlify (Recommended)

**Why Netlify over alternatives:**

| Platform | Free Tier | Commercial Use | Best For |
|----------|-----------|----------------|----------|
| **Netlify** | 100GB/month, 3 sites | Allowed | This project |
| Vercel | 100GB/month | Not on free tier | Performance-critical |
| GitHub Pages | Unlimited (public repos) | Yes | Documentation sites |
| Cloudflare Pages | Unlimited | Yes | High-traffic sites |

**Netlify advantages for this project:**
- Commercial use allowed on free tier
- Built-in form handling (perfect for contact form without backend)
- Automatic SSL certificates
- Git integration for easy deploys
- Global CDN for fast loading
- Simple redirect/rewrite rules for Vue Router history mode

### Development Tools

```
Project Stack:
├── Vue 3 (Composition API)
├── Vuetify 3 (UI Components)
├── Vite (Build Tool)
├── Vue Router (Navigation)
└── Netlify (Hosting + Forms)
```

---

## Design Modernization Plan

### Improvements from Original

1. **Cleaner Typography**
   - Replace decorative fonts with modern, readable alternatives
   - Consider: Inter, Poppins, or similar clean sans-serif

2. **Simplified Color Palette**
   - Keep orange as accent color
   - Add more white space
   - Use subtle grays for hierarchy

3. **Modern Layout**
   - Card-based content sections
   - Larger, more impactful hero section
   - Better visual hierarchy

4. **Improved Mobile Experience**
   - Bottom navigation option for mobile
   - Touch-friendly buttons and spacing
   - Optimized images for mobile

5. **Performance Focus**
   - Lazy loading images
   - Optimized assets
   - Minimal JavaScript bundle

### Component Architecture

```
src/
├── components/
│   ├── layout/
│   │   ├── AppHeader.vue
│   │   ├── AppFooter.vue
│   │   └── AppNavigation.vue
│   ├── home/
│   │   ├── HeroCarousel.vue
│   │   └── EnrollmentSteps.vue
│   └── shared/
│       ├── ClassCard.vue
│       ├── PriceTable.vue
│       └── ContactForm.vue
├── views/
│   ├── HomeView.vue
│   ├── AboutView.vue
│   ├── MusicView.vue
│   ├── ArtView.vue
│   ├── LanguagesView.vue
│   ├── ElearningView.vue
│   ├── FeesView.vue
│   ├── ContactView.vue
│   └── ReferralView.vue
├── router/
│   └── index.js
└── assets/
    ├── images/
    └── styles/
```

---

## Responsive Design Considerations

Based on analysis of the original site's responsive behavior:

### Breakpoints (Vuetify defaults)

| Breakpoint | Width | Device |
|------------|-------|--------|
| xs | < 600px | Mobile |
| sm | 600-960px | Tablet portrait |
| md | 960-1264px | Tablet landscape |
| lg | 1264-1904px | Desktop |
| xl | > 1904px | Large desktop |

### Mobile Adaptations Needed

1. **Navigation**: Hamburger menu with drawer
2. **Hero**: Full-width, reduced height
3. **Content Cards**: Stack vertically
4. **Price Table**: Horizontal scroll or accordion
5. **Footer**: Stacked layout

---

## Next Steps

### Phase 1: Project Setup

- [x] **1.1 Initialize Git repository and connect to GitHub** ✓
  ```bash
  git init
  gh repo create terrasounds --public --source=. --remote=origin
  git add docs/
  git commit -m "Add project documentation and planning"
  git push -u origin main
  ```

- [x] **1.2 Initialize Vue 3 + Vite project** ✓
  ```bash
  npm create vue@latest terrasounds-app
  # Select: Vue Router (Yes), Pinia (No), Vitest (No), ESLint (Optional)
  cd terrasounds-app
  ```

- [x] **1.3 Install Vuetify 3 and dependencies** ✓
  ```bash
  npm install vuetify vite-plugin-vuetify
  npm install @mdi/font
  ```

- [x] **1.4 Configure Vuetify in `src/main.js`** ✓
  ```javascript
  import { createApp } from 'vue'
  import { createVuetify } from 'vuetify'
  import 'vuetify/styles'
  import '@mdi/font/css/materialdesignicons.css'
  import App from './App.vue'
  import router from './router'

  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#F57C00',      // Terra Sounds orange
            'primary-darken-1': '#E65100',
            secondary: '#424242',
            accent: '#0288D1',
            background: '#FFFFFF',
            surface: '#FAFAFA',
          },
        },
      },
    },
  })

  createApp(App).use(router).use(vuetify).mount('#app')
  ```

- [x] **1.5 Configure `vite.config.js` for Vuetify** ✓
  ```javascript
  import { defineConfig } from 'vite'
  import vue from '@vitejs/plugin-vue'
  import vuetify from 'vite-plugin-vuetify'

  export default defineConfig({
    plugins: [
      vue(),
      vuetify({ autoImport: true })
    ]
  })
  ```

- [x] **1.6 Commit project setup** ✓
  ```bash
  git add .
  git commit -m "Initialize Vue 3 + Vuetify 3 project with Vite"
  git push
  ```

### Phase 2: Routing Setup

- [ ] **2.1 Configure Vue Router (`src/router/index.js`)**
  ```javascript
  import { createRouter, createWebHistory } from 'vue-router'

  const routes = [
    { path: '/', name: 'home', component: () => import('@/views/HomeView.vue') },
    { path: '/about', name: 'about', component: () => import('@/views/AboutView.vue') },
    { path: '/music', name: 'music', component: () => import('@/views/MusicView.vue') },
    { path: '/art', name: 'art', component: () => import('@/views/ArtView.vue') },
    { path: '/languages', name: 'languages', component: () => import('@/views/LanguagesView.vue') },
    { path: '/elearning', name: 'elearning', component: () => import('@/views/ElearningView.vue') },
    { path: '/fees', name: 'fees', component: () => import('@/views/FeesView.vue') },
    { path: '/contact', name: 'contact', component: () => import('@/views/ContactView.vue') },
    { path: '/referral', name: 'referral', component: () => import('@/views/ReferralView.vue') },
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() { return { top: 0 } }
  })

  export default router
  ```

### Phase 3: Layout Components

- [ ] **3.1 Create `AppHeader.vue`** with:
  - `v-app-bar` for desktop horizontal navigation
  - `v-navigation-drawer` for mobile hamburger menu
  - Logo and branding
  - Responsive breakpoint handling

- [ ] **3.2 Create `AppFooter.vue`** with:
  - Contact information (address, phone, email)
  - Social media links (Facebook, Instagram, YouTube)
  - Copyright notice
  - Centered layout

- [ ] **3.3 Create `App.vue` layout wrapper**
  ```vue
  <template>
    <v-app>
      <AppHeader />
      <v-main>
        <router-view />
      </v-main>
      <AppFooter />
    </v-app>
  </template>
  ```

### Phase 4: Build Pages

- [ ] **4.1 Homepage (`HomeView.vue`)**
  - Hero section with image/illustration
  - Welcome banner with intro text
  - 3-column CTA buttons (Start Here, Refer a Friend, Buy Gift Card)
  - 3-step enrollment visualization
  - Embedded YouTube videos (optional)
  - Mailing list CTA

- [ ] **4.2 About Page (`AboutView.vue`)**
  - Hero banner with page title
  - YouTube video embed
  - School history and philosophy text
  - Media kit download link
  - Contact CTA

- [ ] **4.3 Class Pages (Music, Art, Languages)**
  - Consistent layout with hero banner
  - List of offerings
  - Cross-links to other class types
  - CTAs to Fees and Contact

- [ ] **4.4 eLearning Page**
  - Benefits section
  - Technical requirements
  - Virtual classroom info (simplified)

- [ ] **4.5 Fees & Terms Page**
  - Pricing tables using `v-table`
  - Terms & conditions list
  - Free trial callout

- [ ] **4.6 Contact Page**
  - Contact form (Netlify Forms compatible)
  - Contact information
  - Social links

- [ ] **4.7 Referral Program Page**
  - Program explanation
  - Referral form

### Phase 5: Forms & Netlify Integration

- [ ] **5.1 Create Netlify-compatible contact form**
  ```html
  <form name="contact" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="contact" />
    <!-- form fields -->
  </form>
  ```

- [ ] **5.2 Create `public/_redirects` for SPA routing**
  ```
  /*    /index.html   200
  ```

- [ ] **5.3 Add form submission handling with fetch API**

### Phase 6: Responsive Design & Testing

- [ ] **6.1 Test all breakpoints**
  - Mobile: < 600px
  - Tablet: 600-960px
  - Desktop: > 960px

- [ ] **6.2 Verify navigation behavior**
  - Hamburger menu on mobile
  - Full menu on desktop
  - Proper drawer behavior

- [ ] **6.3 Accessibility checks**
  - Keyboard navigation
  - Screen reader compatibility
  - Color contrast (WCAG AA)

### Phase 7: Deployment

- [ ] **7.1 Build production bundle**
  ```bash
  npm run build
  ```

- [ ] **7.2 Deploy to Netlify**
  - Connect Git repository
  - Set build command: `npm run build`
  - Set publish directory: `dist`

- [ ] **7.3 Configure custom domain (optional)**

- [ ] **7.4 Test deployed site across devices**

---

## Implementation Guidelines

### Brand Continuity Requirements

The new site should maintain visual continuity with the existing terrasounds.com:

**Color Scheme (Match Existing)**
- [ ] Primary: Orange (#F57C00) - CTAs, highlights, accent elements
- [ ] Primary Dark: (#E65100) - Hover states, emphasis
- [ ] Background: White (#FFFFFF) - Main content areas
- [ ] Surface: Light gray (#FAFAFA / #F5F5F5) - Section backgrounds, cards
- [ ] Text: Dark gray/black (#212121) - Body text
- [ ] Links: Orange (#F57C00) - Inline links

**Graphics to Preserve**
- [ ] Terra Sounds logo ("TERRA SOUNDS School of Music & Arts" with musical note icon)
- [ ] "CREATIVE PLAYGROUND" tagline styling (orange, uppercase)
- [ ] Creative head illustration (head filled with instruments/art supplies) - for hero sections
- [ ] Child/student imagery style - warm, engaging, candid feel

**Typography Direction**
- [ ] Keep decorative/handwritten feel for page titles (similar to Rock Salt)
- [ ] Clean sans-serif for body text and navigation
- [ ] Maintain visual hierarchy with clear heading levels

### Navigation Architecture

**Desktop (≥960px)**
- [ ] Horizontal navigation bar at top
- [ ] Logo on left, menu items center/right
- [ ] Sticky header on scroll (optional enhancement)
- [ ] Dropdown for "What We Do" submenu containing class pages

**Tablet (600-959px)**
- [ ] Horizontal navigation, may wrap to 2 rows if needed
- [ ] Consider condensing labels or using icons
- [ ] Maintain touch-friendly spacing (min 44px tap targets)

**Mobile (<600px)**
- [ ] Hamburger menu icon (top left or right)
- [ ] Full-height navigation drawer
- [ ] Logo centered or alongside hamburger
- [ ] Clear close button on drawer

---

## Continuous UI/UX Quality Checklist

During implementation, continuously verify against these criteria:

### Visual Design Checks
- [ ] Color contrast meets WCAG AA (4.5:1 for text, 3:1 for large text)
- [ ] Orange (#F57C00) on white background passes contrast check
- [ ] Consistent spacing using 8px grid system
- [ ] Visual hierarchy clear on each page (what draws the eye first?)
- [ ] Whitespace is adequate - content has room to breathe
- [ ] Images are high quality and appropriately sized
- [ ] No orphaned headings or widows in text blocks

### Typography Checks
- [ ] Body text is minimum 16px for readability
- [ ] Line height is 1.5-1.7 for body text
- [ ] Maximum line length is 60-75 characters
- [ ] Heading hierarchy is logical (h1 → h2 → h3)
- [ ] Font weights provide clear distinction

### Interaction Design Checks
- [ ] All clickable elements have hover/focus states
- [ ] Buttons look clickable (elevated, colored, clear affordance)
- [ ] Links are distinguishable from regular text
- [ ] Form fields have clear labels and placeholder text
- [ ] Error states are clear and helpful
- [ ] Loading states exist where needed
- [ ] Transitions are smooth (200-300ms)

### Responsive Design Checks
- [ ] Test at 320px (small mobile)
- [ ] Test at 375px (iPhone)
- [ ] Test at 768px (tablet portrait)
- [ ] Test at 1024px (tablet landscape)
- [ ] Test at 1440px (desktop)
- [ ] Test at 1920px (large desktop)
- [ ] No horizontal scrolling at any breakpoint
- [ ] Touch targets are minimum 44x44px on mobile
- [ ] Text remains readable without zooming

### Navigation UX Checks
- [ ] Current page is clearly indicated
- [ ] All pages are reachable within 3 clicks
- [ ] Back button works as expected (browser history)
- [ ] Logo links to homepage
- [ ] Mobile menu is easy to open and close
- [ ] Menu items have adequate spacing for touch

### Content UX Checks
- [ ] Page purpose is clear within 5 seconds
- [ ] Primary CTA is obvious on each page
- [ ] Contact information is easy to find
- [ ] Pricing is transparent and easy to understand
- [ ] Forms are as short as possible
- [ ] Success/confirmation messages are clear

### Performance Checks
- [ ] Images are optimized (WebP format, appropriate dimensions)
- [ ] Lazy loading for below-fold images
- [ ] No layout shift when images load
- [ ] Page loads feel fast (perceived performance)
- [ ] Animations don't cause jank

### Accessibility Checks
- [ ] All images have descriptive alt text
- [ ] Form inputs have associated labels
- [ ] Focus order is logical (tab through page)
- [ ] Focus indicators are visible
- [ ] Skip navigation link exists
- [ ] No content conveyed by color alone
- [ ] ARIA labels where needed

---

## UI/UX Review Process

During implementation, follow this review cycle:

### Per-Component Review
After building each component:
1. [ ] Visual inspection at mobile, tablet, and desktop widths
2. [ ] Keyboard navigation test (Tab, Enter, Escape)
3. [ ] Check color contrast of text elements
4. [ ] Verify touch target sizes on mobile
5. [ ] Compare against original site for brand consistency

### Per-Page Review
After completing each page:
1. [ ] Full responsive test across all breakpoints
2. [ ] User flow test (can user accomplish primary goal?)
3. [ ] Cross-browser check (Chrome, Firefox, Safari)
4. [ ] Performance check (no jank, fast load)
5. [ ] Accessibility audit (browser dev tools)

### Pre-Deployment Review
Before final deployment:
1. [ ] Complete site walkthrough at all breakpoints
2. [ ] Form submission testing
3. [ ] All links verified working
4. [ ] Lighthouse audit (Performance, Accessibility, Best Practices, SEO)
5. [ ] Real device testing (actual phone/tablet if possible)

### Research Triggers
Actively research UI/UX best practices when:
- Implementing a new component type (forms, tables, navigation)
- Encountering a design decision with multiple valid approaches
- User feedback indicates confusion or friction
- Accessibility tools flag issues
- Performance metrics are below targets

---

## UI/UX Best Practices for the New Site

Based on 2026 UI/UX trends and educational website best practices:

### Design Principles

1. **Functional Minimalism**
   - Clean, uncluttered interfaces with ample white space
   - Focus on essential elements only
   - Every element should reduce mental effort or be cut

2. **Mobile-First Responsive Design**
   - 67% of parents and 75% of prospective students browse on mobile
   - Tap-friendly navigation and buttons (minimum 44x44px touch targets)
   - Fast-loading optimized images

3. **Strong Visual Hierarchy**
   - Clear typographical hierarchy (headings, subheadings, body)
   - Card-based layouts for content grouping
   - Use color to guide attention (orange for CTAs)

4. **Storytelling & Emotional Connection**
   - Define clear user journey through the site
   - Show student experiences, not just list services
   - Use high-quality imagery of real lessons/students

### Material Design 3 Component Recommendations

| Purpose | Vuetify Component | Usage |
|---------|-------------------|-------|
| Navigation (Desktop) | `v-app-bar` | Horizontal menu with logo |
| Navigation (Mobile) | `v-navigation-drawer` | Slide-out hamburger menu |
| Page Sections | `v-card` | Group related content |
| CTAs | `v-btn` | Primary actions (elevated, orange) |
| Lists | `v-list` | Class/instrument listings |
| Pricing | `v-table` | Fee structures |
| Forms | `v-form`, `v-text-field` | Contact/referral forms |
| Layout | `v-container`, `v-row`, `v-col` | Responsive grid |

### Accessibility Requirements (WCAG 2.1)

- [ ] Color contrast ratio minimum 4.5:1 for text
- [ ] All images have alt text
- [ ] Forms have proper labels and error messages
- [ ] Full keyboard navigation support
- [ ] Focus indicators visible
- [ ] Skip navigation link for screen readers

### Performance Targets

- [ ] Largest Contentful Paint (LCP): < 2.5s
- [ ] First Input Delay (FID): < 100ms
- [ ] Cumulative Layout Shift (CLS): < 0.1
- [ ] Lazy load images below the fold
- [ ] Optimize and compress all images

### Sources
- [UI Trends 2026 - UX Studio](https://www.uxstudioteam.com/ux-blog/ui-trends-2019)
- [Best School Websites 2026 - Morweb](https://morweb.org/post/best-school-websites)
- [Web Design Best Practices - Hostinger](https://www.hostinger.com/tutorials/web-design-best-practices)
- [UI/UX Design Trends 2026 - Index.dev](https://www.index.dev/blog/ui-ux-design-trends)
- [Material Design 3 Guidelines](https://m3.material.io/)

---

## Resources

### Technology Documentation
- [Vue 3 Documentation](https://vuejs.org/)
- [Vuetify 3 Getting Started](https://vuetifyjs.com/en/getting-started/installation/)
- [Netlify Forms](https://docs.netlify.com/forms/setup/)
- [Vue Router](https://router.vuejs.org/)

### Hosting Comparisons
- [Netlify vs Vercel 2026](https://northflank.com/blog/vercel-vs-netlify-choosing-the-deployment-platform-in-2026)
- [Best Free Static Hosting](https://appwrite.io/blog/post/best-free-static-website-hosting)
- [GitHub Pages vs Netlify vs Vercel](https://namastedev.com/blog/hosting-a-static-website-comparing-github-pages-netlify-and-vercel/)

### Design Inspiration
- [Material Design 3](https://m3.material.io/)
- [Vuetify Component Gallery](https://vuetifyjs.com/en/components/all/)
