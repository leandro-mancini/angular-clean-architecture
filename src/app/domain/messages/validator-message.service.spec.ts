import { TestBed } from '@angular/core/testing';

import { ValidatorMessageService } from './validator-message.service';

describe('ValidatorMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidatorMessageService = TestBed.get(ValidatorMessageService);
    expect(service).toBeTruthy();
  });
});
