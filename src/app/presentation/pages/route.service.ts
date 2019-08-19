import { Injectable } from '@angular/core';
import { Routes, Route as ngRoute } from '@angular/router';

import { BaseComponent } from '../base/base.component';
import { AuthGuard } from 'src/app/infra/auth/auth.guard';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  static withShell(routes: Routes): ngRoute {
    return {
      path: '',
      component: BaseComponent,
      children: routes,
      canActivate: [AuthGuard]
    };
  }

}
