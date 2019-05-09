import { Component, OnInit } from '@angular/core';

import { Logger } from '@app/infra/log/logger.service';
import { AuthenticationService } from '@app/infra/authentication/authentication.service';
import { IUsuarioModel } from '@app/core/domain/entities/usuario.model';


const log = new Logger('Login');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario: IUsuarioModel;

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.logout();
  }

  changeLogin(credentials: IUsuarioModel) {
    this.usuario = credentials;

    log.debug(`${credentials.username} logado com sucesso`);
  }

  logout() {
    this.authenticationService.logout();
    this.usuario = null;
  }

}
