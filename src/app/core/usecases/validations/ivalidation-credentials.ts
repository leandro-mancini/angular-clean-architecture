import { CredentialsModel } from '@app/core/domain/entities/credentials.model';
import { ValidationResult } from 'ts.validator.fluent/dist';

export interface IValidationCredentials {
  validateUser(model: CredentialsModel): ValidationResult;
}
