import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { UseCase } from '@app/core/base/use-case';
import { IUsuarioModel } from '@app/core/domain/entities/usuario.model';
import { IUsuarioRepository } from '@app/core/interfaces/repositories/IUsuarioRepository';
import { AlterarUsuarioValidator } from './validations/AlterarUsuarioValidator';
import { Logger } from '@app/infra/log/logger.service';

const log = new Logger('AlterarUsuarioUseCase');

@Injectable({
  providedIn: 'root'
})
export class AlterarUsuarioUseCase implements UseCase<IUsuarioModel, IUsuarioModel> {

  constructor(
    private iUsuarioRepository: IUsuarioRepository,
    private alterarUsuarioValidator: AlterarUsuarioValidator
  ) { }

  execute(params: IUsuarioModel): Observable<IUsuarioModel> {
    const validator = this.alterarUsuarioValidator.validateFields(params);

    if (validator.IsValid) {
      return this.iUsuarioRepository.alterar(params);
    } else {
      log.error(validator.Errors);

      return throwError(validator.Errors);
    }

  }

}
