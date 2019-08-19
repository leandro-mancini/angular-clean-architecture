import { DomainModel } from './base/domain-model';

export class DocumentsModel extends DomainModel {
  expires_at: Date = null;
  country: string = null;
  number: string = null;
  doc_type: string = null;
  category: string = null;
}
