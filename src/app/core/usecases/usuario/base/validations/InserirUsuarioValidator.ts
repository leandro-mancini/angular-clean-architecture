import { Injectable } from '@angular/core';
import { ValidationResult, Validator, IValidator } from 'ts.validator.fluent/dist';

import { IUsuarioModel } from '@app/core/domain/entities/usuario.model';
import { IInserirUsuarioUseCase } from '@app/core/interfaces/usecases/usuario/IInserirUsuarioUseCase';

@Injectable({
  providedIn: 'root'
})
export class InserirUsuarioValidator implements IInserirUsuarioUseCase {
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
