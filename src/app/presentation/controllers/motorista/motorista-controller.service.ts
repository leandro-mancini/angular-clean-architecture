import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMotoristaController } from 'src/app/domain/interfaces/controllers/imotorista-controller';
import { IMotoristaUsecase } from 'src/app/domain/interfaces/usecases/imotorista-usecase';
import { DriverEntity } from '../../../domain/entities/driver-entity';


@Injectable({
  providedIn: 'root'
})
export class MotoristaControllerService implements IMotoristaController {

  constructor(
    private motoristaUsecase: IMotoristaUsecase
  ) { }

  get(id?: number): Observable<DriverEntity> {
    if (id) {
      return this.motoristaUsecase.get(id);
    } else {
      return this.motoristaUsecase.get();
    }
  }
  insert(param: DriverEntity): Observable<DriverEntity> {
    return this.motoristaUsecase.insert(param);
  }
  update(param: DriverEntity): Observable<DriverEntity> {
    return this.motoristaUsecase.update(param);
  }
  disableEnable(id: number, status: boolean): Observable<DriverEntity> {
    return this.motoristaUsecase.disableEnable(id, status);
  }

}
