import { DomainModel } from './domain-model';

describe('DomainModel:', () => {
  it('deve ser criado uma instancia', () => {
    expect(new DomainModel()).toBeTruthy();
  });
});
