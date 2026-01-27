# Technology Stack Decision

## Summary

| Layer | Choice | Rationale |
|-------|--------|-----------|
| **Framework** | Vue 3 | User preference + excellent ecosystem |
| **UI Library** | Vuetify 3 | Material Design components, responsive out-of-box |
| **Build Tool** | Vite | Fast dev server, optimized builds |
| **Routing** | Vue Router 4 | Standard for Vue 3, history mode |
| **Hosting** | Netlify | Free tier allows commercial use, built-in forms |
| **Forms** | Netlify Forms | No backend needed, spam protection included |

---

## Framework: Vue 3

### Why Vue 3?

1. **User Familiarity** - You have experience with Vue, reducing learning curve
2. **Composition API** - Cleaner, more maintainable code organization
3. **Performance** - Smaller bundle size than Vue 2, faster rendering
4. **TypeScript Support** - Optional but excellent if desired later
5. **Active Ecosystem** - Vuetify 3, Vue Router 4, Pinia all stable

### Alternatives Considered

| Framework | Pros | Cons | Verdict |
|-----------|------|------|---------|
| React | Large ecosystem | Different paradigm, would need to learn | Skip - no Vue experience to leverage |
| Nuxt 3 | SSG built-in, SEO | Additional complexity for simple site | Overkill for this project |
| Astro | Minimal JS, fast | Less familiar, different architecture | Good option but Vue preference wins |
| Plain HTML/CSS | Simplest | Manual responsive work, no components | Too manual for multi-page site |

---

## UI Library: Vuetify 3

### Why Vuetify 3?

1. **User Familiarity** - You specifically mentioned liking Vuetify
2. **Comprehensive Components** - Everything needed out of the box:
   - App bar, navigation drawer (responsive nav)
   - Carousel (hero section)
   - Cards (service listings)
   - Tables (pricing)
   - Forms with validation
   - Grid system (responsive layouts)
3. **Material Design 3** - Modern, clean aesthetic
4. **Built-in Responsiveness** - Breakpoint system, display helpers
5. **Theming** - Easy color customization via Vuetify config
6. **Accessibility** - ARIA support built into components

### Alternatives Considered

| Library | Pros | Cons | Verdict |
|---------|------|------|---------|
| Tailwind CSS | Utility-first, flexible | No pre-built components, more CSS work | Good but more effort |
| PrimeVue | Many components | Less familiar, different design language | Viable alternative |
| Naive UI | Modern, good DX | Smaller community | Less documentation |
| Custom CSS | Full control | Significant time investment | Not efficient |

---

## Hosting: Netlify

### Why Netlify?

1. **Commercial Use on Free Tier** - Critical since Vercel prohibits this
2. **Built-in Form Handling** - Perfect for contact form without backend
3. **Generous Limits** - 100GB bandwidth/month, 300 build minutes
4. **Global CDN** - Fast loading worldwide
5. **Automatic SSL** - HTTPS included
6. **Git Integration** - Push to deploy workflow
7. **Vue Router Support** - Easy redirect rules for SPA

### Free Tier Details

```
Netlify Free Tier:
├── Bandwidth: 100 GB/month
├── Build minutes: 300/month
├── Sites: Unlimited (previously 3)
├── Forms: 100 submissions/month
├── Functions: 125k/month
├── Commercial use: Allowed
└── Custom domain: Supported
```

### Alternatives Compared

| Platform | Free Bandwidth | Commercial | Forms | Best For |
|----------|---------------|------------|-------|----------|
| **Netlify** | 100 GB | Yes | Built-in | This project |
| Vercel | 100 GB | No | No | Personal projects |
| GitHub Pages | Unlimited | Yes | No | Documentation |
| Cloudflare Pages | Unlimited | Yes | No | High traffic |
| Render | 100 GB | Yes | No | Full-stack apps |

### Netlify Forms Setup

No backend needed. Just add attributes to HTML form:

```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  <!-- form fields -->
</form>
```

Submissions viewable in Netlify dashboard. Optional email notifications.

---

## Build Tool: Vite

### Why Vite?

1. **Official Recommendation** - Vue team recommends Vite for new projects
2. **Instant Dev Server** - No bundling during development
3. **Fast HMR** - Changes reflect immediately
4. **Optimized Production** - Rollup-based builds, tree-shaking
5. **Modern Defaults** - ES modules, no legacy overhead

### Project Setup Command

```bash
# Step 1: Create Vue project
npm create vue@latest terrasounds-app
# Select: Vue Router (Yes), Pinia (No), Vitest (No), ESLint (Optional)

cd terrasounds-app

# Step 2: Install Vuetify and dependencies
npm install vuetify vite-plugin-vuetify
npm install @mdi/font
```

### Vite Configuration (`vite.config.js`)

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

### Vuetify Configuration (`src/plugins/vuetify.js`)

```javascript
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#F57C00',        // Terra Sounds orange
          'primary-darken-1': '#E65100',
          secondary: '#424242',
          accent: '#0288D1',
          background: '#FFFFFF',
          surface: '#FAFAFA',
        },
      },
    },
  },
  defaults: {
    VBtn: { color: 'primary', variant: 'elevated' },
    VCard: { elevation: 2, rounded: 'lg' },
    VTextField: { variant: 'outlined' },
  },
})
```

---

## Routing: Vue Router 4

### Configuration Needed

For Netlify deployment with history mode, add `public/_redirects`:

```
/*    /index.html   200
```

This ensures all routes fall back to the SPA.

### Route Structure

```javascript
const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/music', component: MusicView },
  { path: '/art', component: ArtView },
  { path: '/languages', component: LanguagesView },
  { path: '/elearning', component: ElearningView },
  { path: '/fees', component: FeesView },
  { path: '/contact', component: ContactView },
  { path: '/referral', component: ReferralView },
]
```

---

## Development Workflow

```
Local Development:
1. npm run dev          → Start Vite dev server
2. Make changes         → Instant hot reload
3. npm run build        → Production build
4. npm run preview      → Test production build locally

Deployment:
1. Push to GitHub/GitLab
2. Netlify auto-builds
3. Live in ~1 minute
```

---

## Cost Analysis

| Item | Cost |
|------|------|
| Vue 3 | Free |
| Vuetify 3 | Free |
| Vite | Free |
| Netlify hosting | Free |
| Netlify forms | Free (up to 100/month) |
| Custom domain | ~$12/year (optional) |
| **Total** | **$0 - $12/year** |

---

## Conclusion

**Vue 3 + Vuetify 3 + Vite + Netlify** is the recommended stack because:

1. Leverages your existing Vue/Vuetify experience
2. Provides all needed components out of the box
3. Zero hosting cost with commercial use allowed
4. Built-in form handling eliminates backend need
5. Fast development and deployment workflow
6. Modern, maintainable, and performant result
