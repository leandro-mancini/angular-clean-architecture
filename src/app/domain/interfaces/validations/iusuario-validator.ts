import { ValidationResult } from 'ts.validator.fluent/dist';
import { UserEntity } from '../../entities/user-entity';

export abstract class IUsuarioValidator {
  abstract validateFields(param: UserEntity): ValidationResult;
}
