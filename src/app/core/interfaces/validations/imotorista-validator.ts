import { ValidationResult } from 'ts.validator.fluent/dist';

import { MotoristaModel } from '../../domain/entity/motorista-model';

export abstract class IMotoristaValidator {
  abstract validateFields(param: MotoristaModel): ValidationResult;
}
