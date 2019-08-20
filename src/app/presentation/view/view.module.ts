import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseModule } from './base/base.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BaseModule,
    PagesModule,
    SharedModule
  ],
  exports: [
    PagesModule
  ]
})
export class ViewModule { }
