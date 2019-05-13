import { IUsuarioRepository } from '@app/core/interfaces/repositories/IUsuarioRepository';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { IUsuarioModel } from '@app/core/domain/entities/usuario.model';
import { UsuarioUseCase } from '@app/core/usecases/usuario/base/UsuarioUseCase';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends IUsuarioRepository {

  constructor(
    private usuarioUseCase: UsuarioUseCase
  ) {
    super();
  }

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
