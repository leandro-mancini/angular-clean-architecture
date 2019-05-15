import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { IUsuarioModel } from '@app/core/domain/entities/usuario.model';
import { UsuarioUseCase } from '@app/core/usecases/usuario/base/UsuarioUseCase';
import { IUsuarioService } from '@app/core/interfaces/services/IUsuarioService';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements IUsuarioService {

  constructor(
    private usuarioUseCase: UsuarioUseCase
  ) { }

  obterAll(): Observable<IUsuarioModel> {
    return this.usuarioUseCase.obterAll();
  }
  obter(model: IUsuarioModel): Observable<IUsuarioModel> {
    return this.usuarioUseCase.obter(model);
  }
  inserir(model: IUsuarioModel): Observable<IUsuarioModel> {
    return this.usuarioUseCase.inserir(model);
  }
  alterar(model: IUsuarioModel): Observable<IUsuarioModel> {
    return this.usuarioUseCase.alterar(model);
  }
  excluir(id: number): Observable<IUsuarioModel> {
    return this.usuarioUseCase.excluir(id);
  }


}
