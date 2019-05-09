import { ValidationResult } from 'ts.validator.fluent/dist';
import { IUsuarioModel } from '@app/core/domain/entities/usuario.model';

export interface IObterUsuarioUseCase {
  validateFields(model: IUsuarioModel): ValidationResult;
}
