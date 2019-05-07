import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { UseCase } from '../base/use-case';
import { CredentialsRepository } from '../repositories/credentials.repository';
import { CredentialsModel } from '../domain/entities/credentials.model';
import { GetCredentialsValidatorService } from './validations/get-credentials.validator.service';
import { Logger } from '../infra/log/logger.service';

const log = new Logger('GetCredentialsUsecase');

@Injectable({
  providedIn: 'root'
})
export class GetCredentialsUsecase implements UseCase<CredentialsModel, CredentialsModel> {

  constructor(
    private credentialsRepository: CredentialsRepository,
    private getCredentialsValidatorService: GetCredentialsValidatorService
  ) { }

  execute(params: CredentialsModel): Observable<CredentialsModel> {
    const validation = this.getCredentialsValidatorService.validateUser(params);

    log.info(validation);

    if (validation.IsValid) {
      return this.credentialsRepository.getCredentials(params);
    } else {
      log.error(validation.Errors);

      return of();
    }
  }
}
