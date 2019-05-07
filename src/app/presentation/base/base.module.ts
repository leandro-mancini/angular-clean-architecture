import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { ActivityBarComponent } from './activity-bar/activity-bar.component';
import { NavCurrentUserComponent } from './nav-current-user/nav-current-user.component';
import { BaseComponent } from './base.component';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { RouteReusableStrategy } from '../route-reusable-strategy';
import { MaterialModule } from '@app/material.module';
import { NgxPraxioUiModule } from 'ngx-praxio-ui';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    NgxPraxioUiModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    })
  ],
  declarations: [
    BaseComponent,
    HeaderComponent,
    ActivityBarComponent,
    NavCurrentUserComponent
  ],
  exports: [
    BaseComponent,
    HeaderComponent,
    ActivityBarComponent,
    NavCurrentUserComponent
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: RouteReusableStrategy
    }
  ]
})

export class BaseModule {
  constructor(matIconRegister: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegister.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/img/nc-icons.svg'));
    matIconRegister.addSvgIcon('logo-praxio', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/img/praxio.svg'));
  }
}
