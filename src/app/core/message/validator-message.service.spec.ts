import { TestBed } from '@angular/core/testing';

import { ValidatorMessageService } from './validator-message.service';
import { TranslateService } from '@ngx-translate/core';

describe('ValidatorMessageService:', () => {
  let validatorMessageService: ValidatorMessageService;
  let translate: TranslateService;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TranslateService
    ]
  }));

  beforeEach(() => {
    validatorMessageService = TestBed.get(ValidatorMessageService);
    translate = TestBed.get(TranslateService);
  });

  xit('deve ser criado', () => {
    const service: ValidatorMessageService = TestBed.get(ValidatorMessageService);
    expect(service).toBeTruthy();
  });

  xit('deve retornar um texto do tipo required', () => {
    validatorMessageService.required('Usuário');
  });
});
