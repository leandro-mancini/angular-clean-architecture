import { $, ElementFinder, browser } from 'protractor';

export class HomePage {
    btnNovoMotorista: ElementFinder;
    btnEditar: ElementFinder;
    btnInativar: ElementFinder;

    constructor() {
        this.btnNovoMotorista = $('.container .btn-new-driver');
        this.btnEditar = $('.mat-table .btn-edit');
        this.btnInativar = $('.mat-table .btn-enable');
    }
}
