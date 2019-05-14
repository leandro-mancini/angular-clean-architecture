import { Injectable } from '@angular/core';
import { IUsuarioUseCase } from '@app/core/interfaces/usecases/IUsuarioUseCase';
import { ValidationResult, Validator, IValidator } from 'ts.validator.fluent/dist';
import { IUsuarioModel } from '@app/core/domain/entities/usuario.model';
import { IValidatorMensagem } from '@app/core/interfaces/mensagens/IValidatorMensagem';

@Injectable({
  providedIn: 'root'
})
export class UsuarioValidator implements IUsuarioUseCase {

  constructor(
    private iValidatorMensagem: IValidatorMensagem
  ) { }

  validateFields(model: IUsuarioModel): ValidationResult {
    return new Validator(model).Validate(this.validateUserRules);
  }
  validarId(id: number): ValidationResult {
    return new Validator(id).Validate(this.validateUserIdRules);
  }
  validateUserRules = (validator: IValidator<IUsuarioModel>): ValidationResult => {
    return validator
    .NotEmpty(m => m.username, this.iValidatorMensagem.obrigatorio('username').value)
    .Length(m => m.username, 1, 100, this.iValidatorMensagem.intervaloCaracteres('username', 1, 100).value)
    .NotEmpty(m => m.senha, this.iValidatorMensagem.obrigatorio('senha').value)
    .Length(m => m.senha, 1, 100, this.iValidatorMensagem.intervaloCaracteres('senha', 1, 100).value)
    .ToResult();
  }
  validateUserIdRules = (validator: IValidator<number>): ValidationResult => {
    return validator
      .IsNumberNotEqual(m => m, 0, this.iValidatorMensagem.idNaoEncontrado().value)
      .ToResult();
  }
}
