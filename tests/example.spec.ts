import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/')
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Vite App/)
})

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/')
  await page.getByRole('button', { name: 'Login' }).click()
  await page.getByLabel('Email').click()
  await page.getByLabel('Email').fill('kouya.0730@icloud.com')
  await page.getByLabel('Password').click()
  await page.getByLabel('Password').fill('kaorunagisa09')
  await page.getByLabel('Sign-In').click()
  await page
    .locator('div')
    .filter({ hasText: /^Sign-InCancel$/ })
    .getByLabel('Sign-In')
    .click()
  await expect(page.getByRole('button', { name: '' })).toBeVisible()
})
