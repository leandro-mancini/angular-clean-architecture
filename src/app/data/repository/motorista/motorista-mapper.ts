import * as automapper from 'automapper-ts';
import * as moment from 'moment';

import { Mapper } from '../../base/mapper';
import { DriverEntity } from '../../../domain/entities/driver-entity';
export class MotoristaMapper implements Mapper<DriverEntity, DriverEntity> {

  mapFrom(param: DriverEntity): DriverEntity {
    automapper
    .createMap('DriverEntity', DriverEntity)
    .forMember('birth_date', opts => opts.mapFrom('birth_date'))
    .forMember('birth_date', opts => moment(opts.sourceObject[opts.sourcePropertyName]).format('YYYY-MM-DD'));

    return automapper.map('DriverEntity', DriverEntity, param);
  }

  mapTo(param: DriverEntity): DriverEntity {
    automapper
      .createMap('DriverEntity', DriverEntity);

    return automapper.map('DriverEntity', DriverEntity, param);
  }
}
