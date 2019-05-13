import { ValidationResult, IValidator, Validator } from 'ts.validator.fluent/dist';
import { Injectable } from '@angular/core';

import { IExcluirUsuarioUseCase } from '@app/core/interfaces/usecases/usuario/IExcluirUsuarioUseCase';
import { IUsuarioModel } from '@app/core/domain/entities/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ExcluirUsuarioValidator implements IExcluirUsuarioUseCase {
  validarId(id: number): ValidationResult {
    return new Validator(id).Validate(this.validateUserIdRules);
  }

  validateUserIdRules = (validator: IValidator<number>): ValidationResult => {
    return validator
      .IsNumberNotEqual(m => m, 0, 'ID é obrigatório.')
      .ToResult();
  }

}
