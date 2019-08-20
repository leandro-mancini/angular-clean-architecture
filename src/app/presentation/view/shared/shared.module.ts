import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { InputComponent } from './components/input/input.component';
import { DialogCadastroComponent } from './dialogs/dialog-cadastro/dialog-cadastro.component';
import { NotificationComponent } from './notification/notification.component';
import { AppMaterialModule } from 'src/app/app-material.module';

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
