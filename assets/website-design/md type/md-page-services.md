---
name: Vertical Industrial System
colors:
  surface: '#f6faf9'
  surface-dim: '#d6dbda'
  surface-bright: '#f6faf9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f4f4'
  surface-container: '#eaefee'
  surface-container-high: '#e4e9e8'
  surface-container-highest: '#dfe3e3'
  on-surface: '#171d1c'
  on-surface-variant: '#3d4949'
  inverse-surface: '#2c3131'
  inverse-on-surface: '#edf2f1'
  outline: '#6d7979'
  outline-variant: '#bcc9c8'
  surface-tint: '#006a6a'
  primary: '#006767'
  on-primary: '#ffffff'
  primary-container: '#008282'
  on-primary-container: '#f3fffe'
  inverse-primary: '#6fd7d6'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e4e2e1'
  on-secondary-container: '#656464'
  tertiary: '#5b5c5c'
  on-tertiary: '#ffffff'
  tertiary-container: '#737575'
  on-tertiary-container: '#fdfcfc'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#8cf3f3'
  primary-fixed-dim: '#6fd7d6'
  on-primary-fixed: '#002020'
  on-primary-fixed-variant: '#004f4f'
  secondary-fixed: '#e4e2e1'
  secondary-fixed-dim: '#c8c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#474747'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#f6faf9'
  on-background: '#171d1c'
  surface-variant: '#dfe3e3'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  max-width: 1280px
---

## Brand & Style

This design system is built for **ТОО Taraz lift service**, a company specializing in the installation and maintenance of elevators. The brand personality is rooted in **safety, precision, and engineering reliability**. 

The design style is **Corporate / Modern with Industrial influences**. It utilizes a structured, high-contrast visual language to evoke a sense of technical expertise and stability. The interface avoids unnecessary decorative elements, favoring functional clarity and a clean, systematic arrangement that mirrors the mechanical precision of vertical transportation systems.

**Emotional Response:**
- **Trust:** Solid colors and structured layouts reassure the user of the company's professionalism.
- **Efficiency:** Fast-loading, high-contrast elements suggest technical proficiency.
- **Safety:** Clear typography and prominent calls-to-action prioritize information hierarchy and ease of use.

## Colors

The palette is derived directly from the corporate identity, emphasizing high visibility and industrial strength.

- **Teal (#008B8B):** The primary action color. It represents technology and precision. Used for buttons, progress indicators, and key iconography.
- **Dark Charcoal (#333333):** The secondary color, used for headers, primary text, and structural elements. It provides the "heavy" industrial grounding.
- **Light Gray (#E0E0E0):** Used for subtle borders, background sections, and disabled states to maintain a clean, organized look.
- **High Contrast:** Text is kept at near-black (#1A1A1A) on white backgrounds to ensure maximum readability for technical documentation and service requests.

## Typography

The design system utilizes **Inter** for all typographic needs. Its neutral, systematic, and utilitarian character reinforces the engineering feel of the brand.

- **Headlines:** Set in Bold or SemiBold weights to establish a clear hierarchy. Large display sizes use tight letter spacing for a modern, impactful look.
- **Body Text:** Set with generous line heights (1.5x+) to ensure long technical descriptions remain legible.
- **Labels:** Uppercase styling is used for small UI labels (like status chips or table headers) to provide an authoritative, industrial aesthetic.
- **Language Support:** All styles fully support the Cyrillic alphabet for Russian-language content.

## Layout & Spacing

The layout philosophy follows a **Fluid Grid** model with strict adherence to a 4px baseline shift to maintain mathematical precision.

- **Grid:** A 12-column grid is used for desktop (breakpoints at 1024px+), shifting to 4 columns for mobile. 
- **Margins:** Desktop layouts use a 64px safety margin, while mobile drops to 16px to maximize screen real estate.
- **Rhythm:** Vertical spacing between sections should be 40px (xl) or 80px (2xl) to allow the "industrial" elements room to breathe.
- **Alignment:** All content is left-aligned to mirror the reading pattern of technical manuals and service logs.

## Elevation & Depth

To maintain a professional and "flat-engineering" aesthetic, the design system uses **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows.

- **Planes:** Surfaces are distinguished by color shifts (e.g., a Light Gray surface against a White background) rather than elevation.
- **Borders:** 1px solid borders in #E0E0E0 are used to define card boundaries and input fields, providing a "blueprint" feel.
- **Focus States:** When an element requires depth (like an active modal), use a very soft, high-diffusion shadow: `0px 4px 20px rgba(0, 0, 0, 0.08)`.
- **Dividers:** Use horizontal lines in #E0E0E0 to separate list items, reinforcing the structured, grid-based nature of the service.

## Shapes

The shape language is **Soft (0.25rem)**. 

While the logo contains circular elements, the UI components use subtle rounding to maintain a balance between "industrial hardness" and "modern friendliness."
- **Small Components:** Buttons and Inputs use a 4px (0.25rem) radius.
- **Large Components:** Cards and Modals use an 8px (0.5rem) radius.
- **Circular elements:** Only used for profile avatars or specific status indicators (e.g., elevator floor numbers in a circle) to mimic physical elevator buttons.

## Components

### Buttons
- **Primary:** Background #008B8B, Text #FFFFFF. Solid, bold, and high-contrast.
- **Secondary:** Border 1px #333333, Text #333333. No background.
- **States:** Hover states should darken the background by 10%. Active states should utilize a subtle inner shadow.

### Input Fields
- **Styling:** 1px border in #E0E0E0 with a white background. Labels are always visible above the field in Label-MD typography.
- **Focus:** 2px border in #008B8B.

### Cards
- **Construction:** White background, 1px #E0E0E0 border, 4px corner radius. No shadow.
- **Usage:** Used for service packages, project portfolios, and news items.

### Chips/Status Indicators
- **Style:** Small, capitalized text in a pill shape. 
- **Colors:** Use #008B8B for "Active" or "Completed," and #333333 for "Pending" or "Draft."

### Lists & Tables
- **Design:** Essential for technical data. Use #F8F9F9 for alternating row stripes (zebra striping) to aid horizontal scanning of elevator specifications and maintenance dates.

### Iconography
- **Style:** Line icons with a 2px stroke weight. Match the stroke color to #333333 or #008B8B. Avoid filled icons unless used for status indicators.