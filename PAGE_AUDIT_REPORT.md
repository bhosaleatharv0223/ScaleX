# Website Audit Report

## Summary
This audit reviews the current website sections and identifies image usage, responsive sizing behavior, and potential mobile layout risks. No code changes were made.

## 1. Home Page

### Hero
- Images:
  - `/herosectionbackground.png` — 1536x1024
  - `/herosectionbackground2.png` — 1536x1024
  - `/herosectionbackground3.png` — 1672x941
  - `/herosectionbackground4.png` — 1672x941
- Rendered sizing:
  - Desktop: full viewport width, height determined by `min-h-screen` / `md:min-h-[90vh]`
  - Mobile: full width, height ~100vh
- CSS:
  - `absolute inset-0`, `w-full h-full`, `object-cover`
  - crossfade animation between images
- Responsive/cropping:
  - uses `object-cover`, so image content is cropped to fill the hero area
  - no explicit `object-position`; crop centers by default

### Trusted By / Marquee
- Logos used:
  - `/logos/godrej-properties.png` — 556x130
  - `/logos/lodha-group.jpg` — 441x129
  - `/logos/prestige-group.jpg` — 881x1088
  - `/logos/brigade-group.jpg` — 568x578
  - `/logos/oberoi-realty.webp` — 179x92
  - `/logos/mahindra-lifespaces.png` — 1092x281
  - `/logos/shapoorji-pallonji.jpg` — 392x201
  - `/logos/sobha-limited.webp` — 246x280
- Rendered sizing:
  - Desktop: logo slot min-width 160px, height 52px
  - Mobile: slot min-width 110px, height 40px
- CSS:
  - inline `min-width` / `height`
  - `img` uses `w-auto object-contain`
  - `gap-16` desktop, `gap: 12px` mobile
- Responsive/cropping:
  - logos preserve aspect ratio with `object-contain`
  - varying source ratios mean some logos appear smaller than others

### Platforms & Tools
- Platform logos rendered via `img` with `h-10 w-auto object-contain`
- Cards use responsive grid: 1 / 2 / 3 / 6 columns
- No image stretch.

### Approach Statement
- No images
- Responsive text and cards appear well scaled

### Service Pillars
- No images
- Cards use grid 1 / 2 / 3 columns

### Our Method
- No images
- Cards use responsive grid and stack on mobile

### Big Stats Band
- No images
- Numeric text scales with breakpoints

### Home Case Studies
- Images from external Unsplash URLs
- Rendered inside `aspect-[4/3]` containers with `object-cover`
- Crop is center-based; image top/bottom can be clipped on narrow screens

### Testimonials
- No images
- Slider content is responsive

### Final CTA
- No images
- Text and button are responsive

## 2. Services Page

### Hero
- Image: `/servicesedit2.png` — 1536x1024
- CSS:
  - `absolute inset-0`, `h-full w-full`, `object-cover`
  - overlay gradient `bg-gradient-to-b from-black/50 via-black/20 to-black/20`
- Crop:
  - `object-cover` crops content to fit the hero section

### Service Cards
- No images
- Cards are responsive and use `ServiceCard`

### Mandate Partner Section
- No images
- Card layout is responsive with `rounded-[2.5rem]`

### Closing CTA
- No images

## 3. About Page

### Hero
- Image: `/aboutusedit.png` — 1819x865
- CSS:
  - `absolute inset-0`, `h-full w-full`, `object-cover`
- Crop:
  - `object-cover` centered crop

### Philosophy Cards
- No images
- Responsive grid stacks at mobile widths

### Audience Cards
- No images
- Responsive grid 1 / 2 columns

### Closing Manifesto
- No images

## 4. Case Studies Page

### Hero
- Image: `/case studies1.png` — 1535x1024
- CSS:
  - `absolute inset-0`, `h-full w-full`, `object-cover object-top`
- Crop:
  - `object-top` preserves top area but crops bottom/side as needed

### Category Filter
- No images
- Buttons are `flex-shrink-0` and scroll horizontally inside the filter row

### Case Study Cards
- External images in `aspect-[4/3]` containers
- `object-cover` crop is center-based

### Stats Band
- No images

## 5. Contact Page

### Background
- Image: `/contactus.png` — 1717x916
- CSS:
  - `bg-[url('/contactus.png')]`, `bg-cover`, `bg-center`, `bg-no-repeat`
- Crop:
  - `background-size: cover` crops content to fill

### Form and Info
- No images
- Inputs are `w-full`, form stacks on mobile

### Map Embed
- iframe height fixed at `h-[280px]`

## 6. Footer
- Logo rendered via `ImageWithFallback` as `h-10 w-auto`
- Responsive 1 / 4 column grid

## 7. Fixed-size risks
- `LogoMarquee` uses fixed min-widths: 160px desktop, 110px mobile
- Hero sections use `object-cover` and `bg-cover`, causing crop on smaller screens
- Multiple sections use fixed padding values: `p-6`, `p-8`, `py-24`, `pt-28`, etc.
- Contact page iframe uses fixed height `h-[280px]`
- Large heading font sizes could produce tall sections, though not horizontal overflow

## 8. Horizontal Scroll Assessment
- No explicit cross-page horizontal scroll source found in code
- The category filter on Case Studies intentionally scrolls horizontally
- The marquee is full-bleed but uses overflow-hidden

## Notes
- Rendered desktop/mobile sizes were inferred from responsive class rules, not live browser measurement.
- No modifications were made.
