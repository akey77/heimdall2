import {Page} from 'puppeteer';

export class LogInPage {
  async loginSuccess(page: Page, user: any): Promise<void> {
    await expect(page).toFillForm('#login_form', {
      login: user.email,
      password: user.password
    });
    await Promise.all([
      page.waitForSelector('#upload-btn'),
      page.click('#login_button')
    ]);
  }

  async loginFailure(page: Page, user: any): Promise<void> {
    await expect(page).toFillForm('#login_form', {
      login: user.email,
      password: user.password
    });
    await Promise.all([
      page.waitForSelector('.toasted.white--text.toasted-primary.default'),
      page.click('#login_button')
    ]);
  }

  async logout(page: Page): Promise<void> {
    await Promise.all([
      page.waitForSelector('#login_button'),
      page.click('#logout')
    ]);
  }

  async switchToRegister(page: Page): Promise<void> {
    await Promise.all([
      page.waitForSelector('#login_button'),
      page.click('#sign_up_button')
    ]);
  }
}
