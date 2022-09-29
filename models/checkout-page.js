export class CheckoutPage {
  constructor(page) {
    this.firstNameField = page.locator('[data-test="firstName"]')
    this.lastNameField = page.locator('[data-test="lastName"]')
    this.zipCodeField = page.locator('[data-test="postalCode"]')
    this.checkoutBtn = page.locator('[data-test="checkout"]')
    this.continueBtn = page.locator('[data-test="continue"]')
    this.finishBtn = page.locator('[data-test="finish"]')
    this.thankyouMessage = page.locator('.complete-header')
  }

  async enterFirstName (text) {
    await this.firstNameField.fill(text)
  }
  async enterlastName (text) {
    await this.lastNameField.fill(text)
  }
  async enterZipCode (text) {
    await this.zipCodeField.fill(text)
  }
  async clickContinueButton () {
    await this.continueBtn.click()
  }
  
  async clickFinishButton () {
    await this.finishBtn.click()
  }

  async clickCheckoutButton () {
    await this.checkoutBtn.click()
  }
}
