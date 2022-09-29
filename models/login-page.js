exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page
    this.userNameField = page.locator('[data-test="username"]')
    this.passField = page.locator('[data-test="password"]')
    this.loginBtn = page.locator('[data-test="login-button"]')
  }

  //actions

  async navigate () {
    await this.page.goTo("/")
  }

  async enterUsername(username){
    await this.userNameField.fill(username)
  }

  async enterPassword(password) {
    await this.passField.fill(password)
  }

  async clickLoginBtn(){
    await this.loginBtn.click()
  }
}