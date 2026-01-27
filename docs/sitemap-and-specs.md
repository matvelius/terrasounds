# Site Map & Page Specifications

## Assets to Preserve from Original Site

### Graphics & Images
- [ ] **Terra Sounds Logo** - Musical note icon with "TERRA SOUNDS School of Music & Arts" text
- [ ] **Creative Head Illustration** - Artistic head silhouette filled with instruments and art supplies (used on desktop hero, about page, fees page, contact page)
- [ ] **"CREATIVE PLAYGROUND" tagline** - Orange uppercase styling
- [ ] **Student/lesson photography** - Warm, engaging imagery of lessons (guitar player, child with clarinet, in-home lesson scenes)

### Color Values to Match
```
Primary Orange:     #F57C00
Primary Dark:       #E65100
White Background:   #FFFFFF
Gray Surface:       #FAFAFA / #F5F5F5
Dark Text:          #212121
```

### Typography Feel
- Page titles: Decorative/handwritten style (Rock Salt or similar Google Font)
- Navigation: Clean sans-serif
- Body: Clean sans-serif (Inter, Poppins, or Oswald)

---

## Site Map

```
terrasounds-clone/
│
├── / (Home)
│   ├── Hero carousel
│   ├── Quick intro
│   ├── Service highlights
│   └── Call-to-action
│
├── /about
│   ├── School history
│   ├── Mission/values
│   └── Philosophy
│
├── /music
│   ├── Instrument list
│   ├── Lesson types
│   └── CTA to contact/fees
│
├── /art
│   ├── Art disciplines list
│   └── CTA to contact/fees
│
├── /languages
│   ├── Language list
│   ├── Teaching methodology
│   └── CTA to contact/fees
│
├── /elearning
│   ├── Online offerings
│   ├── Technical requirements
│   └── Benefits
│
├── /fees
│   ├── Pricing tables
│   ├── Package options
│   └── Free trial info
│
├── /contact
│   ├── Contact form (Netlify)
│   ├── Location info
│   └── Social links
│
└── /referral
    ├── Program details
    └── Terms & conditions
```

---

## Page Specifications

### Global Layout

**Header (AppHeader.vue)**

*Desktop (≥960px):*
- Logo on left (Terra Sounds logo with musical note)
- Horizontal navigation bar
- Menu items: Home, What We Do (dropdown), eLearning, Fees & Terms, Contact Us, Referral Program
- "What We Do" dropdown contains: About Us, Music Classes, Art Classes, Language Classes
- Optional: Sticky on scroll

*Tablet (600-959px):*
- Same as desktop, navigation may wrap to 2 rows
- Ensure adequate touch spacing

*Mobile (<600px):*
- Hamburger menu icon (☰) on left
- Logo centered
- Navigation drawer slides in from left
- Full-height drawer with all menu items stacked
- Clear close button (✕) in drawer

**Footer (AppFooter.vue)**
- Address: 111 North Wabash Ave. #1305, Chicago, IL 60602
- Phone: +1.847.737.1850 (clickable tel: link on mobile)
- Email: info@terrasounds.com (clickable mailto: link)
- Social icons: Facebook, Instagram, YouTube, Yelp
- Copyright: © Terra Sounds School of Music & Arts 2020
- Centered layout, stacks vertically on mobile

---

### 1. Home Page (/)

**Header/Logo**
- "TERRA SOUNDS School of Music & Arts" logo
- "CREATIVE PLAYGROUND" tagline (orange, uppercase)
- Desktop: Horizontal navigation bar
- Mobile: Hamburger menu

**Hero Section**
- Desktop: Creative illustration (head filled with musical instruments and art supplies)
- Tablet/Mobile: Photo of guitar player or child with clarinet
- Varies by breakpoint (different hero images at different sizes)

**Welcome Banner** (gray background)
- "New to Terra Sounds? Sign up for in-home and online video lessons today!"
- "Terra Sounds is a creative playground for kids and adults who learn, perform, and grow together through music and arts."

**CTA Buttons** (3-column on desktop/tablet, stacked on mobile)
- "start here" → Contact page
- "refer a friend" → Referral program
- "buy a gift card" → External GiftFly link

Note: CTAs use decorative Rock Salt font with orange background

