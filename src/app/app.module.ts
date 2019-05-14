import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@env/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MaterialModule } from '@app/material.module';
import { CoreModule } from './core/core.module';
import { DataModule } from './data/data.module';
import { InfraModule } from './infra/infra.module';
import { PresentationModule } from '@app/presentation/presentation.module';

import { IUsuarioRepository } from './core/interfaces/repositories/IUsuarioRepository';
import { UsuarioMockRepository } from './data/repository/usuario/mock/UsuarioMockRepository';
import { IUsuarioService } from '@app/core/interfaces/services/IUsuarioService';
import { UsuarioService } from './data/services/usuario.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    NgbModule,
    MaterialModule,
    CoreModule,
    DataModule,
    InfraModule,
    PresentationModule
  ],
  providers: [
    {
      provide: IUsuarioRepository, useClass: UsuarioMockRepository
    },
    {
      provide: IUsuarioService, useClass: UsuarioService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
