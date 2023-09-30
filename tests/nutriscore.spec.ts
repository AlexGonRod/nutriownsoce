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
  const carbs = page.getByText(nutella.Carbs, { exact: true })
  const fats = page.getByText(nutella.Fats, { exact: true })
  const sugars = page.getByText(nutella.Sugars, { exact: true })
  const protein = page.getByText(nutella.Proteins, { exact: true })
  const salt = page.getByText(nutella.Salt, { exact: true })
  const fiber = page.getByText(nutella.Fiber, { exact: true })

  await expect(title).toBeVisible();
  await expect(carbs).toBeVisible();
  await expect(carbs).toContainText('57.5')
  // await expect(fats).toBeVisible();
  // await expect(fats).toContainText('30.09')
  await expect(fiber).toBeVisible();
  await expect(fiber).toContainText('0');
  await expect(protein).toBeVisible();
  await expect(protein).toContainText('6.3');
  await expect(salt).toBeVisible();
  await expect(salt).toContainText('0.1075');
  await expect(sugars).toBeVisible();
  await expect(sugars).toContainText('56.3');
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
