# SINDHU EXPORTS — AGENT BLUEPRINT
> Read this entire file before starting any task. This is the master reference built from the actual Stitch prototype. Match the design exactly and enhance it with vibrant life.

---

## 🏢 BRAND IDENTITY

| Detail | Info |
|--------|------|
| **Brand Name** | SINDHU EXPORTS |
| **Tagline** | "Industrial Opulence" |
| **Industry** | Garment Manufacturing & Export |
| **Founded** | 2007 |
| **India Location** | No. 12/4 Industrial Estate, Tiruppur, Tamil Nadu — 641601, India |
| **US Location** | [TO BE ADDED BY OWNER] |
| **Contact** | +91 98765 43210 · info@sindhuexports.com |
| **Specialty** | T-Shirts · Hoodies · Tie & Dye · Kids · Men · Women |
| **Achievements** | 50+ Successful International Shipments |
| **Audience** | B2B Wholesale · Retail Customers · International Exporters |
| **Language** | English only |
| **Social** | Facebook · X (Twitter) · WhatsApp Business |

---

## 🎨 DESIGN SYSTEM — FROM STITCH PROTOTYPE

### This is the "Industrial Opulence" theme — dark luxury with gold and electric blue accents.

### Color Palette
```css
--background                : #121416;
--surface                   : #121416;
--surface-container         : #1e2022;
--surface-container-low     : #1a1c1e;
--surface-container-high    : #282a2c;
--surface-container-highest : #333537;
--surface-container-lowest  : #0c0e10;
--primary                   : #f2ca50;   /* GOLD */
--primary-container         : #d4af37;
--on-primary                : #3c2f00;
--secondary-blue            : #3B82F6;   /* ELECTRIC BLUE */
--accent-purple             : #8B5CF6;   /* VIBRANT PURPLE */
--accent-cyan               : #06B6D4;   /* ELECTRIC CYAN */
--on-surface                : #e2e2e5;
--on-surface-variant        : #d0c5af;
--outline                   : #99907c;
--outline-variant           : #4d4635;
--success                   : #10B981;
--warning                   : #F59E0B;
--error                     : #F43F5E;

/* BACKGROUND GLOW SYSTEM — dark base + vivid color splashes */
--glow-gold    : radial-gradient(ellipse at top left, rgba(242,202,80,0.15) 0%, transparent 60%);
--glow-blue    : radial-gradient(ellipse at bottom right, rgba(59,130,246,0.15) 0%, transparent 60%);
--glow-purple  : radial-gradient(ellipse at top right, rgba(139,92,246,0.12) 0%, transparent 60%);
--glow-cyan    : radial-gradient(ellipse at bottom left, rgba(6,182,212,0.1) 0%, transparent 60%);
/* NOTE: No orange or rose — palette is Gold · Blue · Purple · Cyan only */
```

### Typography
```
Font           : Manrope (Google Fonts) — ALL text
Display/Hero   : Manrope · ExtraBold 800 · Uppercase · tight tracking
Headings       : Manrope · Bold 700 · Uppercase
Body           : Manrope · Regular 400
Labels         : Manrope · Bold · Uppercase · wide letter spacing
Scrollbar      : 4px · track #0F0F0F · thumb #D4AF37
Selection      : bg-primary · text-on-primary
```

### Tailwind Config (exact)
```javascript
colors: {
  primary: "#f2ca50",
  "secondary-blue": "#3B82F6",
  background: "#121416",
  surface: "#121416",
  "on-primary": "#3c2f00",
  "on-surface": "#e2e2e5",
  "on-surface-variant": "#d0c5af",
  "surface-container": "#1e2022",
  "surface-container-low": "#1a1c1e",
  "surface-container-high": "#282a2c",
  "surface-container-highest": "#333537",
  "surface-container-lowest": "#0c0e10",
  outline: "#99907c",
  "outline-variant": "#4d4635",
  "primary-container": "#d4af37",
}
borderRadius: { DEFAULT: "0.25rem", lg: "0.5rem", xl: "0.75rem", full: "9999px" }
fontFamily: { display: "Manrope", headline: ["Manrope"], body: ["Manrope"], label: ["Manrope"] }
```

