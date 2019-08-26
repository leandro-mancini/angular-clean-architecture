import { TestBed } from '@angular/core/testing';

import { UserValidatorService } from './user-validator.service';

describe('UserValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserValidatorService = TestBed.get(UserValidatorService);
    expect(service).toBeTruthy();
  });
});
