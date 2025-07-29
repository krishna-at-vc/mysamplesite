# CJ Design System - Typography Style Guide

This folder contains the typography design tokens for the project, extracted from the CJ Design System typography guide. All tokens are defined in `_typography.scss` as SCSS variables for easy reuse and consistency across the site.

## Files
- `_typography.scss`: SCSS variables, mixins, and classes for all typography tokens (Display, H1-H5, P1-P2 Body/Bold, Hyperlink, Caption).

## Font Families

### Primary Font Family
- **Font**: Malik
- **Usage**: All headings (Display, H1-H3)

### Secondary Font Family  
- **Font**: Averta STD PE
- **Usage**: Body text, smaller headings (H4-H5), paragraphs, hyperlinks, captions

## Typography Scale

### Display (cj-typography-display)
- **Desktop**: 48px / 56px line-height
- **Tablet**: 40px / 48px line-height  
- **Mobile**: 32px / 40px line-height
- **Weight**: ExtraBold (800)
- **Usage**: Homepage hero banners, Brand campaign mastheads, Major section intros

### Heading 1 (cj-typography-h1-heading)
- **Desktop**: 40px / 48px line-height
- **Tablet**: 32px / 40px line-height
- **Mobile**: 28px / 36px line-height
- **Weight**: ExtraBold (800)
- **Usage**: Top-level page titles, Featured article titles

### Heading 2 (cj-typography-h2-heading)
- **Desktop**: 32px / 40px line-height
- **Tablet**: 28px / 36px line-height
- **Mobile**: 24px / 32px line-height
- **Weight**: ExtraBold (800)
- **Usage**: Section dividers, Accordion headers, Highlights or CTAs

### Heading 3 (cj-typography-h3-heading)
- **Desktop**: 28px / 36px line-height
- **Tablet**: 24px / 32px line-height
- **Mobile**: 20px / 28px line-height
- **Weight**: ExtraBold (800)
- **Usage**: Subsections, Card titles, Section headlines

### Heading 4 (cj-typography-h4-heading)
- **Desktop**: 24px / 28px line-height
- **Tablet**: 20px / 26px line-height
- **Mobile**: 18px / 24px line-height
- **Weight**: Semibold (600)
- **Usage**: Supporting titles, Labels for structured content, Small cards

### Heading 5 (cj-typography-h5-heading)
- **Desktop**: 20px / 26px line-height
- **Tablet**: 18px / 24px line-height
- **Mobile**: 16px / 20px line-height
- **Weight**: Semibold (600)
- **Usage**: Tertiary titles, Support content, Mobile header variations

### Paragraph 1 Body (cj-typography-p1-body)
- **Desktop**: 16px / 24px line-height
- **Tablet**: 16px / 24px line-height
- **Mobile**: 14px / 20px line-height
- **Weight**: Regular (400)
- **Usage**: Key statements, Intro paragraphs, Highlighted messages

### Paragraph 1 Bold (cj-typography-p1-bold)
- **Desktop**: 16px / 24px line-height
- **Tablet**: 16px / 24px line-height
- **Mobile**: 14px / 20px line-height
- **Weight**: Bold (700)
- **Usage**: Standard paragraph text, Body copy in articles

### Paragraph 2 Body (cj-typography-p2-body)
- **Desktop**: 14px / 20px line-height
- **Tablet**: 14px / 20px line-height
- **Mobile**: 14px / 20px line-height
- **Weight**: Regular (400)
- **Usage**: Page Heading, Section Heading

### Paragraph 2 Bold (cj-typography-p2-bold)
- **Desktop**: 14px / 20px line-height
- **Tablet**: 14px / 20px line-height
- **Mobile**: 14px / 20px line-height
- **Weight**: Bold (700)
- **Usage**: Standard paragraph text, Body copy in articles

### Hyperlink (cj-typography-hyperlink)
- **Desktop**: 14px / 20px line-height
- **Tablet**: 14px / 20px line-height
- **Mobile**: 14px / 20px line-height
- **Weight**: Regular (400)
- **Decoration**: Underlined
- **Usage**: All in-line links, Navigation links, Underlined text

