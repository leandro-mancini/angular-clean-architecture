import { Injectable } from '@angular/core';
import { CredentialsRepository } from '@app/core/repositories/credentials.repository';
import { Observable, from, of } from 'rxjs';
import { CredentialsModel } from '@app/core/domain/entities/credentials.model';
import { CredentialsMockRepositoryMapper } from './credentials-mock-repository.mapper';
import { map } from 'rxjs/operators';
import { CredentialsMockEntity } from './credentials-mock.entity';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class CredentialsMockRepository extends CredentialsRepository {

  private mapper = new CredentialsMockRepositoryMapper();

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  getCredentials(params: CredentialsModel): Observable<CredentialsModel> {
    return this.http
      .get<CredentialsMockEntity>(environment.serverUrl + '/usuarios?username=' + params.username + '&senha=' + params.senha + '')
      .pipe(map((item) => {
        if (item[0]) {
          return this.mapper.mapFrom(item[0]);
        }

        return null;
      }));
  }
}
