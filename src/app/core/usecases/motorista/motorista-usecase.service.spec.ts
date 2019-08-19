import { TestBed } from '@angular/core/testing';

import { MotoristaUsecaseService } from './motorista-usecase.service';

describe('MotoristaUsecaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: MotoristaUsecaseService = TestBed.get(MotoristaUsecaseService);
    expect(service).toBeTruthy();
  });
});