**3-Step Enrollment** (numbered 1-2-3 with orange circles)
1. "Tell us about your interests and goals in music, arts, languages or recording"
2. "We'll arrange a sample lesson with the right teacher"
3. "Choose a convenient schedule and become a part of our creative playground"

**YouTube Videos Section** (3-column on desktop, stacked on mobile)
- "How to Sign Up for Lessons?"
- "Why choose Terra Sounds?"
- "Terra Sounds Virtual Video Lessons"

**Mailing List CTA**
- "Join Our Mailing List" link (orange text, links to Constant Contact)

---

### 2. About Page (/about)

**Content Sections**
1. Hero banner with page title
2. Our Story (established 2011)
3. Our Philosophy (creative playground concept)
4. Our Standards (instructor qualifications)

**Design Notes**
- Clean, text-focused layout
- Optional: founder quote or team photo placeholder

---

### 3. Music Classes Page (/music)

**Hero Banner**
- Page title: "Music Classes"
- Subtitle: "Private lessons and group classes"

**Instrument Grid**
Cards for each category:
- **Strings**: Guitar, Bass, Violin, Viola
- **Piano & Keyboard**: Piano
- **Winds**: Flute, Clarinet, Saxophone, Trumpet/Brass
- **Percussion**: Drums, Percussion
- **Voice**: Vocal lessons
- **Theory**: Solfeggio, Music Theory, Improvisation
- **Production**: Arranging, Audio Recording

**Lesson Format Info**
- Private lessons available
- In-home or online options

**CTA**
- Link to fees page
- Link to contact form

---

### 4. Art Classes Page (/art)

**Hero Banner**
- Page title: "Art Classes"
- Subtitle: "Explore your creative potential"

**Disciplines Grid**
Cards for:
- Drawing & Sketching
- Pencil Drawing
- Acrylic Painting
- Oil Painting
- Watercolors
- Painting to Music
- Color Theory
- Photography
- Sculpture
- Acting

**CTA**
- Link to fees page
- Link to contact form

---

### 5. Languages Page (/languages)

**Hero Banner**
- Page title: "Language Classes"
- Subtitle: "Speaking, listening, reading, and writing"

**Languages Offered**
Cards for:
- English (ESL)
- French
- Hebrew
- Italian
- Russian
- Spanish
- Ukrainian

**Methodology Section**
- Eclectic teaching method
- Adaptive approach
- All skill levels welcome

**CTA**
- Link to fees page
- Link to contact form

---

### 6. eLearning Page (/elearning)

**Hero Banner**
- Page title: "Online Learning"
- Subtitle: "Learn from anywhere"

**Benefits Section**
- Maximum convenience
- Flexible scheduling (any time zone)
- Personalized feedback
- Screen sharing for theory/exercises

**What's Available Online**
- Music: Piano, guitar, drums, violin, etc.
- Languages: French, Italian, Russian, Ukrainian, ESL
- Art: Drawing
- Production: Audio recording

**Technical Requirements**
- Computer with webcam
- Stable internet (wired recommended)
- External USB microphone (optional)
- Zoom account

**CTA**
- "Book Your Free Online Trial"

---

### 7. Fees & Terms Page (/fees)

**Hero Banner**
- Page title: "Fees & Terms" (decorative Rock Salt font)
- Creative head illustration (same as homepage)

**Free Trial Callout**
- "FREE 15-minute one-on-one video lesson" offer

**Monthly Subscriptions Section**

*IN-HOME LESSONS (Chicago Northshore):*
| Duration | Monthly | Per Lesson |
|----------|---------|-----------|
| 45 min | $285/month | $66/lesson |
| 60 min | $350/month | $81/lesson |

*ONLINE LESSONS (Available Worldwide):*
| Duration | Monthly | Per Lesson |
|----------|---------|-----------|
| 30 min* | $175/month | $40/lesson |
| 45 min* | $225/month | $52/lesson |
| 60 min* | $275/month | $63/lesson |

*allowing a few minutes for connection and sound check

**Pay As You Go**
- Available at 20% premium over subscription rates

**Terms & Conditions Section**
- Consistent weekly time slot for up to 52 lessons/year
- 4 lesson cancellations a year (with 2-week advance notice)
- Cancel subscription at any time (with 2-week advance notice)
- Subscription fee: $100 (refunded after 12 consecutive monthly payments)
- Recital fee: $20 (refunded after 3 consecutive monthly payments)
- Monthly subscription fee charged on 1st of month
- 5% discount with 2+ subscriptions per household

