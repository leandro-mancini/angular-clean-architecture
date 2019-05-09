import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { ToastService } from 'ngx-praxio-ui';
import * as _ from 'lodash';

import { CredentialsModel } from '@app/core/domain/entities/credentials.model';
import { ValidationError } from 'ts.validator.fluent/dist';
import { AuthenticationService } from '@app/infra/authentication/authentication.service';

@Component({
  selector: 'app-login-passo1',
  templateUrl: './login-passo1.component.html',
  styleUrls: ['./login-passo1.component.scss']
})
export class LoginPasso1Component implements OnInit {
  @Output() changeLogin = new EventEmitter<any>();

  loginForm: FormGroup;

  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private toast: ToastService
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  login() {
    this.isLoading = true;

    this.authenticationService.login(this.loginForm.value)
    .pipe(finalize(() => {
      this.isLoading = false;
    }))
    .subscribe((credentials: CredentialsModel) => {
      if (credentials) {
        this.authenticationService.setCredentials(credentials);
        this.changeLogin.emit(credentials);
      } else {
        this.toast.open('Usuário ou senha inválidos.');
      }
    }, err => this.errorHandler(err));
  }

  errorHandler(err) {
    const erros: string[] = [];

    _.forEach(err, (x: ValidationError) => {
      const msg = x.Message;

      erros.push(msg + '<br>');
    });

    this.toast.open(_.join(erros, ' '));
  }

}
