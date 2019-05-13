import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgxPraxioUiModule } from 'ngx-praxio-ui';

import { DialogUsuarioComponent } from './dialog/dialog-usuario/dialog-usuario.component';
import { MaterialModule } from '@app/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DialogUsuarioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    NgxPraxioUiModule,
    MaterialModule
  ],
  exports: [
    DialogUsuarioComponent
  ],
  entryComponents: [
    DialogUsuarioComponent
  ]
})
export class SharedModule { }
