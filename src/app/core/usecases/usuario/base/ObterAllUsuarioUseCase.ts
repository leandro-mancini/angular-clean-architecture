import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { UseCase } from '@app/core/base/use-case';
import { IUsuarioModel } from '@app/core/domain/entities/usuario.model';
import { IUsuarioRepository } from '@app/core/interfaces/repositories/IUsuarioRepository';

@Injectable({
  providedIn: 'root'
})
export class ObterAllUsuarioUseCase implements UseCase<void, IUsuarioModel> {

  constructor(
    private iUsuarioRepository: IUsuarioRepository
  ) { }

  execute(params: void): Observable<IUsuarioModel> {
    return this.iUsuarioRepository.obterAll();
  }

}
