import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { BaseComponent } from './base.component';
import { AppMaterialModule } from 'src/app/app-material.module';

@NgModule({
  declarations: [BaseComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    AppMaterialModule
  ]
})
export class BaseModule { }
