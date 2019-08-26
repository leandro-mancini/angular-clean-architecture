import { Injectable } from '@angular/core';
import { IDriverValidator } from '../../interfaces/validation/idriver-validator';
import { IValidatorMessage } from '../../interfaces/messages/ivalidator-message';
import { ValidationResult, Validator, IValidator } from 'ts.validator.fluent/dist';
import { DriverEntity } from '../../entities/driver-entity';
import { DocumentsEntity } from '../../entities/documents-entity';

@Injectable({
  providedIn: 'root'
})
export class DriverValidatorService implements IDriverValidator {

  constructor(
    protected validatorMessage: IValidatorMessage
  ) { }

  validateFields(param: DriverEntity): ValidationResult {
    return new Validator(param).Validate(this.validateRules);
  }

  validateRules = (validator: IValidator<DriverEntity>): ValidationResult => {
    return validator
      .NotEmpty(m => m.name, this.validatorMessage.required('Nome').value)
      .NotEmpty(m => m.birth_date.toString(), this.validatorMessage.required('Data de Nascimento').value)
      .If(m => m.documents != null && m.documents.length > 0,
        v => v.ForEach(m => m.documents, this.validateDocumentsRules).ToResult())
      .ToResult();
  }

  validateDocumentsRules = (validator: IValidator<DocumentsEntity>): ValidationResult => {
    return validator
      .NotEmpty(m => m.doc_type, this.validatorMessage.required('Tipo de documento').value)
      .If(m => m.doc_type !== '', (v: IValidator<DocumentsEntity>): ValidationResult => {
        return v
        .NotEmpty(m => m.number, this.validatorMessage.required('Número de documento').value)
        .If(m => m.doc_type === 'CNH',
          c => c.NotEmpty(m => m.category, this.validatorMessage.required('Categoria da CNH').value).ToResult())
        .ToResult();
      })
      .ToResult();
  }

}
