import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseComponent } from './base.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { RouterModule, Router } from '@angular/router';
import { IUsuarioController } from 'src/app/core/interfaces/controllers/iusuario-controller';
import { RouterTestingModule } from '@angular/router/testing';
import { UsuarioModel } from 'src/app/core/domain/entity/usuario-model';
import { Observable, of } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';

class MockUsuarioController {
  get(): UsuarioModel {
    return {
      id: 1,
      username: 'test',
      email: 'test@teste.com.br',
      token: '123'
    };
  }

  logout(): Observable<boolean> {
    return of(true);
  }
}

describe('BaseComponent', () => {
  let component: BaseComponent;
  let fixture: ComponentFixture<BaseComponent>;
  let usuarioController: MockUsuarioController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        AppMaterialModule,
        RouterTestingModule
      ],
      providers: [
        { provide: IUsuarioController, useClass: MockUsuarioController }
      ],
      declarations: [ BaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar', () => {
    expect(component).toBeTruthy();
  });

  it('deve obter as credenciais', () => {
    const mock = {
      id: 1,
      username: 'test',
      email: 'test@teste.com.br',
      token: '123'
    };

    usuarioController = new MockUsuarioController();

    spyOn(usuarioController, 'get').and.returnValue(mock);

    expect(usuarioController.get()).toBeTruthy();

    // component.usuario = usuarioController.get();

    // usuarioController = new MockUsuarioController();

    // component.usuario = usuarioController.get();
    // const user = usuarioController.get();
  });

  it('deve deslogar usuario', () => {
    component.logout();
  });
});
