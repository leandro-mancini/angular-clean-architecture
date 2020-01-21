import { UsuarioUseCase } from './usuario-use-case';
import { TestBed } from '@angular/core/testing';
import { IUsuarioRepository } from '../../interfaces/repository/iusuario-repository';
import { IUsuarioValidator } from '../../interfaces/validations/iusuario-validator';

describe('UsuarioUseCase', () => {
  let usuarioUseCase: UsuarioUseCase;
  let usuarioRepository: jasmine.SpyObj<IUsuarioRepository>;
  let usuarioValidator: jasmine.SpyObj<IUsuarioValidator>;

  beforeEach(() => {
    const repositorySpy = jasmine.createSpyObj('IUsuarioRepository', ['login', 'logout']);
    const validationSpy = jasmine.createSpyObj('IUsuarioValidator', ['validateFields']);

    TestBed.configureTestingModule({
      providers: [
        { provide: IUsuarioRepository, useValue: repositorySpy },
        { provide: IUsuarioValidator, useValue: validationSpy }
      ]
    })
    .compileComponents();

    usuarioUseCase = TestBed.get(UsuarioUseCase);
    usuarioRepository = TestBed.get(IUsuarioRepository);
    usuarioValidator = TestBed.get(IUsuarioValidator);
  });

  it('deve ser criado', () => {
    expect(usuarioUseCase).toBeTruthy();
  });

  xit('deve executar o metodo login e ser valido', () => {
    const mock = {
      username: 'test',
      password: '123'
    };

    usuarioUseCase.login(mock);

    // expect(validationResult..IsValid).toBeFalsy();

    // spyOn(usuarioValidator, 'validateFields').and.returnValue(true);

    // expect(usuarioValidator.validateFields(mock)).toBeTruthy();
  });

  xit('deve executar o metodo login e ser invalido', () => {
    const mock = {
      username: '',
      password: ''
    };

    usuarioUseCase.login(mock);

    expect(usuarioValidator.validateFields(mock)).toBeFalsy();
  });

  it('deve executar o metodo logout', () => {
    usuarioUseCase.logout();
    expect(usuarioRepository.logout.calls.count()).toBe(1);
  });
});
