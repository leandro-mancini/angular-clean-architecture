import { Observable } from 'rxjs';
import { CredentialsModel } from '../domain/entities/credentials.model';

export abstract class CredentialsRepository {

  abstract getCredentials(params: CredentialsModel): Observable<CredentialsModel>;
}
