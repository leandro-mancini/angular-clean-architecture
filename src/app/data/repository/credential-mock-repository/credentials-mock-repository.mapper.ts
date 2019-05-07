import { Mapper } from '@app/core/base/mapper';
import { CredentialsMockEntity } from './credentials-mock.entity';
import { CredentialsModel } from '@app/core/domain/entities/credentials.model';

export class CredentialsMockRepositoryMapper extends Mapper<CredentialsMockEntity, CredentialsModel> {
  mapFrom(param: CredentialsMockEntity): CredentialsModel {
    return {
      id: param.id,
      username: param.username,
      senha: param.senha,
      token: param.token
    };
  }

  mapTo(param: CredentialsModel): CredentialsMockEntity {
    return {
      id: 0,
      username: param.username,
      senha: param.senha,
      token: param.token
    };
  }

}
