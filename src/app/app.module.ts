import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@env/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from '@app/core';
import { PresentationModule } from '@app/presentation/presentation.module';
import { MaterialModule } from '@app/material.module';
import { DataModule } from './data/data.module';
import { CredentialsRepository } from './core/repositories/credentials.repository';
import { CredentialsMockRepository } from './data/repository/credential-mock-repository/credentials-mock-repository';

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
    CoreModule,
    DataModule,
    PresentationModule
  ],
  providers: [
    {
      provide: CredentialsRepository, useClass: CredentialsMockRepository
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
