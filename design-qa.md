# Design QA

## Target

- Selected direction: Pacific Editorial (choice 1)
- Reference: `qa/pacific-editorial-reference.png`
- Intended desktop comparison viewport: 1440 × 1024
- Canonical brand source: `assets/logos/pura-via-icon.png` on the private
  `stevefinston/pura-via` branch `brand/pura-via-icon`

## Completed checks

- Opened and inspected the selected visual reference.
- Verified the public icon matches the GitHub source byte-for-byte with SHA-256
  `ecb3e9961a5af5913d6bebfe889adbbbd280dd6589a2a5e9564871050a5a136a`.
- Verified the local page, hero asset, social image, and icon return successful
  HTTP responses with the expected content types.
- Lint, production build, dependency audit, and whitespace checks pass.
- GitHub Actions run `32991420895` passed the complete 10-test desktop/mobile
  Playwright suite, automated accessibility and contrast scan, lint, production
  build, and dependency audit on commit `c0a5d4ba2288c5fd1c89a277178c12bedc8ac79e`.

## Blocking check

The approved in-app browser cannot currently capture `http://localhost:3000/`
because its admin-enforced security policy cannot be verified. The same policy
failure persisted across multiple retries. No alternate browser or indirect
capture method was used without user approval.

The reference and implementation therefore could not yet be placed into the
required same-input visual comparison. Desktop/mobile layout review, interaction
review, console review, and P0/P1/P2 visual defect triage remain pending.

The owner reviewed the local case study, explicitly approved it on 2026-08-26,
and authorized saving this revision to GitHub with this browser-QA limitation
recorded rather than represented as complete.

final result: blocked

## Canonical system icon adjustment — PR #3

- Source state: owner-supplied 1720 × 1452 screenshot of the
  `#system` section, showing the temporary circular `PV` monogram in the
  Pura Via coordination card.
- Intended implementation state: the same card, copy, typography, spacing,
  colors, and borders with only the monogram replaced by
  `/pura-via-icon.png`.
- Asset fidelity: the rendered image points to the canonical public asset,
  whose verified SHA-256 is
  `ecb3e9961a5af5913d6bebfe889adbbbd280dd6589a2a5e9564871050a5a136a`.
- Automated regression coverage verifies the canonical image is visible and
  the old `.pv-monogram` element is absent.
- Lint, production build, dependency audit, and whitespace checks pass on the
  implementation commit `10cace27e3ac9a60623186f0f3c249c45a8a271a`.
- The Vercel preview deployed successfully, but the approved in-app browser's
  admin-enforced security check was unavailable for both localhost and the
  preview URL. A same-input reference-versus-implementation screenshot
  comparison therefore remains unavailable. No alternate browser was used.

Current fidelity status:

- Typography: unchanged by this adjustment.
- Spacing and layout: existing two-column card structure preserved; icon slot
  increased from 48 to 56 pixels so the detailed hand-and-boat mark remains
  legible.
- Colors and tokens: unchanged; a subtle existing-brand-color outline is used
  around the rounded-square icon.
- Image quality: canonical PNG asset, rendered without stretching via
  `object-fit: cover`.
- Copy: unchanged.

final result: blocked

## Operator filtering copy clarification — PR #3

- Source truth: owner-supplied 2052 × 1048 screenshot of the operator-dispatch
  section, showing the sentence “Only runs matching a mock verified vessel
  profile appear.”
- Copy finding: the sentence mixed an internal prototype qualifier (“mock”)
  with a user-facing trust claim (“verified”), making the filtering behavior
  difficult to understand.
- Fix: replaced it with “Only runs that fit an operator's availability and
  vessel capabilities are shown.” The separate synthetic-interface disclosure
  remains in place, and the surrounding layout, typography, colors, imagery,
  bullets, and operator-neutral language are unchanged.
- Automated evidence: the 10-test desktop/mobile suite passes, including
  accessibility, contrast, overflow, console, and explicit copy assertions.
- Visual evidence blocker: the approved in-app browser still cannot access the
  localhost implementation because its admin-enforced security check is
  unavailable, and no external browser is connected. The source and revised
  implementation therefore cannot be placed into the required same-input
  browser comparison.

Current fidelity status:

- Typography: unchanged; the replacement remains a two-sentence paragraph.
- Spacing and layout: unchanged in code and covered by the no-overflow tests.
- Colors and tokens: unchanged.
- Image quality and assets: unchanged.
- Copy: clarified and protected by a regression assertion; the confusing
  phrase is asserted absent.

final result: blocked
