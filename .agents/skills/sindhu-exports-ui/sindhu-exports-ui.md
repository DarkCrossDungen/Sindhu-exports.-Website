---
name: sindhu-exports-ui
description: Builds and enhances the Sindhu Exports website UI. Use this skill for every UI task, component, page, animation, or styling decision in this project. Ensures the Industrial Opulence theme from the Stitch prototype is preserved exactly while adding life through micro-interactions and animations.
---

# Sindhu Exports UI Skill

This skill governs every visual and interactive decision for the Sindhu Exports website. The Stitch prototype is the foundation — never change its core theme, colors, layout, or structure. Only ADD life to it through animations, micro-interactions, and small details.

---

## When to use this skill

- Use this when building any page or component
- Use this when adding animations or hover effects
- Use this when styling buttons, cards, forms, or text
- Use this when making anything interactive
- Use this when the user asks to "bring the website to life"
- Use this for every single UI decision in this project

---

## Core Rule — Never Break the Stitch Prototype Theme

The Stitch prototype already defines the look of this website. The agent must:

- NEVER change the background colors
- NEVER change the font family
- NEVER change the gold or blue accent colors
- NEVER redesign any section layout
- NEVER add new colors that are not in the palette
- ONLY add animations, micro-interactions, and small life-giving details on top of what exists

---

## Design System

### Colors — Use These Exactly
```
Background              : #121416
Surface                 : #121416
Surface Container       : #1e2022
Surface Container Low   : #1a1c1e
Surface Container High  : #282a2c
Surface Container High  : #333537
Surface Container Lowest: #0c0e10

Gold Primary            : #f2ca50   (logo, prices, highlights, primary buttons)
Gold Dark               : #d4af37   (gradients, scrollbar thumb)
On Gold                 : #3c2f00   (text ON gold backgrounds)

Electric Blue           : #3B82F6   (links, secondary buttons, hover states)

Text Primary            : #e2e2e5
Text Secondary          : #d0c5af
Border                  : #99907c
Border Subtle           : #4d4635

Success                 : #10B981
Warning                 : #F59E0B
Error                   : #F43F5E
```

### Font — Manrope Only
```
Google Font : Manrope (weights 400, 500, 600, 700, 800)
Hero        : Manrope 800 · UPPERCASE · tracking-tighter
Headings    : Manrope 700 · UPPERCASE
Body        : Manrope 400
Labels      : Manrope 700 · UPPERCASE · tracking-widest
NEVER use Inter, Roboto, Arial, or system fonts
```

### Icons — Material Symbols Outlined
```
Style setting : FILL 0, wght 300, GRAD 0, opsz 24
```

### Required Tailwind Config
```javascript
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f2ca50",
        "primary-container": "#d4af37",
        "on-primary": "#3c2f00",
        "secondary-blue": "#3B82F6",
        background: "#121416",
        surface: "#121416",
        "on-surface": "#e2e2e5",
        "on-surface-variant": "#d0c5af",
        "surface-container": "#1e2022",
        "surface-container-low": "#1a1c1e",
        "surface-container-high": "#282a2c",
        "surface-container-highest": "#333537",
        "surface-container-lowest": "#0c0e10",
        outline: "#99907c",
        "outline-variant": "#4d4635",
        success: "#10B981",
        warning: "#F59E0B",
        error: "#F43F5E",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      fontFamily: {
        display: ["Manrope"],
        headline: ["Manrope"],
        body: ["Manrope"],
        label: ["Manrope"],
      },
    },
  },
};
```

### Required Custom CSS — Always Include
```css
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}

/* Gold scrollbar — never remove */
::-webkit-scrollbar { width: 4px; height: 4px; }
::-webkit-scrollbar-track { background: #0F0F0F; }
::-webkit-scrollbar-thumb { background: #D4AF37; border-radius: 2px; }

/* Gold selection highlight */
::selection { background: #f2ca50; color: #3c2f00; }

/* Lookbook text stroke effect */
.text-stroke {
  -webkit-text-stroke: 1px rgba(212, 175, 55, 0.3);
  color: transparent;
}

/* Marquee ticker */
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  display: flex;
  white-space: nowrap;
  animation: marquee 30s linear infinite;
}
.animate-marquee:hover {
  animation-play-state: paused;
}

/* Hide scrollbar on horizontal strips */
.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

/* Hero image floating */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Button press effect */
.btn-press:active {
  transform: scale(0.97);
}

/* Gold shimmer on logo */
@keyframes shimmer {
  0%, 90%, 100% { opacity: 1; }
  95% { opacity: 0.6; }
}
.animate-shimmer {
  animation: shimmer 5s ease-in-out infinite;
}
```

---

## How to Build Every Component

### Decision tree — before building any component ask:
1. Does it exist in the Stitch prototype? → Match it exactly first
2. Does it need animation? → Add Framer Motion on top
3. Does it need micro-interactions? → Add from the list below
4. Is it mobile? → Test at 375px always

---

## Micro-Interactions — Add These to Every Component

These small details bring the website to life. Add ALL of them:

### Buttons
- Scale down to 0.97 on click (active state)
- Smooth color transition 200ms on hover
- Primary gold button: hover adds brightness(1.1)
- Blue outlined button: hover fills with blue background
- Add subtle shadow on hover: shadow-lg shadow-primary/20 or shadow-secondary-blue/20
- Cursor changes to pointer always

### Navigation Links
- Thin underline slides in from left on hover (use ::after pseudo with scaleX transform)
- Color transitions 300ms ease
- Logo: gold shimmer pulse animation every 5 seconds

