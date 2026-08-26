# Updating the Pura Via case study

This repository is the public presentation layer, not the private Pura Via
working repository. Keep source research, private notes, contacts, credentials,
and unpublished operating details out of this repository.

## Content map

- Edit the narrative and synthetic interface content in `app/page.tsx`.
- Edit the responsive visual system in `app/globals.css`.
- Edit title, description, and social metadata in `app/layout.tsx`.
- Replace `public/og.png` when the positioning or visual identity changes.
- Keep the Pacific Editorial identity rooted in a shell-white hero, a vivid
  cobalt ocean field, deep marine typography, aqua details, coral actions, and
  sand-colored evidence surfaces. The editable tokens are at the top of
  `app/globals.css`.
- Keep `public/pacific-editorial-hero.jpg`, `public/pura-via-icon.png`, the hero
  treatment, and `public/og.png` visually aligned. The canonical icon comes
  from `assets/logos/pura-via-icon.png` on the private Pura Via repository's
  `brand/pura-via-icon` branch; preserve its exact bytes and do not recolor it.
- Update `EVIDENCE.md` whenever a public claim changes.
- Update `PUBLICATION_CHECKLIST.md` when a release gate changes state.

## Evidence rules

Keep every consequential claim in one of these categories: hypothesis,
directional research, documented decision, implemented prototype, automated
check, visual inspection, or not evidenced. Never turn prototype behavior into
a claim about real customers, partners, bookings, revenue, approvals, a pilot,
or measurable outcomes without new evidence.

Use only synthetic, date-neutral records in screenshots and interface diagrams.
Keep guest and concierge information separate from private operator offers and
selection details. Show individual synthetic run payouts only; do not publish an
aggregate posted-value metric.

## Local workflow

```bash
npm ci
npm run dev
```

The local site opens on the address printed by the development server. Before
committing a change, run:

```bash
npm run lint
npm run build
npm run test:qa
npm audit --audit-level=high
```

Browser screenshots from the automated checks are written to
`test-results/visuals/` and are intentionally ignored. Promote a screenshot into
`qa/` only after visually reviewing it and deciding it should be durable evidence.

## Release boundary

The public origin is https://pura-via-case-study.vercel.app. Vercel is connected
to this GitHub repository so an approved change merged to `main` can produce a
new production deployment. Use a feature branch and pull request, wait for the
full GitHub verification job, inspect the Vercel preview, and merge only the
approved exact version. After deployment, recheck the canonical URL, robots
metadata, social image, desktop and mobile layouts, and the Vercel deployment
status before describing the update as published.
