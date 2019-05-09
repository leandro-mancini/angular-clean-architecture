import { ValidationResult, IValidator, Validator } from 'ts.validator.fluent/dist';
import { Injectable } from '@angular/core';

import { IExcluirUsuarioUseCase } from '@app/core/interfaces/usecases/usuario/IExcluirUsuarioUseCase';
import { IUsuarioModel } from '@app/core/domain/entities/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ExcluirUsuarioValidator implements IExcluirUsuarioUseCase {
  validarId(id: IUsuarioModel): ValidationResult {
    return new Validator(id).Validate(this.validateUserIdRules);
  }

  validateUserIdRules = (validator: IValidator<IUsuarioModel>): ValidationResult => {
    return validator
      .IsNumberNotEqual(m => m.id, 0, 'ID é obrigatório.')
      .ToResult();
  }

}
