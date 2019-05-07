import { IValidationCredentials } from './ivalidation-credentials';
import { CredentialsModel } from '@app/core/domain/entities/credentials.model';
import { ValidationResult, Validator, IValidator } from 'ts.validator.fluent/dist';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetCredentialsValidatorService implements IValidationCredentials {
  validateUser(model: CredentialsModel): ValidationResult {
    return new Validator(model).Validate(this.validateUserRules);
  }

  validateUserRules = (validator: IValidator<CredentialsModel>): ValidationResult => {
    return validator
    .NotEmpty(m => m.username, 'Username é obrigatório.')
    .NotEmpty(m => m.senha, 'Senha é obrigatório.')
    .ToResult();
  }

}
