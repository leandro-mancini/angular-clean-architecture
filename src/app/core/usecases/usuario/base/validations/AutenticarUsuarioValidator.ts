import { Injectable } from '@angular/core';
import { IUsuarioUseCase } from '@app/core/interfaces/usecases/IUsuarioUseCase';
import { CredentialsModel } from '@app/core/domain/entities/credentials.model';
import { ValidationResult, IValidator, Validator } from 'ts.validator.fluent/dist';

Injectable({
  providedIn: 'root'
})
export class AutenticarUsuarioValidator implements IUsuarioUseCase {
  login(model: CredentialsModel): ValidationResult {
    return new Validator(model).Validate(this.validateUserRules);
  }

  validateUserRules = (validator: IValidator<CredentialsModel>): ValidationResult => {
    return validator
    .NotEmpty(m => m.username, 'Username é obrigatório.')
    .NotEmpty(m => m.senha, 'Senha é obrigatório.')
    .ToResult();
  }

}