### Custom CSS (keep always)
```css
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}
::-webkit-scrollbar { width: 4px; height: 4px; }
::-webkit-scrollbar-track { background: #0F0F0F; }
::-webkit-scrollbar-thumb { background: #D4AF37; }
.text-stroke {
  -webkit-text-stroke: 1px rgba(212, 175, 55, 0.3);
  color: transparent;
}
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  display: flex;
  white-space: nowrap;
  animation: marquee 30s linear infinite;
}
.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
```

---

## 🌟 BRING IT TO LIFE — ENHANCEMENT RULES

The Stitch prototype is the base. Enhance with:

### Micro Interactions
- Logo: subtle gold shimmer pulse every 5 seconds
- Buttons: scale(0.98) on click (active state)
- Product cards: "Add to Bag" overlay slides up from bottom smoothly
- Stats numbers: count-up animation when scrolled into view
- Category cards: text color shifts to gold/blue on hover
- Form inputs: border-bottom lights up blue on focus
- Marquee: pauses on hover
- Footer newsletter arrow: slides right on hover
- Nav links: thin gold underline slides in from left on hover

### Scroll Animations (Framer Motion)
- All sections: fade up from translateY(30px) opacity 0 → 1
- Stagger children by 0.1s delay each
- Lookbook: sticky scroll with background image scale on hover
- Stats: number counter triggers once on scroll into view

### Visual Enhancements
- Subtle grain texture overlay on hero (opacity 0.03)
- **Hero background**: layered radial glow orbs — gold top-left + blue bottom-right
- **Section backgrounds**: rotate through glow themes — purple, cyan splashes (no orange/rose)
- Gradient section dividers: gold → transparent or blue → transparent
- Gold/blue left border on bulk inquiry priority cards
- Hover on cards: vivid glow (gold or blue) box-shadow pulse
- **Lookbook**: each sticky block has a different accent color wash
- **Stats strip**: each number has its own color — gold, blue, purple, cyan
- Some section headings use gradient text (gold → primary-container or blue → cyan)
- Background of some sections: dark + subtle diagonal gradient stripe
- "Industrial Opulence" tagline: gradient text gold → #d4af37 (amber-gold)
- Buttons: inner glow on hover matching accent color

---

## 📄 PAGE 1 — LANDING PAGE

### Navbar
```
bg-background/95 · backdrop-blur-md · border-b border-outline · fixed top-0 z-50
Logo           : "Sindhu Exports" · text-primary · font-black · uppercase · tracking-tighter
Links          : text-on-surface-variant · hover:text-primary · text-xs · uppercase · tracking-widest
"About Us"     : hover:text-secondary-blue
"New Arrivals" : text-primary · border-b border-primary (always active styled)
Icons          : search(hover:text-secondary-blue) · cart · account (hover:text-primary)
Mobile         : hamburger → full screen dark overlay menu
```

### Hero Section
```
min-h-screen · flex items-center · overflow-hidden
Left 50%       :
  Headline     : "Crafted In INDIA. Worn By The WORLD."
               : "India" = text-primary · "World" = text-secondary-blue
               : text-6xl md:text-9xl · font-extrabold · leading-[0.9] · uppercase
  Buttons      :
    "Shop Now" : bg-primary · text-on-primary
    "Request Bulk Order" : border border-secondary-blue · text-secondary-blue
                           hover: bg-secondary-blue · text-white

Right 50%      :
  Image        : grayscale · opacity-60 · mix-blend-luminosity
               : gradient overlay: transparent → background (left side)
               : ADD floating animation → translateY up/down 3s ease-in-out infinite
```

### Marquee Ticker
```
bg-surface · border-y border-primary/20 · py-8
Text           : text-primary · font-black · text-3xl · uppercase
"50+ SHIPMENTS": text-secondary-blue
Content        : · SINCE 2007 · 50+ SHIPMENTS · TIE & DYE · BULK ORDERS · MADE IN INDIA · TAMIL NADU · HOODIES · T-SHIRTS · WORLDWIDE EXPORTS ·
Pause on hover : animation-play-state: paused
```

### Stats Strip
```
grid-cols-2 md:grid-cols-4 · border-b border-outline
2007  → text-primary    · "Est. Year"
50+   → text-secondary-blue · "Shipments"
3+    → text-primary    · "Countries"
100%  → text-secondary-blue · "Made From Scratch"
Numbers: text-4xl · font-black · count-up on scroll
Labels : text-on-surface-variant · text-xs · uppercase · tracking-[0.2em]
```

