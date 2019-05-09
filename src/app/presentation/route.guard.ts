import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { Logger } from '@app/infra/log/logger.service';
import { AuthenticationService } from '@app/infra/authentication/authentication.service';

const log = new Logger('RouteGuard');

@Injectable()
export class RouteGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  canActivate(): boolean {
    if (this.authenticationService.isAuthenticated()) {
      return true;
    }

    log.debug('Não autenticado, redirecionando...');
    this.router.navigate(['/login'], { replaceUrl: true });
    return false;
  }

}