### Product Cards
- Image scales to 1.10 on card hover (duration 500-700ms)
- "Add to Bag" overlay slides UP from bottom (translateY 100% → 0)
- Wishlist heart icon: opacity 0 → 1 on hover, scale bounce on click
- Card lifts slightly: hover:-translate-y-1 transition-transform
- Price color stays gold always

### Category Cards
- Image scales 1.10 on hover (duration 700ms)
- Category name color changes to gold or blue on hover (alternate)
- Subtle brightness increase on hover

### Form Inputs
- Border bottom lights up in blue on focus (transition 300ms)
- Label slides up and shrinks on focus (floating label effect)
- Submit button: loading spinner appears while submitting
- Success: green checkmark fades in with scale animation
- Error: red shake animation on invalid input

### Stats Numbers
- Count up from 0 to final number when scrolled into view
- Use Framer Motion useInView + animate value
- Duration: 2 seconds with easeOut

### Marquee Strip
- Pauses smoothly on hover
- Resumes on mouse leave

### Social Media Icons
- Scale 1.15 on hover
- Color fills in on hover (gold or blue)
- Subtle background circle expands on hover

### Scroll Animations (ALL sections)
- Every section fades up: opacity 0 + translateY(30px) → opacity 1 + translateY(0)
- Duration: 0.7s ease
- Stagger children: 0.1s delay each child
- Trigger once using whileInView viewport once:true

### Admin Dashboard Cards
- Ghost icon in top-right corner scales up on card hover
- Metric number ticks up on page load
- Row highlights on table hover
- Status badges pulse gently (shipped/processing)

### Hero Section
- Headline words fade in one by one on page load (stagger 0.2s)
- Buttons fade up after headline (delay 0.6s)
- Hero image fades in from right (delay 0.3s)
- Floating animation on hoodie image (animate-float class)

### Footer Newsletter
- Arrow button slides right 8px on hover
- Input border bottom lights up on focus

### About Us Link
- Horizontal line expands from w-12 to w-20 on hover
- Smooth transition 300ms

### Lookbook Section
- Background image very slowly scales on hover (scale 1.05, duration 1000ms)
- Text stroke gold outline glows subtly

---

## Framer Motion Patterns — Use These

```javascript
// Standard fade up for sections
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }
}

// Stagger container
const staggerContainer = {
  initial: {},
  whileInView: {
    transition: { staggerChildren: 0.1 }
  },
  viewport: { once: true }
}

// Stagger child item
const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

// Card hover
const cardHover = {
  whileHover: { y: -4 },
  transition: { duration: 0.2 }
}

// Button press
const buttonPress = {
  whileTap: { scale: 0.97 }
}

// Count up numbers
// Use framer-motion useMotionValue + useTransform + animate
// Trigger with useInView

// Page load hero sequence
// headline: delay 0.2s
// subtext: delay 0.4s
// buttons: delay 0.6s
// image: delay 0.3s fade from right
```

---

## Page-by-Page Rules

### Landing Page
- Match Stitch prototype exactly section by section
- Add all micro-interactions listed above
- Add Framer Motion fadeUp to every section
- Add floating animation to hero hoodie image
- Add count-up to stats numbers
- Add marquee pause on hover
- Lookbook: 5 blocks (Men, Women, Kids, Hoodie, Tie & Dye)

### Shopping Page
- Kith.com + Shakawear.com grid inspiration for THIS PAGE ONLY
- Filter sidebar on left with gold checkboxes and price slider
- 3 column grid desktop, 2 tablet, 1 mobile
- Add to Bag slides up from bottom on card hover
- New Arrival badge on relevant products
- Bulk order banner strip inside page
- Gold active pagination

### Product Page
- 4 image gallery with gold border on selected thumbnail
- Size selector: selected = gold bg
- Both ₹ and $ pricing shown
- Add to Cart = gold button
- Request Bulk Order = blue outlined button
- Fabric info in small dark grid
- "Ships from Tamil Nadu, India & United States"

### Cart Page
- Dark theme matching rest of site
- Gold prices
- Gold checkout button (placeholder — no payment yet)
- Blue bulk order note link

### Admin Dashboard
- Match Stitch admin prototype exactly
- Firebase Auth protects this route
- Gold and blue metric accents
- Pulsing status badges

---

## Pricing Rules

```
Always show both currencies:
Format  : "₹1,499 / $18"
Color   : text-primary (gold)
Bulk    : "₹1,200 / $14 (50+ units)"
```

---

## Dual Office Identity

```
India  : text-primary label · Tamil Nadu address · ₹ first · "Made in India" tag
US     : text-secondary-blue label · [owner to provide] · $ second
         Show "United States Office — Coming Soon" until owner provides address
Both   : "Ships from Tamil Nadu, India & United States" on product pages
```

---

## Tech Stack

```
Framework   : Next.js 14 App Router
Styling     : Tailwind CSS with exact config above
Animations  : Framer Motion
Icons       : Material Symbols Outlined
Font        : Manrope via Google Fonts
Database    : Firebase Firestore
Auth        : Firebase Authentication
Storage     : Firebase Storage
Hosting     : Vercel
Payment     : Placeholder only — DO NOT add until owner confirms
```

---

## Final Checklist Before Completing Any Task

- [ ] Colors match Stitch prototype exactly
- [ ] Font is Manrope only
- [ ] Gold scrollbar CSS is present
- [ ] Framer Motion fadeUp added to section
- [ ] Micro-interactions added to all buttons and cards
- [ ] Both ₹ and $ shown on products
- [ ] Mobile responsive tested at 375px
- [ ] No API keys hardcoded
- [ ] Core Stitch theme unchanged
