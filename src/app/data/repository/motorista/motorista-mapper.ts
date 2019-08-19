import * as automapper from 'automapper-ts';
import * as moment from 'moment';

import { Mapper } from '../../base/mapper';
import { MotoristaEntity } from './motorista-entity';
import { MotoristaModel } from 'src/app/core/domain/entity/motorista-model';
export class MotoristaMapper implements Mapper<MotoristaEntity, MotoristaModel, MotoristaModel> {

  mapFrom(param: MotoristaEntity): MotoristaModel {
    automapper
    .createMap('MotoristaModel', MotoristaModel)
    .forMember('birth_date', opts => opts.mapFrom('birth_date'))
    .forMember('birth_date', opts => moment(opts.sourceObject[opts.sourcePropertyName]).format('YYYY-MM-DD'));

    return automapper.map('MotoristaModel', MotoristaModel, param);
  }

  mapTo(param: MotoristaModel): MotoristaEntity {
    automapper
      .createMap('MotoristaEntity', MotoristaEntity);

    return automapper.map('MotoristaEntity', MotoristaEntity, param);
  }
}
