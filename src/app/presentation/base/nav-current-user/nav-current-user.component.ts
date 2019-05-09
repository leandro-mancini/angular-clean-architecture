import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '@app/infra/authentication/authentication.service';

@Component({
  selector: 'app-nav-current-user',
  templateUrl: './nav-current-user.component.html',
  styleUrls: ['./nav-current-user.component.scss']
})
export class NavCurrentUserComponent implements OnInit {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  get username(): string {
    const credentials = this.authenticationService.getCredentials;
    return credentials ? credentials.username : null;
  }

  logout() {
    this.authenticationService.logout()
      .subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

}
