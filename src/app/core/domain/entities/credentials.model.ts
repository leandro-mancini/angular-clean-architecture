import { CredentialsModelGenerated } from './credentials.model.generated';

export interface CredentialsModel extends CredentialsModelGenerated {
  token: string;
}
