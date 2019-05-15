import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginGaragemComponent } from './login-garagem.component';

describe('LoginGaragemComponent', () => {
  let component: LoginGaragemComponent;
  let fixture: ComponentFixture<LoginGaragemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginGaragemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginGaragemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
