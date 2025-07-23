# Typography Style Guide

This folder contains the typography design tokens for the project, extracted from the provided design documentation. All tokens are defined in `_typography.scss` as SCSS variables for easy reuse and consistency across the site.

## Files
- `_typography.scss`: SCSS variables for all typography tokens (Display, H1-H5, Paragraphs, Hyperlink, Caption).

## Usage
1. **Import the typography SCSS file in your main SCSS entry point:**
   ```scss
   @import 'styles/styleguide/typography';
   ```
2. **Use the variables in your component or page styles:**
   ```scss
   .my-heading {
     font-family: $font-h1-family;
     font-size: $font-h1-size-desktop;
     font-weight: $font-h1-weight;
     letter-spacing: $font-h1-letter-spacing;
     line-height: $font-h1-line-height;
   }
   
   @media (max-width: 1024px) {
     .my-heading {
       font-size: $font-h1-size-tablet;
     }
   }
   @media (max-width: 768px) {
     .my-heading {
       font-size: $font-h1-size-mobile;
     }
   }
   ```

## Token Reference
- **Display:** `$font-display-*`
- **H1:** `$font-h1-*`
- **H2:** `$font-h2-*`
- **H3:** `$font-h3-*`
- **H4:** `$font-h4-*`
- **H5:** `$font-h5-*`
- **Paragraph 1:** `$font-p1-*`, `$font-p1-bold-*`
- **Paragraph 2:** `$font-p2-*`, `$font-p2-bold-*`
- **Hyperlink:** `$font-hyperlink-*`
- **Caption:** `$font-caption-*`

Refer to `_typography.scss` for all available variables and their values. 