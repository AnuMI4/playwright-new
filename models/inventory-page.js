export class InventoryPage {
  constructor(page) {
    this.backPackAddToCartBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
    this.tshirtAddToCartBtn = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
    this.jacketAddToCartBtn = page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')
    this.shoppingCart = page.locator('.shopping_cart_container a')
  }

  async clickBackPackButton () {
    await this.backPackAddToCartBtn.click()
  }

  async clickTshirtButton () {
    await this.tshirtAddToCartBtn.click()
  }

  async clickJacketButton () {
    await this.jacketAddToCartBtn.click()
  }

  async clickShoppingCart () {
    await this.shoppingCart.click()
  }
}