import { Injectable } from '@angular/core';
import { UsuarioModel } from 'src/app/core/domain/entity/usuario-model';

const credentialsKey = 'credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuario: UsuarioModel;

  constructor() {
    const savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);

    if (savedCredentials) {
      this.usuario = JSON.parse(savedCredentials);
    }
  }

  isAuthenticated(): boolean {
    return !!this.credentials;
  }

  get credentials(): UsuarioModel {
    return this.usuario;
  }

  set credentials(credentials: UsuarioModel) {
    this.usuario = credentials || null;

    if (credentials) {
      localStorage.setItem(credentialsKey, JSON.stringify(credentials));
    } else {
      localStorage.removeItem(credentialsKey);
    }
  }
}
