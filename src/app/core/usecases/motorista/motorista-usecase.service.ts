import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { IMotoristaUsecase } from '../../interfaces/usecases/imotorista-usecase';
import { MotoristaModel } from '../../domain/entity/motorista-model';
import { IMotoristaRepository } from '../../interfaces/repository/imotorista-repository';
import { IMotoristaValidator } from '../../interfaces/validations/imotorista-validator';

@Injectable({
  providedIn: 'root'
})
export class MotoristaUsecaseService implements IMotoristaUsecase {

  constructor(
    private motoristaRepository: IMotoristaRepository,
    private motoristaValidator: IMotoristaValidator
  ) { }

  get(id?: number): Observable<MotoristaModel> {
    if (id) {
      return this.motoristaRepository.get(id);
    } else {
      return this.motoristaRepository.get();
    }
  }
  insert(param: MotoristaModel): Observable<MotoristaModel> {
    const validator = this.motoristaValidator.validateFields(param);

    if (validator.IsValid) {
      return this.motoristaRepository.insert(param);
    } else {
      return throwError(validator.Errors);
    }
  }
  update(param: MotoristaModel): Observable<MotoristaModel> {
    const validator = this.motoristaValidator.validateFields(param);

    if (validator.IsValid) {
      return this.motoristaRepository.update(param);
    } else {
      return throwError(validator.Errors);
    }
  }
  disableEnable(id: number, status: boolean): Observable<MotoristaModel> {
    return this.motoristaRepository.disableEnable(id, status);
  }

}
