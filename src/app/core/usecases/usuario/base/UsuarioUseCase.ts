import { UseCaseCrud } from '@app/core/base/usecase-crud';
import { IUsuarioModel } from '@app/core/domain/entities/usuario.model';
import { Observable, throwError } from 'rxjs';
import { IUsuarioRepository } from '@app/core/interfaces/repositories/IUsuarioRepository';
import { Injectable } from '@angular/core';
import { UsuarioValidator } from './validations/UsuarioValidator';
import { Logger } from '@app/infra/log/logger.service';

const log = new Logger('UsuarioUseCase');

@Injectable({
  providedIn: 'root'
})
export class UsuarioUseCase implements UseCaseCrud<IUsuarioModel, IUsuarioModel> {

  constructor(
    private iUsuarioRepository: IUsuarioRepository,
    private usuarioValidator: UsuarioValidator
  ) { }

  obterAll(params: void): Observable<IUsuarioModel> {
    return this.iUsuarioRepository.obterAll();
  }
  obter(params: IUsuarioModel): Observable<IUsuarioModel> {
    const validator = this.usuarioValidator.validateFields(params);

    if (validator.IsValid) {
      return this.iUsuarioRepository.obter(params);
    } else {
      log.error(validator.Errors);

      return throwError(validator.Errors);
    }
  }
  inserir(params: IUsuarioModel): Observable<IUsuarioModel> {
    const validator = this.usuarioValidator.validateFields(params);

    if (validator.IsValid) {
      return this.iUsuarioRepository.inserir(params);
    } else {
      log.error(validator.Errors);

      return throwError(validator.Errors);
    }
  }
  alterar(params: IUsuarioModel): Observable<IUsuarioModel> {
    const validator = this.usuarioValidator.validateFields(params);

    if (validator.IsValid) {
      return this.iUsuarioRepository.alterar(params);
    } else {
      log.error(validator.Errors);

      return throwError(validator.Errors);
    }
  }
  excluir(params: number): Observable<IUsuarioModel> {
    const validator = this.usuarioValidator.validarId(params);

    if (validator.IsValid) {
      return this.iUsuarioRepository.excluir(params);
    } else {
      log.error(validator.Errors);

      return throwError(validator.Errors);
    }
  }

}
