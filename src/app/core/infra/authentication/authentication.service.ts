import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CredentialsModel } from '@app/core/domain/entities/credentials.model';
import { GetCredentialsUsecase } from '@app/core/usecases/get-credentials.usecase';

const credentialsKey = 'credentials';

@Injectable()
export class AuthenticationService {

  private credentials: CredentialsModel | null;

  constructor(
    private getCredentialsUsecase: GetCredentialsUsecase
  ) {
    const savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);

    if (savedCredentials) {
      this.credentials = JSON.parse(savedCredentials);
    }
  }

  login(params: CredentialsModel): Observable<CredentialsModel> {
    return this.getCredentialsUsecase.execute(params);
  }

  logout(): Observable<boolean> {
    this.setCredentials();
    return of(true);
  }

  isAuthenticated(): boolean {
    return !!this.getCredentials;
  }

  get getCredentials(): CredentialsModel | null {
    return this.credentials;
  }

  setCredentials(credentials?: CredentialsModel) {
    this.credentials = credentials || null;

    if (credentials) {
      localStorage.setItem(credentialsKey, JSON.stringify(credentials));
    } else {
      localStorage.removeItem(credentialsKey);
    }
  }

}
