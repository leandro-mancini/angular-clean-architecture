import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUsuarioComponent } from './dialog-usuario.component';

describe('DialogUsuarioComponent', () => {
  let component: DialogUsuarioComponent;
  let fixture: ComponentFixture<DialogUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
