import { $, ElementFinder, browser } from 'protractor';

export class LoginPage {
    username: ElementFinder;
    senha: ElementFinder;
    buttonEnter: ElementFinder;
    bemVindo: ElementFinder;
    buttonUser: ElementFinder;
    buttonLogout: ElementFinder;

    constructor() {
        this.username = $('[formcontrolname="username"] input');
        this.senha = $('[formcontrolname="senha"] input');
        this.buttonEnter = $('.action px-button');
        this.bemVindo = $('.login h6');
        this.buttonUser = $('.px-button-user');
        this.buttonLogout = $('app-nav-current-user .mat-menu-item');
    }

    navigateTo() {
        return browser.get('/');
    }
}
