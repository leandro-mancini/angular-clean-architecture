import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

import { IUsuarioController } from '../../../core/interfaces/controllers/iusuario-controller';
import { UsuarioModel } from '../../../core/domain/entity/usuario-model';
import { AuthService } from '../../../infra/auth/auth.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../shared/notification/notification.service';
import { ValidationError } from 'ts.validator.fluent/dist';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  isLoading: boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router,
    private notification: NotificationService,
    private usuarioController: IUsuarioController
  ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    this.isLoading = true;

    this.usuarioController
    .login(this.form.value)
    .pipe(finalize(() => {
      this.isLoading = false;
    }))
    .subscribe(
      (usuario: UsuarioModel) => this.loginResponse(usuario),
      (err: ValidationError[]) => this.notification.open(err)
    );
 
  }

  loginResponse(usuario: UsuarioModel) {
    if (usuario) {
      this.authService.credentials = usuario;
      this.router.navigateByUrl('/home');
    } else {
      this.snackBar.open('Usuário ou senha inválidos.', null, {
        duration: 2000
      });
    }
  }
  

}
