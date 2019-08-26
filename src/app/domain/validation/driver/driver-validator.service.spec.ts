import { TestBed } from '@angular/core/testing';

import { DriverValidatorService } from './driver-validator.service';

describe('DriverValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DriverValidatorService = TestBed.get(DriverValidatorService);
    expect(service).toBeTruthy();
  });
});
