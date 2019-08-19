import { DomainModel } from './base/domain-model';
import { AddressesModel } from './addresses-model';
import { DocumentsModel } from './documents-model';

export class MotoristaModel extends DomainModel {
  name: string = '';
  birth_date: Date = null;
  phone: string = '';
  state: string = '';
  city: string = '';
  enable: boolean = null;
  addresses: AddressesModel = null;
  documents: DocumentsModel[] = null;
}
