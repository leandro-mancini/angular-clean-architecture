import * as automapper from 'automapper-ts';

import { Mapper } from '../../base/mapper';
import { UsuarioModel } from '../../../core/domain/entity/usuario-model';
import { IUsuarioRequestEntity } from './iusuario-request-entity';
import { IUsuarioResponseEntity } from './iusuario-response-entity';
export class UsuarioMapper extends Mapper<IUsuarioRequestEntity, IUsuarioResponseEntity, UsuarioModel> {
  mapFrom(param: IUsuarioResponseEntity): UsuarioModel {
    automapper.createMap('UsuarioModel', UsuarioModel);

    return automapper.map('UsuarioModel', UsuarioModel, param);
  }

  mapTo(param: UsuarioModel): IUsuarioRequestEntity {
    automapper
      .createMap('IUsuarioRequestEntity', IUsuarioRequestEntity);

    return automapper.map('IUsuarioRequestEntity', IUsuarioRequestEntity, param);
  }

}
