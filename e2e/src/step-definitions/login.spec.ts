import { browser } from 'protractor';
import { Given, Then, When, Before, setDefaultTimeout } from 'cucumber';
import { expect } from './../config/chai-imports';

import { LoginPage } from './pages/login.po';

const login: LoginPage = new LoginPage();

setDefaultTimeout(browser.defaultTimeout);

Before(() => {
    browser.manage().window().maximize();
});

Given('que estou na página inicial {string}', { timeout: browser.pageLoadingTimeout }, async (text) => {
    await login.navigateTo();

    await expect(await browser.getTitle()).to.equal(text);
});

When('devo preencher o usuario {string}', { timeout: browser.pageLoadingTimeout }, async (username) => {
    await browser.actions().mouseMove(login.username).perform().then(() => {
      login.username.sendKeys(username);
    });
});

When('devo preencher a senha {string}', { timeout: browser.pageLoadingTimeout }, async (senha) => {
  await browser.actions().mouseMove(login.senha).perform().then(() => {
    login.senha.sendKeys(senha);
  });
});

When('devo clicar no botão {string}', { timeout: browser.pageLoadingTimeout }, async (text) => {
    await expect(await login.buttonEnter.getText()).to.equal(text);

    await browser.actions().mouseMove(login.buttonEnter).perform().then(() => {
      login.buttonEnter.click();
    });
});

Then('devo visualizar a mensagem de {string}', { timeout: browser.pageLoadingTimeout }, async (text) => {
    await browser.sleep(500);

    await expect(await login.bemVindo.getText()).to.contain(text);
});

Then('sou redirecionado para a página {string}', { timeout: browser.pageLoadingTimeout }, async (text) => {
    await browser.sleep(1000);

    await expect(await browser.getTitle()).to.equal(text);
});

When('devo clicar no botão perfil', { timeout: browser.pageLoadingTimeout }, async () => {
  await browser.actions().mouseMove(login.buttonUser).perform().then(() => {
    login.buttonUser.click();
  });
});

Given('devo clicar no botão logout {string}', { timeout: browser.pageLoadingTimeout }, async (text) => {
  await browser.sleep(500);

  await expect(await login.buttonLogout.getText()).to.equal(text);

  await browser.actions().mouseMove(login.buttonLogout).perform().then(() => {
    login.buttonLogout.click();
  });
});
