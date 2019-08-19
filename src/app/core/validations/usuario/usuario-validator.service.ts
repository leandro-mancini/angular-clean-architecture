import { Injectable } from '@angular/core';
import { ValidationResult, Validator, IValidator } from 'ts.validator.fluent/dist';

import { IUsuarioValidator } from '../../interfaces/validations/iusuario-validator';
import { IValidatorMessage } from '../../interfaces/message/ivalidator-message';
import { UsuarioModel } from '../../domain/entity/usuario-model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioValidatorService implements IUsuarioValidator {

  constructor(
    protected validatorMessage: IValidatorMessage
  ) { }

  validateFields(param: UsuarioModel): ValidationResult {
    return new Validator(param).Validate(this.validateRules);
  }

  validateRules = (validator: IValidator<UsuarioModel>): ValidationResult => {
    return validator
      .NotEmpty(m => m.username, this.validatorMessage.required('Usuário').value)
      .Length(m => m.username, 0, 10, this.validatorMessage.maximumSize('Usuário', '10').value)
      .NotEmpty(m => m.password, this.validatorMessage.required('Senha').value)
      .Length(m => m.password, 0, 10, this.validatorMessage.maximumSize('Senha', '10').value)
      .ToResult();
  }
}
