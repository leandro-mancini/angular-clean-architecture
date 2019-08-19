import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DataGeneratedModule } from './data-generated.module';
import { IUsuarioRepository } from '../core/interfaces/repository/iusuario-repository';
import { UsuarioRepository } from './repository/usuario/usuario-repository';
import { IMotoristaRepository } from '../core/interfaces/repository/imotorista-repository';
import { MotoristaRepositoryService } from './repository/motorista/motorista-repository.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    DataGeneratedModule
  ],
  providers: [
    { provide: IUsuarioRepository, useClass: UsuarioRepository },
    { provide: IMotoristaRepository, useClass: MotoristaRepositoryService }
  ]
})
export class DataModule { }
