import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@env/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PresentationModule } from '@app/presentation/presentation.module';
import { MaterialModule } from '@app/material.module';
import { IUsuarioRepository } from './core/interfaces/repositories/IUsuarioRepository';
import { UsuarioMockRepository } from './data/repository/usuario/mock/UsuarioMockRepository';
import { InfraModule } from './infra/infra.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    MaterialModule,
    InfraModule,
    PresentationModule
  ],
  providers: [
    {
      provide: IUsuarioRepository, useClass: UsuarioMockRepository
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
