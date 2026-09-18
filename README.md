# EcoReach Youth Foundation — WEDE5020 Part 2

## 1. Project Overview
EcoReach Youth Foundation is presented as a Johannesburg-based South African non-profit organisation established in 2021. The website focuses on environmental education, youth-led community greening, sustainable urban agriculture and climate-resilience activities.

### Target audience
- High school learners
- Community volunteers
- Corporate donors and partners
- Municipal/community partners

## 2. Part 1 Feedback Implemented
The following corrections were made in response to the formative Part 1 feedback:

| Part 1 feedback | Correction/action in Part 2 |
|---|---|
| No sitemap was found. | Added `sitemap.xml` containing all five public HTML pages. Footer links were also added to the sitemap. |
| README.md was missing/incomplete. | Added this completed `README.md` with project information, changelog, testing evidence checklist and references. |
| Proposal 1 and Proposal 2 needed stronger design/UX detail and low-fidelity wireframing. | Added `docs/wireframe.svg` as a low-fidelity homepage layout reference and documented the layout decisions below. |
| Limited evidence of systematic content research and image sourcing/licensing. | Added a content and image-sourcing record in this README. Original project copy is identified as project content; inherited/local image assets are identified separately. |
| Limited testing evidence/reporting. | Added a Part 2 testing section and screenshot checklist for desktop, tablet and mobile testing. |
| Only one Git commit was visible in the Part 1 submission. | Part 2 changes should be committed incrementally with descriptive messages before final submission. |
| Limited original imagery/content and reliance on template/vendor resources. | Part 2 uses a dedicated EcoReach stylesheet, original page structure/copy and project-owned CSS/SVG layout assets. Existing local photographic assets are retained and documented rather than presented as original photographs. |

## 3. Part 2 CSS and Responsive Design
### External stylesheet
All five HTML pages link to the same external stylesheet:
`assets/css/main.css`

The stylesheet includes:
- CSS reset and consistent box sizing
- Base typography and colour variables
- Flexbox navigation
- CSS Grid cards, two-column sections and KPI layout
- Relative units (`rem`, `%`, `clamp()`)
- Borders, shadows, rounded corners and visual states
- `:hover` and `:focus-visible` interactions
- Responsive breakpoints for desktop/tablet/mobile
- Responsive images and `prefers-reduced-motion`

### Responsive breakpoints
- Desktop: above 900px
- Tablet: 641px–900px
- Mobile: 320px–640px

On smaller screens, the navigation becomes a menu button and multi-column content changes to a single-column layout where appropriate.

## 4. Content and Image Sourcing
### Original/project content
The EcoReach organisation description, mission, vision, target audience, goals/KPIs, page structure and calls to action were developed for the coursework project and are not copied as a full passage from an external website.

### Local image assets
- `assets/img/logo.png` — project logo asset supplied/created for the EcoReach project.
- `assets/img/favicon.png` and `assets/img/apple-touch-icon.png` — project branding assets.
- `assets/img/hero-bg.jpg` — local photographic asset retained from the Part 1 project. The original Part 1 submission did not record a reliable source/licence in the repository; therefore it is not claimed as an original photograph.
- `assets/img/services.jpg` and `assets/img/services-640.jpg` — local photographic assets retained from the Part 1 project; the 640px file is a responsive derivative generated from the local 1024px image. The original Part 1 submission did not record a reliable source/licence in the repository; therefore it is not claimed as an original photograph.
- `assets/img/my-profile-img.jpg` — local asset retained from the Part 1 project and not used as a factual claim about an EcoReach staff member.

For the final submission, retain proof of the source/licence for any externally sourced photograph used in the website. Do not describe an externally sourced image as an original photograph.

## 5. Low-Fidelity Wireframe
A low-fidelity homepage wireframe is included at:
`docs/wireframe.svg`

The wireframe shows the intended header/navigation, hero area, call to action, three focus-area cards, KPI section and footer.

## 6. Testing and Evidence
The site should be tested in a browser using Developer Tools at the following viewport categories:

- Desktop: approximately 1366 × 768
- Tablet: approximately 768 × 1024
- Mobile: approximately 390 × 844

### Screenshot evidence to add before submission
Save screenshots in the `screenshots/` folder using these names:
1. `desktop-home.png`
2. `tablet-home.png`
3. `mobile-home.png`
4. `mobile-get-involved.png`
5. `mobile-services.png`
6. `mobile-contact.png`

The screenshots should show that navigation, cards, forms, text and images resize/reflow without horizontal scrolling or broken links.

## 7. Changelog
### Part 2 — 17 September 2026
- Created and linked a shared external CSS stylesheet to all five HTML pages.
- Added CSS reset, colour variables, base typography, spacing, borders and shadows.
- Added Grid/Flexbox layouts for cards, two-column content and KPI statistics.
- Added responsive breakpoints for desktop, tablet and mobile layouts.
- Added a mobile navigation toggle with accessible `aria-expanded` state.
- Added hover and keyboard focus states for navigation, buttons and form controls.
- Reworked forms with visible labels, autocomplete attributes and responsive layout.
- Added responsive image attributes (`picture`, `srcset` and `sizes`) plus a 640px image derivative for the Projects page.
- Corrected Donate navigation so links point to the donation section on the Contact page.
- Replaced the previous JavaScript template code with a small project-specific navigation script so the page no longer depends on unavailable vendor libraries.
- Added `sitemap.xml` to address the Part 1 sitemap feedback.
- Added `README.md` containing Part 2 information, feedback corrections, content/image sourcing notes, testing evidence and references.
- Added a low-fidelity wireframe at `docs/wireframe.svg`.
- Added page descriptions and accessibility improvements such as skip links, semantic navigation, labels and current-page states.

## 8. References
- Mozilla Developer Network (MDN Web Docs) (n.d.) *CSS media queries*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries (Accessed: 17 September 2026).
- Mozilla Developer Network (MDN Web Docs) (n.d.) *CSS Flexible Box Layout*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout (Accessed: 17 September 2026).
- Mozilla Developer Network (MDN Web Docs) (n.d.) *CSS Grid Layout*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout (Accessed: 17 September 2026).
- Mozilla Developer Network (MDN Web Docs) (n.d.) *Responsive images*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images (Accessed: 17 September 2026).
- W3C (n.d.) *Web Content Accessibility Guidelines (WCAG)*. Available at: https://www.w3.org/WAI/standards-guidelines/wcag/ (Accessed: 17 September 2026).
- Sitemap.org (n.d.) *Sitemaps protocol*. Available at: https://www.sitemaps.org/ (Accessed: 17 September 2026).

## 9. Submission Checklist
- [x] Five HTML pages present
- [x] Shared external CSS present and linked
- [x] Responsive layout implemented
- [x] Mobile navigation implemented
- [x] Sitemap added
- [x] README.md added
- [x] Changelog added
- [x] Low-fidelity wireframe added
- [ ] Add real desktop/tablet/mobile screenshots to `screenshots/`
- [ ] Commit Part 2 changes with descriptive Git messages
- [ ] Push the final project to the GitHub remote repository
- [ ] Submit the GitHub repository link on the LMS
