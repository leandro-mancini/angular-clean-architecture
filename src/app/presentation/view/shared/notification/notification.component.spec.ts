import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationComponent } from './notification.component';
import { MatSnackBar } from '@angular/material';

describe('NotificationComponent', () => {
  let component: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;
  let matSnackBar: MatSnackBar;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('MatSnackBar', ['openFromComponent']);

    TestBed.configureTestingModule({
      declarations: [ NotificationComponent ],
      providers: [
        { provide: MatSnackBar, useValue: spy }
      ]
    })
    .compileComponents();

    matSnackBar = TestBed.get(MatSnackBar);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
