import { MotoristaModel } from './motorista-model';

describe('MotoristaModel:', () => {
  it('deve ser criado uma instancia', () => {
    expect(new MotoristaModel()).toBeTruthy();
  });
});