### Categories Section
```
Eyebrow        : "Departmental Catalog" · text-secondary-blue · text-xs · tracking-[0.5em]
Layout         : grid-cols-1 md:grid-cols-4 · gap-6 · min-h-[800px]

Men            : col-span-2 row-span-2 (large) · hover text → text-primary italic
Women          : normal · hover → text-secondary-blue
Kids           : normal · hover → text-primary
Hoodie         : normal · hover → text-secondary-blue
Tie & Dye      : normal · hover → text-primary

Each card      : relative · group · overflow-hidden · bg-surface · rounded
Image          : grayscale · group-hover:scale-110 · duration-700
Overlay        : bg-background/40 · items-end · p-6/p-8
Text           : white · font-black · uppercase
```

### New Arrivals Strip
```
"New ARRIVALS" : text-white + "Arrivals" text-secondary-blue · text-4xl md:text-5xl
Nav buttons    : chevron left/right · border-outline · hover:border-secondary-blue
Scroll         : horizontal · snap-x · hide-scrollbar

Each card      :
  Image        : aspect-[3/4] · grayscale · hover:scale-110 · duration-500
  Name         : font-bold · uppercase · hover:text-secondary-blue
  Subtitle     : text-on-surface-variant · text-sm
  Price        : text-primary · font-bold · show ₹ / $

Products       :
  - Oversized Industrial Tee · ₹1,499 / $18
  - Core Crewneck · ₹2,899 / $35
  - Elite Hoodie · ₹3,499 / $42
  - Tie & Dye Drop Tee · ₹1,299 / $16
  - Kids Essential Tee · ₹799 / $10
  - Women's Crop Hoodie · ₹2,499 / $30
  - Classic Polo · ₹1,199 / $15
  - Zip-Up Hoodie · ₹3,999 / $48
```

### About Us Section
```
Left           : bg-background · p-12 md:p-24 · flex-col justify-center
  Eyebrow      : "Our Legacy" · text-secondary-blue · text-xs · tracking-[0.5em]
  Headline     : "The Industrial Atelier of TAMIL NADU."
               : "Tamil Nadu" = text-primary
  Body         : "Since 2007, Sindhu Exports has been at the forefront of textile excellence.
                  We engineer garments from the heart of Tamil Nadu's industrial hub, controlling
                  every thread from spinning to final stitch, ensuring 'Made in India' stands
                  for uncompromising global quality."
  Link         : animated expanding line + "Read Full Story" · text-secondary-blue

Right          : h-[600px] · overflow-hidden · grayscale · brightness-75 image
```

### Services Section
```
3 cards on dark bg:
  Card 1 : "Made From Scratch" — every garment hand-crafted in Tamil Nadu
  Card 2 : "Tie & Dye Designs" — custom patterns for bulk and retail
  Card 3 : "Bulk & Wholesale" — flexible MOQ for global exporters
Style    : bg-surface-container · border border-outline/30
         : hover: border-primary/50 transition-all
```

### Lookbook Scroll Section
```
5 sticky blocks · h-screen each:
  Block 1: Men       · bg-background
  Block 2: Women     · bg-surface
  Block 3: Kids      · bg-background
  Block 4: Hoodie    · bg-surface
  Block 5: Tie & Dye · bg-background

Each        : image absolute · grayscale · opacity-30 · hover:scale-105 · duration-1000
Center text : text-stroke gold · text-7xl md:text-9xl · font-black · uppercase
```

### Wholesale Inquiry Form
```
Left side      :
  Headline     : "Wholesale INQUIRIES" · "Inquiries" = text-secondary-blue
  Body         : text-on-surface-variant
  Checklist (4 items with check_circle blue icons):
    ✓ Low MOQs — Flexible entry for emerging brands
    ✓ Global Shipping — Door-to-door, full customs handling
    ✓ US & India Offices — Dual presence for global reliability
    ✓ 15+ Years Experience — Trusted by brands worldwide

Right form     : bg-background/50 · rounded-xl · border border-outline/30 · backdrop-blur
  Fields       : Name · Company · Country · Email · WhatsApp/Phone
               : Product Type (dropdown) · Quantity Required · Additional Notes
  Inputs       : transparent · border-bottom · focus:border-secondary-blue
  Submit       : bg-secondary-blue · full width · font-black · uppercase
  Success      : gold checkmark + "Thank you! We'll contact you within 24 hours."
  Save to      : Firebase "bulk_inquiries"
```

