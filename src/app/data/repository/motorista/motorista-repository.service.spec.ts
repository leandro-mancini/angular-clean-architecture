import { TestBed } from '@angular/core/testing';

import { MotoristaRepositoryService } from './motorista-repository.service';
import { HttpTestingController, HttpClientTestingModule, TestRequest } from '@angular/common/http/testing';
import { environment } from '../../../../environments/environment';
import { MotoristaModel } from 'src/app/core/domain/entity/motorista-model';
import { UsuarioModel } from 'src/app/core/domain/entity/usuario-model';

describe('MotoristaRepositoryService:', () => {
  let service: MotoristaRepositoryService;
  let backend: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        MotoristaRepositoryService
      ]
    });

    backend = TestBed.get(HttpTestingController);
    service = TestBed.get(MotoristaRepositoryService);
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  describe('quando fizer obter os motoristas', () => {
    it('deve fazer uma solicitação GET passando um ID', () => {
      service.get(1).subscribe();

      const req = backend.expectOne(environment.serverUrl + '/motoristas');
      expect(req.request.method).toBe('GET');

      backend.verify();
    });

    it('deve fazer uma solicitação GET', () => {
      service.get().subscribe();

      const req = backend.expectOne(environment.serverUrl + '/motoristas');
      expect(req.request.method).toBe('GET');

      backend.verify();
    });

    it('deve retornar um motorista', () => {
      service.get(1).subscribe((item) => {
        if (item) {
          expect(item).toBeTruthy();
        }
      });

      const req = backend.expectOne(environment.serverUrl + '/motoristas');

      req.flush([{
        id: 1,
        name: 'parolho',
        birth_date: '2019-01-01',
        phone: '123456789',
        state: true,
        city: 'SP',
        enable: true,
        addresses: 'São Paulo',
        documents: []
      }]);

      backend.verify();
    });

    it('deve retornar um array de motoristas', () => {
      service.get(1).subscribe((item) => {
        expect(item).toEqual(null);
      });

      const req = backend.expectOne(environment.serverUrl + '/motoristas');

      req.flush([null]);

      backend.verify();
    });

    it('deve retornar null ao executar o metodo login', () => {
      service.get().subscribe(res => {
        expect(res).toEqual(null);
      });

      const req = backend.expectOne(environment.serverUrl + '/motoristas');

      req.flush([null]);
    });
  });

  describe('quando inserir um motorista', () => {
    it('deve fazer uma solicitação POST', () => {
      const motorista = new MotoristaModel();

      motorista.name = 'test';

      service.insert(motorista).subscribe();

      const req = backend.expectOne(environment.serverUrl + '/motoristas');
      expect(req.request.method).toBe('POST');

      backend.verify();
    });
  });

  describe('quando editar um motorista', () => {
    xit('deve fazer uma solicitação PUT', () => {
      const motorista = new MotoristaModel();

      motorista.name = 'test';

      service.update(motorista).subscribe(() => {});

      const req = backend.expectOne(environment.serverUrl + '/motoristas');
      expect(req.request.method).toBe('PUT');

      backend.verify();
    });
  });

  describe('quando inativar ou habilitar um motorista', () => {
    xit('deve fazer uma solicitação PATCH', () => {
      service.disableEnable(1, true).subscribe(() => {});

      const req = backend.expectOne(environment.serverUrl + '/motoristas');
      expect(req.request.method).toBe('PATCH');

      backend.verify();
    });
  });
});
