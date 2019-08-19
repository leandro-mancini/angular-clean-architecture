import { DomainModel } from './base/domain-model';
export class UsuarioModel extends DomainModel {
  username?: string = null;
  password?: string = null;
  email?: string = null;
  token?: string = null;
}
