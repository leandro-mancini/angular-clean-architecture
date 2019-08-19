import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

class MockRouter {
  navigateByUrl(path) {}
}

describe('AuthGuard', () => {
  let authGuard: AuthGuard;
  let authService;
  let router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard]
    });
  });

  describe('canActivate', () => {
    it('deve retornar true para um usuário logado', () => {
      authService = { isAuthenticated: () => true };
      router = new MockRouter();
      authGuard = new AuthGuard(router, authService);

      expect(authGuard.canActivate()).toEqual(true);
    });

    it('deve navegar para o login um usuário desconectado', () => {
      authService = { isAuthenticated: () => false };
      router = new MockRouter();
      authGuard = new AuthGuard(router, authService);

      spyOn(router, 'navigateByUrl');

      expect(authGuard.canActivate()).toEqual(false);
      expect(router.navigateByUrl).toHaveBeenCalledWith('/login', { replaceUrl: true });
    });
  });
});
