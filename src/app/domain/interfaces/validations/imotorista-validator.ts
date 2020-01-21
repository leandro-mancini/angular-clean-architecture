import { ValidationResult } from 'ts.validator.fluent/dist';
import { DriverEntity } from '../../entities/driver-entity';

export abstract class IMotoristaValidator {
  abstract validateFields(param: DriverEntity): ValidationResult;
}
