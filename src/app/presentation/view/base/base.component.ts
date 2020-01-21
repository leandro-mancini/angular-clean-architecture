import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/infra/auth/auth.service';
import { IUsuarioController } from 'src/app/domain/interfaces/controllers/iusuario-controller';
import { UserEntity } from '../../../domain/entities/user-entity';

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

  get usuario(): UserEntity {
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
