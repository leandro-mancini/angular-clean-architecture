import { browser } from 'protractor';
import { Given, Then, When, Before, setDefaultTimeout } from 'cucumber';
import { expect } from './../config/chai-imports';

import { HomePage } from './pages/home.po';
import { DialogPage } from './pages/dialog.po';

const home: HomePage = new HomePage();
const dialog: DialogPage = new DialogPage();

setDefaultTimeout(browser.defaultTimeout);

Before(() => {
    browser.manage().window().maximize();
});

Given('que eu estou na página {string}', { timeout: browser.pageLoadingTimeout }, async (text) => {
    await expect(await browser.getTitle()).to.equal(text);

    await browser.sleep(1000);
});

When('devo clicar no botão {string} para adicionar', { timeout: browser.pageLoadingTimeout }, async () => {
    await browser.actions().mouseMove(home.btnNovoMotorista).perform().then(() => {
      home.btnNovoMotorista.click();
    });

    await browser.sleep(1000);
});

When('devo clicar no botão {string} da lista', { timeout: browser.pageLoadingTimeout }, async (text) => {
  await browser.sleep(500);

  await browser.actions().mouseMove(home.btnEditar).perform().then(() => {
    home.btnEditar.click();
  });

  await browser.sleep(1000);
});

When('devo visualizar o dialog {string}', { timeout: browser.pageLoadingTimeout }, async (text) => {
  await expect(await dialog.titulo.getText()).to.contain(text);

  await browser.sleep(1000);
});

When('devo preencher o nome {string}', { timeout: browser.pageLoadingTimeout }, async (value) => {
  await browser.actions().mouseMove(dialog.inputNome).perform().then(() => {
    dialog.inputNome.clear();
    dialog.inputNome.sendKeys(value);
  });
});

When('devo preencher a data de nasc. {string}', { timeout: browser.pageLoadingTimeout }, async (value) => {
  await browser.actions().mouseMove(dialog.inputDataNascimento).perform().then(() => {
    dialog.inputDataNascimento.clear();
    dialog.inputDataNascimento.sendKeys(value);
  });
});

When('devo preencher o telefone {string}', { timeout: browser.pageLoadingTimeout }, async (value) => {
  await browser.actions().mouseMove(dialog.inputTelefone).perform().then(() => {
    dialog.inputTelefone.clear();
    dialog.inputTelefone.sendKeys(value);
  });
});

When('devo selecionar o tipo de documento {string}', { timeout: browser.pageLoadingTimeout }, async (value) => {
  await browser.actions().mouseMove(dialog.inputTipoDocumento).perform().then(() => {
    dialog.inputTipoDocumento.click();
  });
});

When('devo preencher o número {string}', { timeout: browser.pageLoadingTimeout }, async (value) => {
  await browser.actions().mouseMove(dialog.inputNumero).perform().then(() => {
    dialog.inputNumero.clear();
    dialog.inputNumero.sendKeys(value);
  });
});

Then('devo clicar no botão {string} e grava um novo motorista', { timeout: browser.pageLoadingTimeout }, async (text) => {
  await browser.sleep(500);

  await expect(await dialog.btnSalvar.getText()).to.contain(text);

  await browser.actions().mouseMove(dialog.btnSalvar).perform().then(() => {
    dialog.btnSalvar.click();
  });
});

Then('devo ativar ou inativar um item da lista', { timeout: browser.pageLoadingTimeout }, async () => {
  await browser.sleep(500);

  await browser.actions().mouseMove(home.btnInativar).perform().then(() => {
    home.btnInativar.click();
  });
});