### Caption (cj-typography-caption)
- **Desktop**: 13px / 16px line-height
- **Tablet**: 13px / 16px line-height
- **Mobile**: 13px / 16px line-height
- **Weight**: Regular (400)
- **Usage**: Image captions, Author bylines, Data source labels

## Usage

### 1. Import the typography SCSS file in your main SCSS entry point:
```scss
@import 'styles/styleguide/typography';
```

### 2. Use the CSS classes directly in your HTML:
```html
<h1 class="cj-typography-h1-heading">Main Page Title</h1>
<h2 class="cj-typography-h2-heading">Section Heading</h2>
<p class="cj-typography-p1-body">Body text content</p>
<a href="#" class="cj-typography-hyperlink">Link text</a>
```

### 3. Use the SCSS mixins in your component styles:
```scss
.my-heading {
  @include typography-h1('desktop');
  
  @media (max-width: 1024px) {
    @include typography-h1('tablet');
  }
  
  @media (max-width: 768px) {
    @include typography-h1('mobile');
  }
}

.my-body-text {
  @include typography-p1-body('desktop');
  
  @media (max-width: 1024px) {
    @include typography-p1-body('tablet');
  }
  
  @media (max-width: 768px) {
    @include typography-p1-body('mobile');
  }
}
```

### 4. Use the SCSS variables directly:
```scss
.custom-heading {
  font-family: $font-h1-family;
  font-size: $font-h1-size-desktop;
  font-weight: $font-h1-weight;
  letter-spacing: $font-h1-letter-spacing;
  line-height: $font-h1-line-height-desktop;
}
```

## Responsive Design

The typography system automatically scales across different screen sizes:

### Mobile (320px - 767px)
- All typography styles scale down proportionally
- Maintains readability at smaller screen sizes

### Tablet (768px - 1023px)
- Medium scaling for optimal tablet viewing
- Balanced between mobile and desktop sizes

### Desktop (1024px+)
- Full typography scale as designed
- Optimal for large screens and high-resolution displays

## Accessibility Features

### Font Sizing
- **Minimum font size**: 13px for captions
- **Scalable**: All text scales with user preferences
- **Responsive**: Text sizes adapt to screen size

### Font Weights
- **Regular**: 400 for body text
- **Semibold**: 600 for H4-H5 headings
- **Bold**: 700 for P1-P2 bold text
- **ExtraBold**: 800 for Display and H1-H3 headings

## Token Reference

### CSS Classes
- **Display:** `.cj-typography-display`
- **H1:** `.cj-typography-h1-heading`
- **H2:** `.cj-typography-h2-heading`
- **H3:** `.cj-typography-h3-heading`
- **H4:** `.cj-typography-h4-heading`
- **H5:** `.cj-typography-h5-heading`
- **P1 Body:** `.cj-typography-p1-body`
- **P1 Bold:** `.cj-typography-p1-bold`
- **P2 Body:** `.cj-typography-p2-body`
- **P2 Bold:** `.cj-typography-p2-bold`
- **Hyperlink:** `.cj-typography-hyperlink`
- **Caption:** `.cj-typography-caption`

### SCSS Mixins
- **Display:** `@include typography-display($breakpoint)`
- **H1:** `@include typography-h1($breakpoint)`
- **H2:** `@include typography-h2($breakpoint)`
- **H3:** `@include typography-h3($breakpoint)`
- **H4:** `@include typography-h4($breakpoint)`
- **H5:** `@include typography-h5($breakpoint)`
- **P1 Body:** `@include typography-p1-body($breakpoint)`
- **P1 Bold:** `@include typography-p1-bold($breakpoint)`
- **P2 Body:** `@include typography-p2-body($breakpoint)`
- **P2 Bold:** `@include typography-p2-bold($breakpoint)`
- **Hyperlink:** `@include typography-hyperlink($breakpoint)`
- **Caption:** `@include typography-caption($breakpoint)`

### SCSS Variables
Refer to `_typography.scss` for all available variables and their values.

## Last Updated
10 June - CJ Design System Typography Implementation 