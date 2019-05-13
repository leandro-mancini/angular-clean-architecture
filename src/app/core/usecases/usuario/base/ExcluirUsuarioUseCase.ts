import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { IUsuarioModel } from '@app/core/domain/entities/usuario.model';
import { UseCase } from '@app/core/base/use-case';
import { IUsuarioRepository } from '@app/core/interfaces/repositories/IUsuarioRepository';
import { ExcluirUsuarioValidator } from './validations/ExcluirUsuarioValidator';
import { Logger } from '@app/infra/log/logger.service';

const log = new Logger('ExcluirUsuarioUseCase');

@Injectable({
  providedIn: 'root'
})
export class ExcluirUsuarioUseCase implements UseCase<number, IUsuarioModel> {

  constructor(
    private iUsuarioRepository: IUsuarioRepository,
    private excluirUsuarioValidator: ExcluirUsuarioValidator
  ) { }

  execute(params: number): Observable<IUsuarioModel> {
    const validator = this.excluirUsuarioValidator.validarId(params);

    if (validator.IsValid) {
      return this.iUsuarioRepository.excluir(params);
    } else {
      log.error(validator.Errors);

      return throwError(validator.Errors);
    }
  }

}