### Contact Section
```
Left           :
  "Get In TOUCH" · "Touch" = text-secondary-blue

  India Office : text-primary label
    No. 12/4 Industrial Estate, Tiruppur, Tamil Nadu - 641601, India

  US Office    : text-secondary-blue label
    [OWNER TO PROVIDE — show "United States Office — Details Coming Soon" until then]

  Direct Lines : +91 98765 43210 · info@sindhuexports.com
  Social       : Facebook · X · WhatsApp icons
  Download Catalog button : border-primary · hover:bg-primary

Right          : grayscale map image · "Explore Location" btn bg-secondary-blue
```

### Social Media Section
```
"CONNECT WITH US" · centered
Facebook   → hover:border-primary hover:text-primary
X Twitter  → hover:border-secondary-blue hover:text-secondary-blue
WhatsApp   → hover:border-primary hover:text-primary
```

### Footer
```
4 columns:
  Col 1 : Logo gold · tagline · "© 2024 Sindhu Exports. INDUSTRIAL OPULENCE."
          "Industrial" = text-primary · "Opulence" = text-secondary-blue
  Col 2 : Quick Links (all categories) · hover alternating gold/blue
  Col 3 : Support links
  Col 4 : Newsletter · email input · arrow button hover:translate-x-2
```

---

## 📄 PAGE 2 — SHOPPING PAGE

> Kith + Shakawear grid inspiration. Same Industrial Opulence dark theme.

```
Filter sidebar : "Refine Search" · Category checkboxes (gold checked)
               : Price slider (gold) · Size buttons · Star ratings (gold)

Grid header    : Category name · "Showing X of Y" · Sort dropdown

Product card   : (from Stitch shopping prototype)
  Image        : aspect-[3/4] · rounded-xl · hover:scale-110 · duration-700
  Add to Bag   : gradient from-primary to-primary-container · slides up on hover
  Badge        : "New Arrival" · text-primary · rounded-full
  Name         : font-bold · text-on-surface
  Category tag : text-secondary/60 · uppercase · tracking-widest
  Price        : text-primary · font-bold · show ₹ and $

Bulk banner    : bg-surface-container · border-primary/20
               : "Need 100+ pieces?" · "REQUEST BULK QUOTE →" button

Pagination     : gold active · blue hover
```

---

## 📄 PAGE 3 — INDIVIDUAL PRODUCT PAGE

```
2 columns      : images left · details right
Gallery        : main image + 3 thumbnails · gold border on selected
Category tag   : text-secondary-blue · uppercase
Name           : font-black · text-3xl · uppercase
Price          : text-primary · text-2xl · show ₹ and $
Size selector  : selected = bg-primary text-on-primary
Color swatches : gold border on selected
Add to Cart    : bg-primary · text-on-primary · full width
Bulk Order btn : border-secondary-blue · text-secondary-blue · full width
Fabric info    : small grid · text-on-surface-variant
Shipping note  : "Ships from Tamil Nadu, India & United States"
You May Also Like : 4 product cards same style
```

---

## 📄 PAGE 4 — CART PAGE

```
Cart items     : product image (grayscale) · name · size/color · qty stepper · price · remove
Summary card   : bg-surface-container · rounded-xl · border border-outline/30
  Total        : text-white · font-black
  Checkout btn : bg-primary · text-on-primary · full width (placeholder — no payment yet)
  Bulk note    : "Ordering 50+ pieces?" · text-secondary-blue link
```

---

## 📄 PAGE 5 — ADMIN DASHBOARD

> Build exactly as Stitch admin prototype.

```
Sidebar        : fixed left · w-64 · bg-surface-container-lowest
  Logo         : gold factory icon + "Sindhu Exports" + "Management"
  Nav          : Dashboard · Inventory · Orders · Analytics · Settings
  Active       : bg-primary/10 · text-primary
  User card    : "Owner Access · Admin ID: #001"

Metrics (4)    : Total Inquiries · Pending Orders · Active Shipments · Inventory Items
Product table  : Visual · Name · SKU(gold mono) · Category · Edit/Delete actions
Bulk Inquiries : gold/warning left border by priority · "Respond Now" buttons
Order Tracking : Shipped(blue) · Processing(blue) · Delivered(green) badges
Login modal    : Firebase Auth · gold lock icon · "Authorize Entry" gold button
```

