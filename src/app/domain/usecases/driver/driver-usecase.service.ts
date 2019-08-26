import { Injectable } from '@angular/core';
import { IDriverUsecase } from '../../interfaces/usecases/idriver-usecase';
import { Observable, throwError } from 'rxjs';
import { DriverEntity } from '../../entities/driver-entity';
import { IDriverRepository } from '../../interfaces/repository/idriver-repository';
import { IDriverValidator } from '../../interfaces/validation/idriver-validator';

@Injectable({
  providedIn: 'root'
})
export class DriverUsecaseService implements IDriverUsecase {

  constructor(
    private driverRepository: IDriverRepository,
    private driverValidator: IDriverValidator
  ) { }

  get(id?: number): Observable<DriverEntity> {
    if (id) {
      return this.driverRepository.get(id);
    } else {
      return this.driverRepository.get();
    }
  }
  insert(param: DriverEntity): Observable<DriverEntity> {
    const validator = this.driverValidator.validateFields(param);

    if (validator.IsValid) {
      return this.driverRepository.insert(param);
    } else {
      return throwError(validator.Errors);
    }
  }
  update(param: DriverEntity): Observable<DriverEntity> {
    const validator = this.driverValidator.validateFields(param);

    if (validator.IsValid) {
      return this.driverRepository.update(param);
    } else {
      return throwError(validator.Errors);
    }
  }
  disableEnable(id: number, status: boolean): Observable<DriverEntity> {
    return this.driverRepository.disableEnable(id, status);
  }

}
