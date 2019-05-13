import { ValidationResult } from 'ts.validator.fluent/dist';
import { IUsuarioModel } from '@app/core/domain/entities/usuario.model';

export interface IUsuarioUseCase {
  validateFields(model: IUsuarioModel): ValidationResult;
  validarId(id: number): ValidationResult;
}
