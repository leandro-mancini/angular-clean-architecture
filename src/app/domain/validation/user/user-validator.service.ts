import { Injectable } from '@angular/core';
import { IUserValidator } from '../../interfaces/validation/iuser-validator';
import { ValidationResult, Validator, IValidator } from 'ts.validator.fluent/dist';
import { UserEntity } from '../../entities/user-entity';
import { IValidatorMessage } from '../../interfaces/messages/ivalidator-message';

@Injectable({
  providedIn: 'root'
})
export class UserValidatorService implements IUserValidator {

  constructor(
    protected validatorMessage: IValidatorMessage
  ) { }

  validateFields(param: UserEntity): ValidationResult {
    return new Validator(param).Validate(this.validateRules);
  }

  validateRules = (validator: IValidator<UserEntity>): ValidationResult => {
    return validator
      .NotEmpty(m => m.username, this.validatorMessage.required('Usuário').value)
      .Length(m => m.username, 0, 10, this.validatorMessage.maximumSize('Usuário', '10').value)
      .NotEmpty(m => m.password, this.validatorMessage.required('Senha').value)
      .Length(m => m.password, 0, 10, this.validatorMessage.maximumSize('Senha', '10').value)
      .ToResult();
  }

}
