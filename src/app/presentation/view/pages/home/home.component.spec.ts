import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { IMotoristaController } from 'src/app/core/interfaces/controllers/imotorista-controller';
import { of, Observable } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../shared/shared.module';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DialogCadastroComponent } from '../../shared/dialogs/dialog-cadastro/dialog-cadastro.component';
import { TranslateModule } from '@ngx-translate/core';
import { MotoristaModel } from 'src/app/core/domain/entity/motorista-model';

class MatDialogMock {
  // When the component calls this.dialog.open(...) we'll return an object
  // with an afterClosed method that allows to subscribe to the dialog result observable.
  open() {
    return {
      afterClosed: () => of(true)
    };
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let motoristaController: jasmine.SpyObj<IMotoristaController>;
  let dialog: MatDialogMock;

  beforeEach(async(() => {
    const controllerSpy = jasmine.createSpyObj('IUsuarioController', ['get', 'insert', 'update', 'disableEnable']);

    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        AppMaterialModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot(),
        SharedModule
      ],
      providers: [
        { provide: IMotoristaController, useValue: controllerSpy },
        { provide: MatDialog, useClass: MatDialogMock }
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
      motoristaController = TestBed.get(IMotoristaController);
      dialog = TestBed.get(MatDialog);
    });
  }));

  it('deve criar', () => {
    expect(component).toBeTruthy();
  });

  describe('motoristas', () => {
    it('deve retornar motorista', () => {
      motoristaController.get.and.returnValue(of(new MotoristaModel()));

      component.ngOnInit();

      expect(motoristaController.get.calls.count()).toBe(1);

      motoristaController.get().subscribe(motorista => {
        expect(motorista).toBeTruthy();
      });
    });

    it('deve chamar o metodo adicionar motorista', () => {
      spyOn(dialog, 'open').and.callThrough();

      component.newDriver();

      expect(component.newDriver).toBeTruthy();
      expect(dialog.open).toHaveBeenCalled();
    });

    it('deve chamar o metodo editar motorista', () => {
      const mock = new MotoristaModel();

      component.edit(mock);

      expect(component.edit).toBeTruthy();
    });

    describe('Habilitar ou Invativar', () => {
      it('deve inativar um motorista', () => {
        const mock = new MotoristaModel();
        mock.id = 1;
        mock.enable = false;

        component.disableEnable(mock);

        expect(motoristaController.disableEnable.calls.count()).toBe(1);

        motoristaController.disableEnable(mock.id, mock.enable);
      });

      it('deve ativar um motorista', () => {
        const mock = new MotoristaModel();
        mock.id = 1;
        mock.enable = true;

        component.disableEnable(mock);

        expect(motoristaController.disableEnable.calls.count()).toBe(1);

        motoristaController.disableEnable(mock.id, mock.enable);
      });
    });
  });
});
