import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IUsuarioController } from 'src/app/core/interfaces/controllers/iusuario-controller';
import { AuthService } from 'src/app/infra/auth/auth.service';
import { UsuarioModel } from 'src/app/core/domain/entity/usuario-model';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private usuarioController: IUsuarioController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  get usuario(): UsuarioModel {
    return this.authService.credentials;
  }

  logout() {
    this.usuarioController.logout()
    .subscribe(() => this.responseLogout());
  }

  responseLogout() {
    this.authService.credentials = null;
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }

}
