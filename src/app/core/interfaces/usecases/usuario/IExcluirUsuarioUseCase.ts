import { ValidationResult } from 'ts.validator.fluent/dist';

export interface IExcluirUsuarioUseCase {
  validarId(id: number): ValidationResult;
}
