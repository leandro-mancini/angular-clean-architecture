import { Injectable } from '@angular/core';
import { ValidationResult, Validator, IValidator } from 'ts.validator.fluent/dist';

import { IMotoristaValidator } from '../../interfaces/validations/imotorista-validator';
import { MotoristaModel } from '../../domain/entity/motorista-model';
import { IValidatorMessage } from '../../interfaces/message/ivalidator-message';
import { DocumentsModel } from '../../domain/entity/documents-model';

@Injectable({
  providedIn: 'root'
})
export class MotoristaValidatorService implements IMotoristaValidator {

  constructor(
    protected validatorMessage: IValidatorMessage
  ) { }

  validateFields(param: MotoristaModel): ValidationResult {
    return new Validator(param).Validate(this.validateRules);
  }

  validateRules = (validator: IValidator<MotoristaModel>): ValidationResult => {
    return validator
      .NotEmpty(m => m.name, this.validatorMessage.required('Nome').value)
      .NotEmpty(m => m.birth_date.toString(), this.validatorMessage.required('Data de Nascimento').value)
      .If(m => m.documents != null && m.documents.length > 0,
        v => v.ForEach(m => m.documents, this.validateDocumentsRules).ToResult())
      .ToResult();
  }

  validateDocumentsRules = (validator: IValidator<DocumentsModel>): ValidationResult => {
    return validator
      .NotEmpty(m => m.doc_type, this.validatorMessage.required('Tipo de documento').value)
      .If(m => m.doc_type !== '', (v: IValidator<DocumentsModel>): ValidationResult => {
        return v
        .NotEmpty(m => m.number, this.validatorMessage.required('Número de documento').value)
        .If(m => m.doc_type === 'CNH',
          c => c.NotEmpty(m => m.category, this.validatorMessage.required('Categoria da CNH').value).ToResult())
        .ToResult();
      })
      .ToResult();
  }

}
