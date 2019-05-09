import { Injectable } from '@angular/core';

import { UseCase } from '@app/core/base/use-case';
import { IUsuarioModel } from '@app/core/domain/entities/usuario.model';
import { Observable, of, throwError } from 'rxjs';
import { IUsuarioRepository } from '@app/core/interfaces/repositories/IUsuarioRepository';
import { ObterUsuarioValidator } from './validations/ObterUsuarioValidator';
import { Logger } from '@app/core/infra/log/logger.service';

const log = new Logger('ObterUsuarioUseCase');

@Injectable({
  providedIn: 'root'
})
export class ObterUsuarioUseCase implements UseCase<IUsuarioModel, IUsuarioModel> {

  constructor(
    private iUsuarioRepository: IUsuarioRepository,
    private obterUsuarioValidator: ObterUsuarioValidator
  ) { }

  execute(params: IUsuarioModel): Observable<IUsuarioModel> {
    const validator = this.obterUsuarioValidator.validateFields(params);

    if (validator.IsValid) {
      return this.iUsuarioRepository.obter(params);
    } else {
      log.error(validator.Errors);

      return throwError(validator.Errors);
    }
  }

}
