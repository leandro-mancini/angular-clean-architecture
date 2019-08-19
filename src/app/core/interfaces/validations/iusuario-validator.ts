import { ValidationResult } from 'ts.validator.fluent/dist';

import { UsuarioModel } from '../../domain/entity/usuario-model';

export abstract class IUsuarioValidator {
  abstract validateFields(param: UsuarioModel): ValidationResult;
}
