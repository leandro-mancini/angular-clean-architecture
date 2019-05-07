import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgxPraxioUiModule } from 'ngx-praxio-ui';

import { MaterialModule } from '@app/material.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { LoginGaragemComponent } from './login-garagem/login-garagem.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    NgxPraxioUiModule,
    MaterialModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent,
    LoginUsuarioComponent,
    LoginGaragemComponent
  ]
})
export class LoginModule { }
