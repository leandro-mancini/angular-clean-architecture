import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { InputComponent } from './components/input/input.component';
import { AppMaterialModule } from '../../app-material.module';
import { DialogCadastroComponent } from './dialogs/dialog-cadastro/dialog-cadastro.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    InputComponent,
    DialogCadastroComponent,
    NotificationComponent
  ],
  exports: [InputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    AppMaterialModule
  ],
  entryComponents: [
    DialogCadastroComponent,
    NotificationComponent
  ]
})
export class SharedModule { }
