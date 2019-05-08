import { ValidationResult } from 'ts.validator.fluent/dist';

import { IUsuarioModel } from '@app/core/domain/entities/usuario.model';

export interface IUsuarioUseCase {
  login(model: IUsuarioModel): ValidationResult;
  obter(model: IUsuarioModel): ValidationResult;
  inserir(model: IUsuarioModel): ValidationResult;
  alterar(model: IUsuarioModel): ValidationResult;
  excluir(id: number): ValidationResult;
}
