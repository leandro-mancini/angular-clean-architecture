import * as automapper from 'automapper-ts';

import { Mapper } from '../../base/mapper';
import { IUsuarioRequestEntity } from './iusuario-request-entity';
import { IUsuarioResponseEntity } from './iusuario-response-entity';
import { UserEntity } from '../../../domain/entities/user-entity';
export class UsuarioMapper implements Mapper<UserEntity, UserEntity> {
  mapFrom(param: UserEntity): UserEntity {
    automapper.createMap('UserEntity', UserEntity);

    return automapper.map('UserEntity', UserEntity, param);
  }

  mapTo(param: UserEntity): UserEntity {
    automapper
      .createMap('UserEntity', UserEntity);

      return automapper.map('UserEntity', UserEntity, param);
  }



}
