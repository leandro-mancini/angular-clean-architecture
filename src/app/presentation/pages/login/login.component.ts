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

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  get usuario(): IUsuarioModel {
    return this.authenticationService.getCredentials;
  }

}
