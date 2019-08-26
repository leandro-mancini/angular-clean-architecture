import { DomainEntity } from '../common/domain-entity';

export class DocumentsEntity extends DomainEntity {
  expires_at: Date = null;
  country: string = null;
  number: string = null;
  doc_type: string = null;
  category: string = null;
}
