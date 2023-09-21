import { test, expect } from '@playwright/test';

import { API_ENDPOINT, API_OPTIONS } from "../src/lib/const"
import expectJSON from './expectJSON.js'

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('has title', async ({ page }) => {
  // await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/NutriOwnscore/);
});
test('fetch default data', async ({ page, request }) => {
  const { nutella } = expectJSON
  const response = await request.get(`${API_ENDPOINT}3017624010701${API_OPTIONS}`)
  expect(response.ok()).toBeTruthy();

  // await page.goto('/');
  const title = page.getByRole('heading', { name: nutella.Title })
  const energy = page.getByText(nutella.Energy, { exact: true })
  const fiber = page.getByText(nutella.Fiber, { exact: true })
  const protein = page.getByText(nutella.Protein, { exact: true })
  const fat = page.getByText(nutella.Fat, { exact: true })

  await expect(title).toBeVisible();
  await expect(energy).toBeVisible();
  await expect(energy).toContainText('2255')
  await expect(fiber).toBeVisible();
  await expect(fiber).toContainText('0');
  await expect(protein).toBeVisible();
  await expect(protein).toContainText('6.3');
  await expect(fat).toBeVisible();
  await expect(fat).toContainText('56.3');
});
test('has scores', async ({ page, request }) => {
  const response = await request.get(`${API_ENDPOINT}3017624010701${API_OPTIONS}`)
  expect(response.ok()).toBeTruthy();

  // await page.goto('/');
  const scores = page.getByTitle('scores');
  const scoreA = page.locator('#scores:has(span.a)');
  const scoreB = page.locator('#scores:has(span.b)');
  const scoreC = page.locator('#scores:has(span.c)');
  const scoreD = page.locator('#scores:has(span.d)');
  const scoreE = page.locator('#scores:has(span.e)');
  const scoreVisible = page.locator('#scores:has(span.e.selected)');

  await expect(scores).toBeVisible()
  await expect(scoreA).toBeVisible();
  await expect(scoreB).toBeVisible();
  await expect(scoreC).toBeVisible();
  await expect(scoreD).toBeVisible();
  await expect(scoreE).toBeVisible();
  await expect(scoreVisible).toBeVisible();

})
test('has a score with class "visible"', async ({ page, request }) => {
  const response = await request.get(`${API_ENDPOINT}3017624010701${API_OPTIONS}`)
  expect(response.ok()).toBeTruthy();

  // await page.goto('/');
  const scores = page.getByTitle('scores');
  const scoreVisible = page.locator('#scores:has(span.selected)');

  await expect(scores).toBeVisible();
  await expect(scoreVisible).toBeVisible();
})
