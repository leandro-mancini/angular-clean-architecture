import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UseCase } from '@app/core/base/use-case';
import { IUsuarioModel } from '@app/core/domain/entities/usuario.model';
import { IUsuarioRepository } from '@app/core/interfaces/repositories/IUsuarioRepository';

@Injectable({
  providedIn: 'root'
})
export class AlterarUsuarioUseCase implements UseCase<IUsuarioModel, IUsuarioModel> {

  constructor(
    private iUsuarioRepository: IUsuarioRepository
  ) { }

  execute(params: IUsuarioModel): Observable<IUsuarioModel> {
    return this.iUsuarioRepository.alterar(params);
  }

}
