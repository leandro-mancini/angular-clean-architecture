import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCadastroComponent } from './dialog-cadastro.component';
import { MotoristaModel } from 'src/app/core/domain/entity/motorista-model';
import { IMotoristaController } from 'src/app/core/interfaces/controllers/imotorista-controller';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { NotificationService } from '../../notification/notification.service';
import { TranslateModule } from '@ngx-translate/core';

describe('DialogCadastroComponent:', () => {
  let component: DialogCadastroComponent;
  let fixture: ComponentFixture<DialogCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCadastroComponent ],
      providers: [
        MotoristaModel,
        IMotoristaController,
        FormBuilder,
        MatDialogRef,
        NotificationService
      ],
      imports: [
        TranslateModule.forRoot()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('deve criar', () => {
    expect(component).toBeTruthy();
  });

  xit('deve criar o form', () => {
    component.createForm();
  });
});
