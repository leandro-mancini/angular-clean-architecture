import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ObterUsuarioUseCase } from '@app/core/usecases/usuario/base/ObterUsuarioUseCase';
import { IUsuarioModel } from '@app/core/domain/entities/usuario.model';

const credentialsKey = 'credentials';

@Injectable()
export class AuthenticationService {

  private credentials: IUsuarioModel | null;

  constructor(
    private obterUsuarioUseCase: ObterUsuarioUseCase
  ) {
    const savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);

    if (savedCredentials) {
      this.credentials = JSON.parse(savedCredentials);
    }
  }

  login(params: IUsuarioModel): Observable<IUsuarioModel> {
    return this.obterUsuarioUseCase.execute(params);
  }

  logout(): Observable<boolean> {
    this.setCredentials();
    return of(true);
  }

  isAuthenticated(): boolean {
    return !!this.getCredentials;
  }

  get getCredentials(): IUsuarioModel | null {
    return this.credentials;
  }

  setCredentials(credentials?: IUsuarioModel) {
    this.credentials = credentials || null;

    if (credentials) {
      localStorage.setItem(credentialsKey, JSON.stringify(credentials));
    } else {
      localStorage.removeItem(credentialsKey);
    }
  }

}
