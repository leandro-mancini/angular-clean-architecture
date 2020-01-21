import { DomainEntity } from './base/domain-entity';
export class UserEntity extends DomainEntity {
  username?: string = null;
  password?: string = null;
  email?: string = null;
  token?: string = null;
}
