const { test, expect } = require("@playwright/test")
const { LoginPage } = require('../models/login-page')
const { CheckoutPage } = require('../models/checkout-page')
const { InventoryPage } = require('../models/inventory-page')
const data = require('../data/test-data.json')
let loginPage
let checkoutPage
let inventoryPage

test.describe("e2e Test", () => {
  test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page)
    checkoutPage = new CheckoutPage(page)
    inventoryPage = new InventoryPage(page)
    await page.goto("/")
    await loginPage.enterUsername(data.username)
    await loginPage.enterPassword(data.password)
    await loginPage.clickLoginBtn()
    await expect(page).toHaveURL(/.*inventory.html/)
  })

  test('Cart Test', async ({ page }) => {
    await inventoryPage.backPackAddToCartBtn.click()
    await inventoryPage.shoppingCart.click()
    await expect(page).toHaveURL(/.*cart.html/)
    await checkoutPage.clickCheckoutButton()
    await expect(page).toHaveURL(/.*checkout-step-one.html/)
    await checkoutPage.enterFirstName("ABC")
    await checkoutPage.enterlastName("XYZ")
    await checkoutPage.enterZipCode("12345")
    await checkoutPage.clickContinueButton()
    await checkoutPage.clickFinishButton()
    await expect(checkoutPage.thankyouMessage).toBeVisible()
  })

  test('should add tshirt item', async ({ page }) => {
    await inventoryPage.clickTshirtButton()
    await inventoryPage.shoppingCart.click()
    await expect(page).toHaveURL(/.*cart.html/)
    await checkoutPage.clickCheckoutButton()
    await expect(page).toHaveURL(/.*checkout-step-one.html/)
    await checkoutPage.enterFirstName("ABC")
    await checkoutPage.enterlastName("XYZ")
    await checkoutPage.enterZipCode("12345")
    await checkoutPage.clickContinueButton()
    await checkoutPage.clickFinishButton()
    await expect(checkoutPage.thankyouMessage).toBeVisible()
  })

  test('should add jacket item', async ({ page }) => {
    await inventoryPage.clickJacketButton()
    await inventoryPage.shoppingCart.click()
    await expect(page).toHaveURL(/.*cart.html/)
    await checkoutPage.clickCheckoutButton()
    await expect(page).toHaveURL(/.*checkout-step-one.html/)
    await checkoutPage.enterFirstName("ABC")
    await checkoutPage.enterlastName("XYZ")
    await checkoutPage.enterZipCode("12345")
    await checkoutPage.clickContinueButton()
    await checkoutPage.clickFinishButton()
    await expect(checkoutPage.thankyouMessage).toBeVisible()
  })
})
