import { ValidationResult } from 'ts.validator.fluent/dist';

import { IUsuarioModel } from '@app/core/domain/entities/usuario.model';

export abstract class IUsuarioValidator {
  abstract validateFields(model: IUsuarioModel): ValidationResult;
  abstract validarId(id: number): ValidationResult;
}
