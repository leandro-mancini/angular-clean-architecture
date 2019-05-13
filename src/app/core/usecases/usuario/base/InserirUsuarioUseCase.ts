import { Injectable } from '@angular/core';
import { UseCase } from '@app/core/base/use-case';
import { IUsuarioModel } from '@app/core/domain/entities/usuario.model';
import { Observable, of, throwError } from 'rxjs';
import { IUsuarioRepository } from '@app/core/interfaces/repositories/IUsuarioRepository';
import { InserirUsuarioValidator } from './validations/InserirUsuarioValidator';
import { Logger } from '@app/infra/log/logger.service';

const log = new Logger('InserirUsuarioUseCase');

@Injectable({
  providedIn: 'root'
})
export class InserirUsuarioUseCase implements UseCase<IUsuarioModel, IUsuarioModel> {
  constructor(
    private iUsuarioRepository: IUsuarioRepository,
    private inserirUsuarioValidator: InserirUsuarioValidator
  ) { }

  execute(params: IUsuarioModel): Observable<IUsuarioModel> {
    const validator = this.inserirUsuarioValidator.validateFields(params);

    if (validator.IsValid) {
      return this.iUsuarioRepository.inserir(params);
    } else {
      log.error(validator.Errors);

      return throwError(validator.Errors);
    }
  }

}
