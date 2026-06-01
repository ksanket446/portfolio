# Design System DNA: Sanket Portfolio

This file maps out the specific design tokens that must be strictly followed when implementing the website styling to guarantee pixel-perfect alignment with the Stitch designs.

## 1. Colors
*   **Background (Primary)**: `#FFFFFF` (White)
*   **Background (Alternate/Secondary Sections)**: `#F8F9FA` (Very light gray, used for About and Skills sections)
*   **Text (Primary/Headings)**: `#0F172A` (Slate 900)
*   **Text (Secondary/Descriptions)**: `#64748B` (Slate 500)
*   **Accent/Buttons**: `#0F172A` (Slate 900)
*   **Accent/Links**: `#2563EB` (Blue 600)
*   **Borders**: `#E2E8F0` (Slate 200, 1px solid)
*   **Footer Background**: `#0F172A` (Slate 900)

## 2. Typography (Google Fonts: DM Sans)
*   **H1 (Hero Name)**: 76px size / 800 weight (extrabold)
*   **Section Headings**: 44px size / 700 weight (bold)
*   **Card Headings/Titles**: 20px size / 600 weight (semibold)
*   **Body Text**: 17px size / 400 weight (normal)

## 3. Spacing System & Grid
*   **Section Padding**: 120px top and bottom (`py-[120px]`)
*   **Max-Width Container**: 1200px (`max-w-[1200px]`, centered with `mx-auto`)
*   **Card Padding**: 24px (`p-6`)
*   **Navbar Height**: Standard fixed top with sticky blur.

## 4. Shapes & Radii
*   **Card Radius**: 12px (`rounded-xl`)
*   **Button Radius**: 8px (`rounded-lg`)
*   **Pill Buttons/Badges**: Fully rounded (`rounded-full`)
*   **Avatar Image Radius**: `rounded-2xl` with aspect ratio `3/4`

## 5. Animation Hints (Framer Motion)
*   **Scroll Reveal**: Use `whileInView` or `useInView` to fade and slide up components (`opacity: 0, y: 20` to `opacity: 1, y: 0`).
*   **Hover States (Cards)**: Smooth spring lift `whileHover={{ y: -6 }}`.
*   **Duration**: Under 0.6s for all transitions, stagger reveals by 0.1s for lists/grids.

## Reference Style
Apple.com + Linear.app + Vercel.com (Minimal, editorial, no gradients, no glassmorphism, no neon, no dark heroes).
