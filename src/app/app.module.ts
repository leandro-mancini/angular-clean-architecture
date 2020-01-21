import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { PresentationModule } from './presentation/presentation.module';
import { InfraModule } from './infra/infra.module';
import { DataModule } from './data/data.module';
import { environment } from '../environments/environment';
import { DomainModule } from './domain/domain.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    DomainModule,
    DataModule,
    InfraModule,
    PresentationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
