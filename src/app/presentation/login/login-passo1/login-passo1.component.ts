import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { ToastService } from 'ngx-praxio-ui';
import * as _ from 'lodash';

import { IUsuarioModel } from '@app/core/domain/entities/usuario.model';
import { NotificationToast } from '@app/presentation/notification/notification.toast';
import { IUsuarioService } from '@app/core/interfaces/services/IUsuarioService';
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
    private notificationToast: NotificationToast,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private iUsuarioService: IUsuarioService,
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

    this.iUsuarioService.obter(this.loginForm.value)
    .pipe(finalize(() => {
      this.isLoading = false;
    }))
    .subscribe((usuario: IUsuarioModel) => {
      if (usuario) {
        console.log(usuario);
        this.authenticationService.setCredentials(usuario);
        // this.changeLogin.emit(usuario);
      } else {
        this.toast.open('Usuário ou senha inválidos.');
      }
    }, err => this.notificationToast.error(err));
  }

}
