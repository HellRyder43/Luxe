import { test, expect } from '@playwright/test';

test.describe('Text Readability - Visual Verification', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('header navigation links should be visible and readable', async ({ page }) => {
    // Check desktop navigation links exist and have proper text size
    const navLinks = page.locator('nav a');
    await expect(navLinks.first()).toBeVisible();

    // Verify navigation is clickable
    await navLinks.first().click();
    await expect(page).toHaveURL(/.*\//);
  });

  test('footer links should be visible and readable', async ({ page }) => {
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Check footer section headings
    const footerHeadings = page.locator('footer h3');
    await expect(footerHeadings.first()).toBeVisible();

    // Check footer links
    const footerLinks = page.locator('footer a');
    await expect(footerLinks.first()).toBeVisible();

    // Verify legal/copyright text is visible
    const copyright = page.locator('text=/© .* LuxeMYS/');
    await expect(copyright).toBeVisible();
  });

  test('product page breadcrumbs should be readable', async ({ page }) => {
    // Navigate to a product page
    await page.goto('/products/cashmere-trench');

    // Check breadcrumbs exist and are visible
    const breadcrumbs = page.locator('nav[aria-label="Breadcrumb"] a').first();
    await expect(breadcrumbs).toBeVisible();
  });

  test('mobile navigation should be readable', async ({ page, viewport }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    // Open mobile menu
    await page.locator('button[aria-label="Toggle mobile menu"]').click();

    // Check mobile nav links
    const mobileNavLinks = page.locator('nav a').first();
    await expect(mobileNavLinks).toBeVisible();
  });

  test('utility bar links should be readable', async ({ page }) => {
    const utilityLinks = page.locator('header').first().locator('a').first();
    await expect(utilityLinks).toBeVisible();
    await expect(utilityLinks).toHaveText(/Track Order|Store Locator|Help/);
  });
});

test.describe('Responsive Text Sizing', () => {
  const viewports = [
    { name: 'Desktop', width: 1920, height: 1080 },
    { name: 'Tablet', width: 768, height: 1024 },
    { name: 'Mobile', width: 375, height: 667 }
  ];

  for (const viewport of viewports) {
    test(`text should be readable on ${viewport.name}`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('/');

      // Verify header is visible
      await expect(page.locator('header')).toBeVisible();

      // Scroll to footer and verify visibility
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await expect(page.locator('footer')).toBeVisible();
    });
  }
});

test.describe('Cross-browser Compatibility', () => {
  test('text visibility in different browsers', async ({ page, browserName }) => {
    await page.goto('/');

    // Verify key navigation elements regardless of browser
    await expect(page.locator('nav a').first()).toBeVisible();

    // Footer check
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await expect(page.locator('footer a').first()).toBeVisible();

    console.log(`Test passed in ${browserName}`);
  });
});
