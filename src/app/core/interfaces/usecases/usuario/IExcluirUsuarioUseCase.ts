import { ValidationResult } from 'ts.validator.fluent/dist';

export interface IExcluirUsuarioUseCase {
  excluir(id: number): ValidationResult;
}
