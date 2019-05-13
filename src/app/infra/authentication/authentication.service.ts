import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUsuarioModel } from '@app/core/domain/entities/usuario.model';
import { UsuarioService } from '@app/data/services/usuario.service';

const credentialsKey = 'credentials';

@Injectable()
export class AuthenticationService {

  private credentials: IUsuarioModel | null;

  constructor(
    private usuarioService: UsuarioService
  ) {
    const savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);

    if (savedCredentials) {
      this.credentials = JSON.parse(savedCredentials);
    }
  }

  login(params: IUsuarioModel): Observable<IUsuarioModel> {
    return this.usuarioService.obter(params);
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
