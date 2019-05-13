import { IUsuarioRepository } from '@app/core/interfaces/repositories/IUsuarioRepository';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { IUsuarioModel } from '@app/core/domain/entities/usuario.model';
import { ObterAllUsuarioUseCase } from '@app/core/usecases/usuario/base/ObterAllUsuarioUseCase';
import { ExcluirUsuarioUseCase } from '@app/core/usecases/usuario/base/ExcluirUsuarioUseCase';
import { InserirUsuarioUseCase } from '@app/core/usecases/usuario/base/InserirUsuarioUseCase';
import { AlterarUsuarioUseCase } from '@app/core/usecases/usuario/base/AlterarUsuarioUseCase';
import { ObterUsuarioUseCase } from '@app/core/usecases/usuario/base/ObterUsuarioUseCase';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends IUsuarioRepository {

  constructor(
    private obterAllUsuarioUseCase: ObterAllUsuarioUseCase,
    private excluirUsuarioUseCase: ExcluirUsuarioUseCase,
    private inserirUsuarioUseCase: InserirUsuarioUseCase,
    private alterarUsuarioUseCase: AlterarUsuarioUseCase,
    private obterUsuarioUseCase: ObterUsuarioUseCase
  ) {
    super();
  }

  obterAll(): Observable<IUsuarioModel> {
    return this.obterAllUsuarioUseCase.execute();
  }
  obter(model: IUsuarioModel): Observable<IUsuarioModel> {
    return this.obterUsuarioUseCase.execute(model);
  }
  inserir(model: IUsuarioModel): Observable<IUsuarioModel> {
    return this.inserirUsuarioUseCase.execute(model);
  }
  alterar(model: IUsuarioModel): Observable<IUsuarioModel> {
    return this.alterarUsuarioUseCase.execute(model);
  }
  excluir(id: number): Observable<IUsuarioModel> {
    // return this.excluirUsuarioUseCase.execute(id);
    throw new Error('Method not implemented.');
  }


}
