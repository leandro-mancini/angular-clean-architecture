import { TestBed } from '@angular/core/testing';

import { MotoristaControllerService } from './motorista-controller.service';
import { IMotoristaUsecase } from '../../../core/interfaces/usecases/imotorista-usecase';
import { MotoristaModel } from '../../../core/domain/entity/motorista-model';

describe('MotoristaControllerService:', () => {
  let motoristaController: MotoristaControllerService;
  let motoristaUseCase: jasmine.SpyObj<IMotoristaUsecase>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('IUsuarioUseCase', ['get', 'insert', 'update', 'disableEnable']);

    TestBed.configureTestingModule({
      providers: [
        { provide: IMotoristaUsecase, useValue: spy }
      ]
    });

    motoristaUseCase = TestBed.get(IMotoristaUsecase);
    motoristaController = TestBed.get(MotoristaControllerService);
  });

  it('deve ser criado', () => {
    expect(motoristaController).toBeTruthy();
  });

  it('deve chamar o metodo get() passando um ID', () => {
    const id = 1;

    motoristaController.get(id);

    expect(motoristaUseCase.get.calls.count()).toBe(1);
  });

  it('deve chamar o metodo get() sem passar um ID', () => {
    motoristaController.get();

    expect(motoristaUseCase.get.calls.count()).toBe(1);
  });

  it('deve chamar o metodo insert()', () => {
    const motorista = new MotoristaModel();

    motoristaController.insert(motorista);

    expect(motoristaUseCase.insert.calls.count()).toBe(1);
  });

  it('deve chamar o metodo update()', () => {
    const motorista = new MotoristaModel();

    motoristaController.update(motorista);

    expect(motoristaUseCase.update.calls.count()).toBe(1);
  });

  it('deve chamar o metodo disableEnable()', () => {
    const id = 1;
    const status = true;

    motoristaController.disableEnable(id, status);

    expect(motoristaUseCase.disableEnable.calls.count()).toBe(1);
  });
});
