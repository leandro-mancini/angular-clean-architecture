import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { IMotoristaUsecase } from '../../interfaces/usecases/imotorista-usecase';
import { IMotoristaRepository } from '../../interfaces/repository/imotorista-repository';
import { IMotoristaValidator } from '../../interfaces/validations/imotorista-validator';
import { DriverEntity } from '../../entities/driver-entity';

@Injectable({
  providedIn: 'root'
})
export class MotoristaUsecaseService implements IMotoristaUsecase {

  constructor(
    private motoristaRepository: IMotoristaRepository,
    private motoristaValidator: IMotoristaValidator
  ) { }

  get(id?: number): Observable<DriverEntity> {
    if (id) {
      return this.motoristaRepository.get(id);
    } else {
      return this.motoristaRepository.get();
    }
  }
  insert(param: DriverEntity): Observable<DriverEntity> {
    const validator = this.motoristaValidator.validateFields(param);

    if (validator.IsValid) {
      return this.motoristaRepository.insert(param);
    } else {
      return throwError(validator.Errors);
    }
  }
  update(param: DriverEntity): Observable<DriverEntity> {
    const validator = this.motoristaValidator.validateFields(param);

    if (validator.IsValid) {
      return this.motoristaRepository.update(param);
    } else {
      return throwError(validator.Errors);
    }
  }
  disableEnable(id: number, status: boolean): Observable<DriverEntity> {
    return this.motoristaRepository.disableEnable(id, status);
  }

}
