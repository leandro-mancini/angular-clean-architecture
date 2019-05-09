import { Injectable } from '@angular/core';
import { ValidationResult, Validator, IValidator } from 'ts.validator.fluent/dist';

import { IObterUsuarioUseCase } from '@app/core/interfaces/usecases/usuario/IObterUsuarioUseCase';
import { IUsuarioModel } from '@app/core/domain/entities/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ObterUsuarioValidator implements IObterUsuarioUseCase {
    validateFields(model: IUsuarioModel): ValidationResult {
      return new Validator(model).Validate(this.validateUserRules);
    }

    validateUserRules = (validator: IValidator<IUsuarioModel>): ValidationResult => {
      return validator
      .NotEmpty(m => m.username, 'Username é obrigatório.')
      .NotEmpty(m => m.senha, 'Senha é obrigatório.')
      .ToResult();
    }

}
