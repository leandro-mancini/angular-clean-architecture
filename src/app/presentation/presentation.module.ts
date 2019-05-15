import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '@app/app-routing.module';
import { LoginModule } from '@app/presentation/pages/login/login.module';
import { HomeModule } from '@app/presentation/pages/home/home.module';
import { BaseModule } from './base/base.module';
import { RouteGuard } from './route.guard';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BaseModule,
    SharedModule,
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
