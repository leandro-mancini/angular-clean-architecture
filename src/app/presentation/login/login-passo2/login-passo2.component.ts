import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import * as _ from 'lodash';
import { IUsuarioModel } from '@app/core/domain/entities/usuario.model';

@Component({
  selector: 'app-login-passo2',
  templateUrl: './login-passo2.component.html',
  styleUrls: ['./login-passo2.component.scss']
})
export class LoginPasso2Component implements OnInit {
  @Input() usuario: IUsuarioModel;

  @Output() changeLogout = new EventEmitter<any>();

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  entrar() {
    this.router.navigate(['/'], { replaceUrl: true });
  }

  logout() {
    this.changeLogout.emit();
  }

}
