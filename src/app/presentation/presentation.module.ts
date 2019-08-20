import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewModule } from './view/view.module';
import { IUsuarioController } from '../core/interfaces/controllers/iusuario-controller';
import { UsuarioControllerService } from './controllers/usuario/usuario-controller.service';
import { IMotoristaController } from '../core/interfaces/controllers/imotorista-controller';
import { MotoristaControllerService } from './controllers/motorista/motorista-controller.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ViewModule
  ],
  exports: [ViewModule],
  providers: [
    { provide: IUsuarioController, useClass: UsuarioControllerService },
    { provide: IMotoristaController, useClass: MotoristaControllerService },
  ]
})
export class PresentationModule { }
