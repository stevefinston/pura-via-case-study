import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { createHash } from 'node:crypto';

test.beforeEach(async ({ page }) => {
  const consoleErrors: string[] = [];
  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text());
  });
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  expect(consoleErrors).toEqual([]);
});

test('renders the complete evidence-led case study without overflow', async ({ page }, testInfo) => {
  await expect(page.getByRole('heading', { name: 'Coordinating the trip without pretending to operate it.' })).toBeVisible();
  await expect(page.getByText('Validation-stage concept. No transportation service, partnership, hotel affiliation, or live pilot is represented.')).toBeVisible();
  await expect(page.getByText('Evidence before adjectives.')).toBeVisible();

  const sizes = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
  expect(sizes.scrollWidth).toBeLessThanOrEqual(sizes.clientWidth + 1);

  await page.screenshot({ path: `test-results/visuals/${testInfo.project.name}-first.png` });
  if (testInfo.project.name === 'desktop') {
    await page.locator('#experience').screenshot({ path: 'test-results/visuals/desktop-experience.png' });
  } else {
    await page.locator('.guest-card').screenshot({ path: 'test-results/visuals/mobile-guest-card.png' });
  }
});

test('exposes working navigation, details, and public-safe links', async ({ page }) => {
  const sectionLinks = page.locator('header nav a');
  for (const link of await sectionLinks.all()) {
    const href = await link.getAttribute('href');
    expect(href).toMatch(/^#[a-z-]+$/);
    expect(await page.locator(href!).count()).toBe(1);
  }

  const privacyDetails = page.getByText('Privacy and state decisions');
  await privacyDetails.click();
  await expect(page.getByText('Prototype state is ephemeral')).toBeVisible();

  const github = page.getByRole('link', { name: 'More work on GitHub' });
  await expect(github).toHaveAttribute('href', 'https://github.com/stevefinston');
});

test('publishes environment-appropriate metadata and social assets', async ({ page, request }) => {
  const expectedOrigin = (process.env.PLAYWRIGHT_BASE_URL ?? 'http://localhost:3000').replace(/\/$/, '');
  const expectsIndexing = process.env.EXPECT_INDEX === 'true';

  await expect(page).toHaveTitle('Pura Via — Technical Product Case Study');
  await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /validation-stage coordination prototype/);
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', 'Pura Via — Technical Product Case Study');
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', `${expectedOrigin}/og.png`);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    'content',
    expectsIndexing ? /^index/ : /noindex/,
  );
  if (expectsIndexing) {
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `${expectedOrigin}/`);
  }
  await expect(page.locator('.brand-icon')).toBeVisible();

  const image = await request.get('/og.png');
  expect(image.ok()).toBeTruthy();
  expect(image.headers()['content-type']).toContain('image/png');

  const ocean = await request.get('/pacific-editorial-hero.jpg');
  expect(ocean.ok()).toBeTruthy();
  expect(ocean.headers()['content-type']).toContain('image/jpeg');

  const brandIcon = await request.get('/pura-via-icon.png');
  expect(brandIcon.ok()).toBeTruthy();
  expect(brandIcon.headers()['content-type']).toContain('image/png');
  expect(createHash('sha256').update(await brandIcon.body()).digest('hex')).toBe(
    'ecb3e9961a5af5913d6bebfe889adbbbd280dd6589a2a5e9564871050a5a136a',
  );
  await expect(page.locator('.coordination-icon')).toBeVisible();
  await expect(page.locator('.coordination-icon')).toHaveAttribute('src', /pura-via-icon\.png/);
  await expect(page.locator('.pv-monogram')).toHaveCount(0);
});

test('supports keyboard focus and reduced motion', async ({ page }, testInfo) => {
  const homeLink = page.getByRole('link', { name: 'Pura Via case study home' });
  if (testInfo.project.name === 'desktop') await page.keyboard.press('Tab');
  else await homeLink.focus();
  await expect(homeLink).toBeFocused();

  await page.emulateMedia({ reducedMotion: 'reduce' });
  const scrollBehavior = await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior);
  expect(scrollBehavior).toBe('auto');
});

test('passes automated accessibility checks including color contrast', async ({ page }) => {
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
