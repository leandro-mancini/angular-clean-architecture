import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { ValidationError } from 'ts.validator.fluent/dist';

import { AuthService } from 'src/app/infra/auth/auth.service';
import { NotificationService } from '../../shared/notification/notification.service';
import { IUsuarioController } from 'src/app/domain/interfaces/controllers/iusuario-controller';
import { UserEntity } from '../../../../domain/entities/user-entity';

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
      (usuario: UserEntity) => this.loginResponse(usuario),
      (err: ValidationError[]) => this.notification.open(err)
    );

  }

  loginResponse(usuario: UserEntity) {
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
