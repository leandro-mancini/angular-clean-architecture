import { TestBed } from '@angular/core/testing';

import { DriverUsecaseService } from './driver-usecase.service';

describe('DriverUsecaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DriverUsecaseService = TestBed.get(DriverUsecaseService);
    expect(service).toBeTruthy();
  });
});
