# Front-End Rules for mysamplesite

## 1. General Principles
- Write clean, readable, and maintainable code.
- Use semantic HTML5 elements.
- Ensure accessibility (a11y) best practices.
- All code must be responsive and mobile-friendly (mobile-first approach).
- Use BEM-style class naming for CSS (e.g., .component__element--modifier).
- Avoid inline styles; use SCSS for all styling.
- Use CSS variables for colors, spacing, and typography where possible.
- Use rem/em units for spacing and font sizes, not px.
- Avoid !important in CSS unless absolutely necessary.
- Use ES6+ JavaScript syntax and modular code structure.
- All JavaScript should be unobtrusive (no inline JS in HTML).
- Use event delegation for dynamic elements.
- Scope all component styles within the component’s class. Avoid generic selectors to prevent side effects.

## 2. Image Handling & Responsive Images
- When creating a component, the design reference may be provided as either:
  - A single image (for one viewport), or
  - Three images: mobile, tablet, desktop.
- If a component includes an image element, **always use the `<picture>` tag** to support different viewports, even if only one image is provided initially.
- For each visual asset, if available, provide three separate image files:
  - Mobile: <768px
  - Tablet: 768px–1199px
  - Desktop: ≥1200px
- Use the `<picture>` element with `<source>` and media queries, or conditional rendering, to ensure the correct image is used per viewport.
- Use descriptive alt text for all images.
- Lazy load images where appropriate (e.g., `loading="lazy"`).

## 3. HTML
- Use double quotes for attributes.
- Indent with 2 spaces.
- Use lowercase for all tag and attribute names.
- Close all tags properly (including self-closing tags).
- Use <button> for interactive elements, not <a> unless it is a link.
- Use <section>, <header>, <nav>, <main>, <footer> for layout structure.
- Avoid unnecessary divs (no "div soup").

## 4. CSS/SCSS
- Place all component styles in a dedicated SCSS file named _<component-name>.scss.
- Scope all styles within the component’s class.
- Use variables for colors, spacing, and font sizes (import from _variables.scss if available).
- Use nesting only up to 2 levels deep.
- Use mixins for repeated patterns.
- Group related styles together.
- Use :root for global variables if needed.
- Use @media queries for responsiveness (mobile-first approach).
- Avoid vendor prefixes; rely on autoprefixer.

## 5. JavaScript
- Place all component JS in a dedicated file named <component-name>.js.
- Use strict mode ('use strict';) at the top of each file.
- Use const/let, never var.
- Use arrow functions where possible.
- Avoid polluting the global namespace.
- Use data attributes for JS hooks, not classes.
- Add comments for complex logic.
- Debounce/throttle expensive event handlers.
- Clean up event listeners on component removal if applicable.
- Use feature detection, not browser detection.

## 6. Performance & Security
- Minimize DOM reflows and repaints in JS.
- Optimize rendering and bundle size; import only what you use.
- Sanitize all user-generated content before rendering.
- Escape output in HTML, JS, and CSS to prevent XSS and injection attacks.
- Avoid use of `eval`, `innerHTML`, or other unsafe APIs.

## 7. Browser Compatibility
- All code must be compatible with:
  - Chrome (latest two major versions)
  - Safari (latest two major versions)
  - Firefox (latest two major versions)
  - Edge (latest two major versions)
- Do not use any styles, logic, or APIs that are not fully supported in the browsers listed above.
- Use feature detection, not browser detection.

## 8. Accessibility
- All interactive elements must be keyboard accessible.
- Use semantic roles and ARIA attributes as needed.
- Ensure sufficient color contrast.
- Use focus styles for all focusable elements.

## 9. Testing & Local Development
- Every component must have a corresponding index.html in the static test folder for local testing.
- The test HTML must include all required scripts and styles as per project-information-context.md.
- The HTML structure in index.html must match the AEM HTL template exactly.

---

**Always refer to this file when generating or reviewing front-end code for mysamplesite.** 