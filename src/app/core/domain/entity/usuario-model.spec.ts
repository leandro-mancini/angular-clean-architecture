import { UsuarioModel } from './usuario-model';

describe('UsuarioModel:', () => {
  it('deve ser criado uma instancia', () => {
    expect(new UsuarioModel()).toBeTruthy();
  });
});
