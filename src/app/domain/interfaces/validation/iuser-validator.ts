import { ValidationResult } from 'ts.validator.fluent/dist';
import { UserEntity } from '../../entities/user-entity';

export abstract class IUserValidator {
  abstract validateFields(param: UserEntity): ValidationResult;
}
