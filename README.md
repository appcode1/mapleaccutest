# Maple AccuTest — Static Website

A fully self-contained static rebuild of https://mapleaccutest.com/
Recreated from the original content and visual style. **No WordPress** — every line
of HTML, CSS and JS here is hand-written.

## How to open

Double-click **`index.html`**, or open it in any browser:

```
index.html
```

Everything works offline from your local disk (fonts, images, styles, navigation).
No web server, no internet connection, no WordPress required.

## Folder structure

```
mapleaccutest-static/
├── index.html                      Home
├── air-balancing.html              HVAC Air Balancing
├── air-balancing-report.html       Air Balancing Report
├── air-tightness-testing.html      Air Tightness Testing
├── contact-us.html                 Contact Us
├── privacy-policy.html             Privacy Policy
├── terms-conditions.html           Terms & Conditions
│
├── css/
│   └── style.css                   All styles (hand-written)
├── js/
│   └── main.js                     Mobile menu + FAQ accordion
├── images/
│   ├── logo.png / logo-large.png   Brand logo
│   ├── home-banner.jpg             Home hero — right-hand photo (photo B)
│   ├── hero-overlay.jpg            Home hero — left-hand photo (photo A)
│   ├── page-banner.jpg             Inner-page banner background
│   ├── air-balancing.jpg           Service page image
│   ├── air-balance-report.jpg      Service page image
│   ├── air-tightness-testing.jpg   Service page image
│   ├── service-*.png               Home service card icons
│   ├── icon-*.png                  Contact info card icons
│   └── favicon-*.png / apple-touch-icon.png
└── fonts/
    └── Montserrat-*.woff2          All text (300–900), self-hosted
```

## What was reproduced from the original

| Element | Value |
|---|---|
| Font | Montserrat 300–900 (local woff2) — matches the original |
| Primary blue | `#6EC1E4` |
| Deep blue | `#2F5F8C` |
| Blue | `#4054B2` |
| Green (buttons) | `#23A455` / `#75C32C` |
| Heading grey | `#54595F` |
| Body text grey | `#7A7A7A` |
| Light section | `#ECEFF1` |
| Footer / dark | `#111A28` |
| Hero photo A (left 50%) | `hero-overlay.jpg`, `cover`, `50% 0%`, + gradient `rgba(114,114,114,.16) → rgba(47,95,140,.36)` |
| Hero photo B (right 50%) | `home-banner.jpg`, `auto`/`repeat` (tiled) behind the text |
| Primary button | bg `#002747`, white, 16px/600, `15px 40px`, radius `2px` |
| Nav link | 16px/400 · active `#0581BF` · inactive `#0A0A0A` |
| Card shadow | `0 0 30px rgba(0,0,0,.1)` |
| Hero H1 | 51px / 71.4px, white, `mix-blend-mode: luminosity` |
| Page banner H1 | 75px / 105px, white |
| Section H2 | 38px / 49.4px, `#0A0A0A` |
| Card title | 20px · Card text 12px |
| FAQ question | 18px / 700 · accordion with shadow |

All page copy, headings, service descriptions, FAQ answers, contact details and
legal text are taken verbatim from the original site.

## Notes

* **Fonts are bundled** (`fonts/`) so the site renders identically offline.
* **Google Maps** iframes on the Contact page are the only external embeds —
  they need internet to display the live map. Offline they show a styled
  placeholder card with the area name; everything else works normally.
* **Home hero = the original's two photos**, side by side at 50/50 on desktop and
  tablet (banner switches to `contain` under 992px). On phones the layout stacks:
  text block → photo B → photo A, so both images stay visible at every width.
* Verified against the live site by pixel comparison: the hero matches the
  original to within 1.6% mean pixel difference (photo A: 0.4%).
* The site is fully responsive (desktop / tablet / mobile, incl. a hamburger menu).
* FAQ items are accordions — click a question to expand the answer.
