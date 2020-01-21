import { TestBed } from '@angular/core/testing';

import { MotoristaValidatorService } from './motorista-validator.service';

describe('MotoristaValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: MotoristaValidatorService = TestBed.get(MotoristaValidatorService);
    expect(service).toBeTruthy();
  });
});
