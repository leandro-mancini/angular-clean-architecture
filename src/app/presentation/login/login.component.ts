import { Component, OnInit } from '@angular/core';

import { AuthenticationService, Logger } from '@app/core';

const log = new Logger('Login');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentials: any;

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.logout();
  }

  changeLogin(credentials) {
    this.credentials = credentials;

    log.debug(`${credentials.username} logado com sucesso`);
  }

  logout() {
    this.authenticationService.logout();
    this.credentials = null;
  }

}
