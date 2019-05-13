import { ValidationResult } from 'ts.validator.fluent/dist';
import { IUsuarioModel } from '@app/core/domain/entities/usuario.model';

export interface IAlterarUsuarioUseCase {
  validateFields(model: IUsuarioModel): ValidationResult;
}
