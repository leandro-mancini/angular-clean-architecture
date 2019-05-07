import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import * as _ from 'lodash';
import { CredentialsModel } from '@app/core/domain/entities/credentials.model';

@Component({
  selector: 'app-login-garagem',
  templateUrl: './login-garagem.component.html',
  styleUrls: ['./login-garagem.component.scss']
})
export class LoginGaragemComponent implements OnInit {
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
