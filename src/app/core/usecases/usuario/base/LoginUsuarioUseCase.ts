import { UseCase } from '@app/core/base/use-case';
import { CredentialsModel } from '@app/core/domain/entities/credentials.model';
import { Observable, of } from 'rxjs';
import { CredentialsRepository } from '@app/core/repositories/credentials.repository';
import { GetCredentialsValidatorService } from '../../validations/get-credentials.validator.service';
import { Logger } from '@app/core/infra/log/logger.service';
import { Injectable } from '@angular/core';


const log = new Logger('GetCredentialsUsecase');

@Injectable({
  providedIn: 'root'
})
export class LoginUsuarioUseCase implements UseCase<CredentialsModel, CredentialsModel> {

  constructor(
    private credentialsRepository: CredentialsRepository,
    private getCredentialsValidatorService: GetCredentialsValidatorService
  ) { }

  execute(params: CredentialsModel): Observable<CredentialsModel> {
    const validation = this.getCredentialsValidatorService.validateUser(params);

    if (validation.IsValid) {
      return this.credentialsRepository.getCredentials(params);
    } else {
      log.error(validation.Errors);

      return of();
    }
  }

}
