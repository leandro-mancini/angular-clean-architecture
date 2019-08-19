import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { UsuarioModel } from '../../core/domain/entity/usuario-model';

const credentialsKey = 'credentials';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });

    authService = TestBed.get(AuthService);
  });

  afterEach(() => {
    localStorage.removeItem(credentialsKey);
    sessionStorage.removeItem(credentialsKey);
  });

  it('deve ser criado', () => {
    expect(authService).toBeTruthy();
  });

  describe('login', () => {
    it('deve retornar credenciais', () => {
      const usuario = {
        id: 1,
        username: 'test',
        email: 'test@test.com.br',
        token: '123'
      };

      authService.credentials = usuario;

      expect(authService.credentials).toBeDefined();
      expect(authService.credentials.token).toBeDefined();
    });

    it('deve autenticar usuário', () => {
      const usuario = {
        id: 1,
        username: 'test',
        email: 'test@test.com.br',
        token: '123'
      };

      authService.credentials = usuario;

      expect(authService.isAuthenticated()).toBe(true);
    });
  });

  describe('logout', () => {
    it('deve limpar a autenticação do usuário', () => {
      const usuario = null;

      authService.credentials = usuario;

      expect(authService.isAuthenticated()).toBe(false);
      expect(authService.credentials).toBeNull();
    });
  });
});
