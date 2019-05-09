import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IUsuarioModel } from '@app/core/domain/entities/usuario.model';
import { UseCase } from '@app/core/base/use-case';
import { IUsuarioRepository } from '@app/core/interfaces/repositories/IUsuarioRepository';

@Injectable({
  providedIn: 'root'
})
export class ExcluirUsuarioUseCase implements UseCase<number, IUsuarioModel> {

  constructor(
    private iUsuarioRepository: IUsuarioRepository
  ) { }

  execute(params: number): Observable<IUsuarioModel> {
    return this.iUsuarioRepository.excluir(params);
  }

}
