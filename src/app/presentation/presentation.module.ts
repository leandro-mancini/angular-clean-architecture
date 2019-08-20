import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { BaseModule } from './base/base.module';
import { IUsuarioController } from '../core/interfaces/controllers/iusuario-controller';
import { UsuarioControllerService } from './controllers/usuario/usuario-controller.service';
import { IMotoristaController } from '../core/interfaces/controllers/imotorista-controller';
import { MotoristaControllerService } from './controllers/motorista/motorista-controller.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BaseModule,
    PagesModule,
    SharedModule
  ],
  exports: [PagesModule],
  providers: [
    { provide: IUsuarioController, useClass: UsuarioControllerService },
    { provide: IMotoristaController, useClass: MotoristaControllerService },
  ]
})
export class PresentationModule { }
