import { Mapper } from '@app/core/base/mapper';
import { IUsuarioModel } from '@app/core/domain/entities/usuario.model';
import { IUsuarioMockEntity } from './IUsuarioMockEntity';

export class UsuarioMockMapper extends Mapper<IUsuarioMockEntity, IUsuarioModel> {
  mapFrom(param: IUsuarioMockEntity): IUsuarioModel {
    return {
      id: param.id,
      username: param.username,
      senha: param.senha,
      token: param.token
    };
  }

  mapTo(param: IUsuarioModel): IUsuarioMockEntity {
    return {
      id: 0,
      username: param.username,
      senha: param.senha,
      token: param.token
    };
  }


}
