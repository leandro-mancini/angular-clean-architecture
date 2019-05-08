import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CredentialsModel } from '@app/core/domain/entities/credentials.model';
import { LoginUsuarioUseCase } from '@app/core/usecases/usuario/base/LoginUsuarioUseCase';

const credentialsKey = 'credentials';

@Injectable()
export class AuthenticationService {

  private credentials: CredentialsModel | null;

  constructor(
    private loginUsuarioUseCase: LoginUsuarioUseCase
  ) {
    const savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);

    if (savedCredentials) {
      this.credentials = JSON.parse(savedCredentials);
    }
  }

  login(params: CredentialsModel): Observable<CredentialsModel> {
    return this.loginUsuarioUseCase.execute(params);
  }

  logout(): Observable<boolean> {
    this.setCredentials();
    return of(true);
  }

  isAuthenticated(): boolean {
    return !!this.getCredentials;
  }

  get getCredentials(): CredentialsModel | null {
    return this.credentials;
  }

  setCredentials(credentials?: CredentialsModel) {
    this.credentials = credentials || null;

    if (credentials) {
      localStorage.setItem(credentialsKey, JSON.stringify(credentials));
    } else {
      localStorage.removeItem(credentialsKey);
    }
  }

}
