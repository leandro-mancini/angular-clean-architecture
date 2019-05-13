import { Injectable } from '@angular/core';
import { IUsuarioUseCase } from '@app/core/interfaces/usecases/IUsuarioUseCase';
import { ValidationResult, Validator, IValidator } from 'ts.validator.fluent/dist';
import { IUsuarioModel } from '@app/core/domain/entities/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioValidator implements IUsuarioUseCase {
  validateFields(model: IUsuarioModel): ValidationResult {
    return new Validator(model).Validate(this.validateUserRules);
  }
  validarId(id: number): ValidationResult {
    return new Validator(id).Validate(this.validateUserIdRules);
  }
  validateUserRules = (validator: IValidator<IUsuarioModel>): ValidationResult => {
    return validator
    .NotEmpty(m => m.username, 'Username é obrigatório.')
    .NotEmpty(m => m.senha, 'Senha é obrigatório.')
    .ToResult();
  }
  validateUserIdRules = (validator: IValidator<number>): ValidationResult => {
    return validator
      .IsNumberNotEqual(m => m, 0, 'ID é obrigatório.')
      .ToResult();
  }
}
