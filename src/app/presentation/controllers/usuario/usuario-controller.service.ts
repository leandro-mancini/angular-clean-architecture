import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuarioController } from 'src/app/domain/interfaces/controllers/iusuario-controller';
import { IUsuarioUseCase } from 'src/app/domain/interfaces/usecases/iusuario-use-case';
import { UserEntity } from '../../../domain/entities/user-entity';


@Injectable({
  providedIn: 'root'
})
export class UsuarioControllerService implements IUsuarioController {

  constructor(
    private usuarioUseCase: IUsuarioUseCase
  ) { }


  login(param: UserEntity): Observable<UserEntity> {
    return this.usuarioUseCase.login(param);
  }

  logout(): Observable<boolean> {
    return this.usuarioUseCase.logout();
  }

}
