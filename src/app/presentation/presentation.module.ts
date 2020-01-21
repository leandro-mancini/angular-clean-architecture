import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewModule } from './view/view.module';
import { UsuarioControllerService } from './controllers/usuario/usuario-controller.service';
import { MotoristaControllerService } from './controllers/motorista/motorista-controller.service';
import { IUsuarioController } from '../domain/interfaces/controllers/iusuario-controller';
import { IMotoristaController } from '../domain/interfaces/controllers/imotorista-controller';

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
