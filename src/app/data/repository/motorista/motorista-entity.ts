import { AddressesModel } from 'src/app/core/domain/entity/addresses-model';
import { DocumentsModel } from 'src/app/core/domain/entity/documents-model';

export class MotoristaEntity {
  name: string;
  birth_date: Date;
  state: string;
  city: string;
  enable: boolean;
  addresses: AddressesModel;
  documents: DocumentsModel[];
}
