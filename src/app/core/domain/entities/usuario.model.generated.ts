import { DomainModel } from './base/domain.model';

export interface IUsuarioModelGenerated extends DomainModel {
  username: string;
  senha: string;
}