---

## 🌍 DUAL IDENTITY

### India
- "Made in India" on products
- Tamil Nadu address · ₹ pricing first
- "Crafted in Tiruppur" in descriptions

### USA
- US address (owner to provide · show placeholder until then)
- $ pricing alongside ₹
- "Ships from US & India" on product pages

---

## 💳 PAYMENT INTEGRATION — AFTER OWNER CONFIRMS READY

### Step 1 — Razorpay via MCP

```
How to add Razorpay MCP in Antigravity:
1. Open Antigravity → Agent Manager → Settings → MCP Servers
2. Click "Add MCP Server"
3. Search for "Razorpay" or add manually:
   Name    : Razorpay
   Command : npx @razorpay/mcp-server
4. Add environment variables:
   RAZORPAY_KEY_ID     = rzp_test_xxxxx  (test first)
   RAZORPAY_KEY_SECRET = xxxxx
5. Once MCP connected — tell agent:
   "Add Razorpay checkout using the Razorpay MCP server.
    Create /checkout page. On payment success save order to Firebase."
6. Test with card: 4111 1111 1111 1111
7. Switch to rzp_live_ keys when ready to go live
```

### Step 2 — Stripe via MCP (International)

```
1. Open Antigravity → MCP Servers → Add "Stripe"
   Command : npx @stripe/mcp-server
2. Environment variables:
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = pk_test_xxxxx
   STRIPE_SECRET_KEY                  = sk_test_xxxxx
3. Tell agent:
   "Add Stripe payment for international customers.
    Detect country at checkout — India = Razorpay, International = Stripe."
4. Test · then switch to live keys
```

---

## ✅ AGENT TASK CHECKLIST

- [ ] 1. Set up Next.js 14 + Tailwind CSS with exact config
- [ ] 2. Install Manrope + Material Symbols Outlined
- [ ] 3. Add all custom CSS from prototype
- [ ] 4. Configure Firebase
- [ ] 5. Build Navbar component
- [ ] 6. Build Footer component
- [ ] 7. Build Landing Page — all sections
- [ ] 8. Add Framer Motion animations + micro interactions
- [ ] 9. Build Shopping Page (Kith+Shakawear grid)
- [ ] 10. Build Individual Product Page
- [ ] 11. Build Cart Page
- [ ] 12. Build Admin Dashboard
- [ ] 13. Protect admin with Firebase Auth
- [ ] 14. Connect forms to Firestore
- [ ] 15. Add dual ₹ and $ pricing everywhere
- [ ] 16. Add India + US dual offices in contact
- [ ] 17. Full mobile responsive
- [ ] 18. Test all breakpoints
- [ ] 19. Deploy to Vercel

---

## ⚠️ AGENT RULES

1. BASE is always dark — #121416 or darker. Never pure white or light backgrounds
2. BUT add vibrant color life via: glowing orbs, gradient splashes, vivid accent sections
3. Think: 80% dark + 20% vivid color — Gold · Blue · Purple · Cyan ONLY (no orange, no rose)
4. Manrope is the only font — use everywhere
5. All product images: aspect-ratio 3/4 · grayscale by default · color on hover
6. Show both ₹ and $ on every product
7. Admin requires Firebase Auth — never expose publicly
8. Never hardcode API keys — use environment variables
9. Payment is placeholder only until owner confirms
10. Mobile responsive mandatory
11. Kith+Shakawear inspiration applies to shopping page grid only
12. Use gradient text (gold → #d4af37, blue → cyan) for major headlines — no orange/rose
13. Glow effects — radial gradient orbs in backgrounds for depth and vibrancy
14. Card hover = vivid colored glow shadow, not just border change

---

## 🚀 DO NOT BUILD YET

- Razorpay payment (wait for owner)
- Stripe payment (after Razorpay works)
- Order confirmation emails
- WhatsApp Business API
- US address (owner to provide)
- Product reviews system
- Size guide page

---

*SINDHU EXPORTS · Industrial Opulence · Tamil Nadu, India + United States · Since 2007*