**CTA**
- Link to contact form ("this form")

---

### 8. Contact Page (/contact)

**Hero Banner**
- Creative head illustration (same as homepage)
- No separate page title banner

**Intro Text**
- "To start, please tell us about your interests and goals in music, arts, and languages by filling out the form below. Our program coordinators will be glad to match you with a great instructor and work out a convenient schedule for you!"

**Contact Form (Netlify Forms)**
Fields:
- Phone Number (required)
- Email (required)
- What is the best way to reach you? (radio buttons)
  - Call/SMS me (I allow Terra Sounds to Call and SMS me)
  - Email me (I allow Terra Sounds to Email me)
- Message textarea: "We offer a FREE 15-minute one-on-one video lesson! If you are interested, what could we cover? (i.e. 'I'd like my 7 year old daughter to try violin and drawing lessons. She's available on Mondays and Thursdays between 5-7pm.')"
- Name (required)
- SUBMIT button (orange)

**Other Contact Methods Section**
- Phone: +1.847.737.1850
- Customer/Student Services Email: customerservice@terrasounds.com
- General Email: info@terrasounds.com
- Social Links: Terra Sounds Email List, Facebook, Instagram, YouTube, Yelp

**Mailing Address**
- 111 North Wabash Ave. #1305
- Chicago, IL 60602

---

### 9. Referral Program Page (/referral)

**Hero Banner**
- Page title: "Terra $50/$50 Student Referral Program" (decorative Rock Salt font)
- Creative head illustration

**Program Description**
- "Refer a new student to Terra Sounds and split $100 towards your monthly subscription purchases."

**How It Works - You:**
- Refer a student by filling out the form below or talking with a Terra Sounds administrator
- Once your referral subscribes, you get $50 discount on your next subscription payment

**How It Works - Your Referral:**
- Gets contacted by Terra Sounds to schedule lessons
- Gets $50 discount towards their first monthly subscription

**Terms**
- Referrals must be new clients from a household other than yours
- Referral credit is non-transferable and cannot be combined with other offers
- One referral bonus per household
- Other restrictions may apply

**Referral Form**
Section title: "Tell us about your referral" (decorative font)
Fields:
- Referral Name (required)
- Referral Phone (required)
- Referral Email (required)
- Message (optional, textarea)
- Your Name (required)
- Your Phone
- Your Email
- SUBMIT button (orange)

---

## Vuetify Component Mapping

| Feature | Vuetify Component |
|---------|-------------------|
| Navigation | `v-app-bar`, `v-navigation-drawer` |
| Hero Carousel | `v-carousel`, `v-carousel-item` |
| Cards | `v-card` |
| Grids | `v-container`, `v-row`, `v-col` |
| Buttons | `v-btn` |
| Forms | `v-form`, `v-text-field`, `v-textarea` |
| Tables | `v-table` or `v-simple-table` |
| Icons | `v-icon` (Material Design Icons) |
| Dialogs | `v-dialog` (if needed) |
| Lists | `v-list`, `v-list-item` |
| Chips/Tags | `v-chip` |

---

## Color Scheme (Modernized)

```scss
// Primary palette
$primary: #F57C00;        // Orange (slightly refined)
$primary-light: #FFB74D;
$primary-dark: #E65100;

// Neutrals
$white: #FFFFFF;
$off-white: #FAFAFA;
$gray-100: #F5F5F5;
$gray-200: #EEEEEE;
$gray-600: #757575;
$gray-900: #212121;

// Accent
$accent: #0288D1;         // Blue for links/secondary actions

// Feedback
$success: #4CAF50;
$error: #F44336;
```

---

## Typography (Modernized)

```scss
// Recommended Google Fonts
$font-heading: 'Poppins', sans-serif;  // Weights: 600, 700
$font-body: 'Inter', sans-serif;        // Weights: 400, 500, 600

// Scale
$h1: 2.5rem;    // 40px
$h2: 2rem;      // 32px
$h3: 1.5rem;    // 24px
$h4: 1.25rem;   // 20px
$body: 1rem;    // 16px
$small: 0.875rem; // 14px
```
