# Pura Via public-claim evidence inventory

This inventory separates the maturity of each public claim. Repository-relative
paths point to the private working source used for review; the public case study
does not link to or identify that repository.

## Maturity labels

- **Hypothesis** — a proposition to validate, not evidence of demand or feasibility.
- **Directional research** — planning input that has not been independently confirmed.
- **Documented decision** — a deliberate product or operating choice recorded in the repository.
- **Implemented prototype** — interactive behavior in the local presentation prototype.
- **Automated check** — behavior or packaging verified by a repeatable check.
- **Visual inspection** — reviewed in a rendered browser or captured comparison.
- **Not evidenced** — no proof of deployment, user/partner testing, pilot operation, or outcomes was found.

## Claim map

| Public claim | Maturity | Repository evidence | Safe qualification |
| --- | --- | --- | --- |
| Pura Via is a validation-stage coordination concept, not a launched transport service or boat operator. | Documented decision | `README.md` (“Current Status”); `decisions/2026-08-22-initial-thesis.md`; `docs/regulatory.md` | Always pair “working prototype” with “validation stage.” |
| The first wedge concentrates demand on one two-way corridor rather than opening a broad marketplace. | Documented decision + hypothesis | `docs/mvp.md` (“Product Boundary,” “Route”); initial-thesis decision; `docs/roadmap.md` | The route is a scenario for validation, not an established hotel service. |
| Threshold-based departures are intended to turn scattered seat demand into viable shared runs. | Product hypothesis + implemented prototype | `docs/business-model.md`; `src/Prototype.tsx:55-58,113-120,178-230` | Do not imply that demand density, thresholds, price, or unit economics have been validated. |
| The domain model distinguishes pending, confirmed, guaranteed, full, and canceled departures. | Documented design decision | `docs/mvp.md` (“Departure States”) | The prototype visibly demonstrates pending/confirmation progress; it does not implement every lifecycle state. |
| The guest/concierge prototype supports departure choice, party-size changes, confirmation progress, a no-payment seat hold, sorting, and support sheets. | Implemented prototype | `src/Prototype.tsx:91-293`; `docs/mvp.md` (“Implemented Concierge Demo”) | These are local interactions with synthetic state, not real reservations, payment, or notifications. |
| The operator prototype filters to eligible runs and supports availability, posted-payout acceptance, structured counteroffers, assignments, pending offers, and a mock verified profile. | Implemented prototype | `src/Prototype.tsx:296-571`; `docs/mvp.md` (“Implemented Operator Demo”) | “Eligible” and “verified” are demonstration states; there is no production identity or credential verification. |
| Operator selection is multi-factor rather than automatically lowest-price. | Documented decision + implemented prototype copy | `docs/mvp.md` (“Operator Flow”); `src/Prototype.tsx:535`; `AGENTS.md` (“Durable Product Decisions”) | This is a designed policy, not a live selection algorithm or measured allocation system. |
| Guest and concierge surfaces hide operator identities, offers, and selection details. | Documented decision + implemented separation | `AGENTS.md`; `src/Prototype.tsx:549-567`; `design-qa.md` (“Operator Extension Review”) | The prototype uses separate local surfaces; production authorization and data isolation do not exist yet. |
| Pura Via coordinates demand, reservations, scheduling, communication, and dispatch; licensed operators retain boats, crews, safety, permits, insurance, and maritime execution. | Documented product boundary | `docs/business-model.md` (“What Pura Via Owns,” “What Operators Own”); `docs/regulatory.md` | The legal classification and actual responsibility split remain unresolved and require professional review and contracts. |
| The prototype is a React + TypeScript mobile presentation application built with Vite and a protected device runtime. | Implemented prototype + automated build | `package.json`; `src/App.tsx`; `vite.config.ts`; `AGENTS.md` (“Runtime Contract”) | Describe this as prototype architecture, not production infrastructure. |
| Prototype state is local and ephemeral. | Implemented prototype | `src/Prototype.tsx` uses component `useState`; no persistence, API client, authentication, payment, or notification integration appears in the application surface. | Absence was confirmed by source inspection; do not claim production data handling. |
| Mobile runtime integrity and production packaging pass repeatable checks. | Automated check | `package.json`; `scripts/check-mobile-runtime.mjs`; `tests/sites-worker.test.mjs` | Report exact checks and results, not generic “production ready” language. |
| Device runtime interactions have automated browser coverage. | Automated check | `tests/mobile-runtime.spec.ts` | These tests cover shared runtime gestures, keyboard, sheets, device switching, and flow stacking—not the complete Pura Via product flow. |
| The guest and operator screens were visually compared and interaction-tested. | Visual inspection (repository record) | `design-qa.md`; `docs/qa/side-by-side.jpg`; `outreach/screenshots/` | Attribute this to documented browser QA. Recheck the new case-study artifact independently. |
| The work was independently authored by Steven Finston. | Repository authorship evidence | Git history shows Steven/Steve Finston as author across the project history, including the prototype commits. | Use “Independent developer” and first-person decision language; do not invent a team, employer, or client relationship. |

## Deliberately excluded public claims

No repository evidence supports claims of customers, bookings, revenue, conversion,
time savings, testimonials, partner approval, hotel affiliation, legal approval,
insurance approval, production deployment, real dispatch, live manifests, payment
processing, persistent data, authentication, notifications, a pilot, or measurable
outcomes. The case study must not imply any of them.

## Verification record for this case-study build

- Source mobile-runtime integrity: **passed** — 28 protected files verified.
- Source type/build/package pipeline: **passed** — TypeScript and Vite build completed; expected Sites output was emitted. The source build reported a non-blocking JavaScript chunk-size warning.
- Source packaging suite: **passed** — 4 of 4 tests.
- Source browser-runtime suite: **passed** — 8 of 8 tests after installing the required local Chromium binary.
- Case-study lint: **passed**.
- Case-study production build: **passed**.
- Case-study browser QA: **passed** — 10 of 10 checks across desktop and mobile.
- Browser QA covered: content, horizontal overflow, section navigation, technical-detail disclosure, public link target, title/description/Open Graph/robots metadata, OG image response, keyboard focus, reduced motion, and automated accessibility including color contrast.
- Visual review: **passed** for the hero, guest surface, operator surface, and mobile guest layout using locally captured screenshots.
- Full dependency-tree audit: **0 known vulnerabilities** after updating the
  case-study framework and development toolchain to mutually compatible patched
  versions.

These checks verify the local implementation and its presentation surface. They
do not change the business, partner, legal, pilot, deployment, or outcome status
of the concept.
