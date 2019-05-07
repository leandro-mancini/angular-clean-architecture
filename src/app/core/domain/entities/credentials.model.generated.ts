import { DomainModel } from './base/domain.model';

export interface CredentialsModelGenerated extends DomainModel {
  username: string;
  senha: string;
}
