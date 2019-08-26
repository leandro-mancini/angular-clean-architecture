import { DomainEntity } from '../common/domain-entity';

export class UserEntity extends DomainEntity {
  username?: string = null;
  password?: string = null;
  email?: string = null;
  token?: string = null;
}
