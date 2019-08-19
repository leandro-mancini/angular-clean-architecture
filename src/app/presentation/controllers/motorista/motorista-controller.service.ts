import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IMotoristaController } from 'src/app/core/interfaces/controllers/imotorista-controller';
import { MotoristaModel } from 'src/app/core/domain/entity/motorista-model';
import { IMotoristaUsecase } from 'src/app/core/interfaces/usecases/imotorista-usecase';

@Injectable({
  providedIn: 'root'
})
export class MotoristaControllerService implements IMotoristaController {

  constructor(
    private motoristaUsecase: IMotoristaUsecase
  ) { }

  get(id?: number): Observable<MotoristaModel> {
    if (id) {
      return this.motoristaUsecase.get(id);
    } else {
      return this.motoristaUsecase.get();
    }
  }
  insert(param: MotoristaModel): Observable<MotoristaModel> {
    return this.motoristaUsecase.insert(param);
  }
  update(param: MotoristaModel): Observable<MotoristaModel> {
    return this.motoristaUsecase.update(param);
  }
  disableEnable(id: number, status: boolean): Observable<MotoristaModel> {
    return this.motoristaUsecase.disableEnable(id, status);
  }

}
