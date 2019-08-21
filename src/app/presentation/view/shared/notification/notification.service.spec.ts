import { TestBed } from '@angular/core/testing';

import { NotificationService } from './notification.service';
import { MatSnackBar } from '@angular/material';

describe('NotificationService:', () => {
  let service: NotificationService;
  let valueSpy: jasmine.SpyObj<MatSnackBar>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('MatSnackBar', ['openFromComponent', 'onAction']);

    TestBed.configureTestingModule({
      providers: [
        { provide: MatSnackBar, useValue: spy }
      ]
    });

    service = TestBed.get(NotificationService);
    valueSpy = TestBed.get(MatSnackBar);
  });

  xit('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  xit('deve executar o metodo open()', () => {
    const err = true;

    service.open(err);

    expect(valueSpy.dismiss.calls.count()).toBe(1);
  });
});
