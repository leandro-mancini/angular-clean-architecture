import { DomainEntity } from './base/domain-entity';
import { AddressesEntity } from './addresses-entity';
import { DocumentsEntity } from './documents-entity';
export class DriverEntity extends DomainEntity {
  name: string = '';
  birth_date: Date = null;
  phone: string = '';
  state: string = '';
  city: string = '';
  enable: boolean = null;
  addresses: AddressesEntity = null;
  documents: DocumentsEntity[] = null;
}
