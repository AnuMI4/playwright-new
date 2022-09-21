const { test, expect } = require("@playwright/test")

test.describe("e2e Test", () => {
  test.beforeEach(async ({ page }) => {
    // page.goto("/")
  })
})

test('Cart Test', async ({ page }) => {
  await page.goto("https://www.saucedemo.com/")
  // page.goto("/")

  // locators

  const userNameField = page.locator('[data-test="username"]')
  const passField = page.locator('[data-test="password"]')
  const loginBtn = page.locator('[data-test="login-button"]')

  const backPackAddToCartBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
  const shoppingCart = page.locator('.shopping_cart_container a')
  const checkoutBtn = page.locator('[data-test="checkout"]')

  const firstNameField = page.locator('[data-test="firstName"]')
  const lastNameField = page.locator('[data-test="lastName"]')
  const zipCodeField = page.locator('[data-test="postalCode"]')
  const continueBtn = page.locator('[data-test="continue"]')

  const finishBtn = page.locator('[data-test="finish"]')

  const thankyouMessage = page.locator('.complete-header')

  //actions

  await userNameField.fill('standard_user')
  await passField.fill('secret_sauce')
  await loginBtn.click()

  await expect(page).toHaveURL(/.*inventory.html/)

  await backPackAddToCartBtn.click()
  await shoppingCart.click()

  await expect(page).toHaveURL(/.*cart.html/)

  await checkoutBtn.click()
  await expect(page).toHaveURL(/.*checkout-step-one.html/)

  await firstNameField.fill("ABC")
  await lastNameField.fill("XYZ")
  await zipCodeField.fill("12345")
  await continueBtn.click()
  await finishBtn.click()
  await expect(thankyouMessage).toBeVisible()
})