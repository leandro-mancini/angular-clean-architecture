import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '@app/app-routing.module';
import { LoginModule } from '@app/presentation/login/login.module';
import { HomeModule } from '@app/presentation/home/home.module';
import { BaseModule } from './base/base.module';
import { RouteGuard } from './route.guard';

@NgModule({
  imports: [
    CommonModule,
    BaseModule,
    LoginModule,
    HomeModule,
    AppRoutingModule
  ],
  declarations: [],
  exports: [
    AppRoutingModule
  ],
  providers: [
    RouteGuard
  ]
})
export class PresentationModule { }
