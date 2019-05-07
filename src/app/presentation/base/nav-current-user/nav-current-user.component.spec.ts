import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCurrentUserComponent } from './nav-current-user.component';

describe('NavCurrentUserComponent', () => {
  let component: NavCurrentUserComponent;
  let fixture: ComponentFixture<NavCurrentUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavCurrentUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCurrentUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
