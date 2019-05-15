import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgxPraxioUiModule } from 'ngx-praxio-ui';

import { MaterialModule } from '@app/material.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginPasso1Component } from './login-passo1/login-passo1.component';
import { LoginPasso2Component } from './login-passo2/login-passo2.component';

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
    LoginPasso1Component,
    LoginPasso2Component
  ]
})
export class LoginModule { }
