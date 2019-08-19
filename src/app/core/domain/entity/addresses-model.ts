import { DomainModel } from './base/domain-model';

export class AddressesModel extends DomainModel {
  name: string = null;
  state: string = null;
  country: string = null;
  neighborhood: string = null;
  city: string = null;
  street_number: number = null;
  complement: string = null;
  postal_code: string = null;
  street_name: string = null;
}
