import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { UseCase } from '../base/use-case';
import { CredentialsRepository } from '../repositories/credentials.repository';
import { CredentialsModel } from '../domain/entities/credentials.model';

@Injectable({
  providedIn: 'root'
})
export class GetCredentialsUsecase implements UseCase<CredentialsModel, CredentialsModel> {

  constructor(
    private credentialsRepository: CredentialsRepository
  ) { }

  execute(params: CredentialsModel): Observable<CredentialsModel> {
    return this.credentialsRepository.getCredentials(params);
  }
}
