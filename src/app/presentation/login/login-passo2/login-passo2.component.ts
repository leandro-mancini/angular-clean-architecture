import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import * as _ from 'lodash';
import { CredentialsModel } from '@app/core/domain/entities/credentials.model';

@Component({
  selector: 'app-login-passo2',
  templateUrl: './login-passo2.component.html',
  styleUrls: ['./login-passo2.component.scss']
})
export class LoginPasso2Component implements OnInit {
  @Input() credentials: CredentialsModel;

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
