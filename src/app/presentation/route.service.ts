import { Route as ngRoute, Routes } from '@angular/router';

import { BaseComponent } from './base/base.component';
import { RouteGuard } from './route.guard';

/**
 * Provides helper methods to create routes.
 */
export class Route {

  /**
   * Creates routes using the shell component and authentication.
   * @param routes The routes to add.
   * @return {Route} The new route using shell as the base.
   */
  static withShell(routes: Routes): ngRoute {
    return {
      path: '',
      component: BaseComponent,
      children: routes,
      canActivate: [RouteGuard],
      // Reuse ShellComponent instance when navigating between child views
      data: { reuse: true }
    };
  }

}
