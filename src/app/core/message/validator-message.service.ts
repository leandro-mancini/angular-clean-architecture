import { Injectable } from '@angular/core';
import { IValidatorMessage } from '../interfaces/message/ivalidator-message';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorMessageService implements IValidatorMessage {

  constructor(
    private translate: TranslateService
  ) { }

  required(field: string) {
    return this.translate.get('validateRequired', {
      0: field
    });
  }
  maximumSize(field: string, characters: string) {
    return this.translate.get('validateMaximumSize', {
      0: field, 1: characters
    });
  }
}
