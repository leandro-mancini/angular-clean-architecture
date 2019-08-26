import { Injectable } from '@angular/core';
import { IUserUsecase } from '../../interfaces/usecases/iuser-usecase';
import { Observable, throwError } from 'rxjs';
import { UserEntity } from '../../entities/user-entity';
import { IUserRepository } from '../../interfaces/repository/iuser-repository';
import { IUserValidator } from '../../interfaces/validation/iuser-validator';

@Injectable({
  providedIn: 'root'
})
export class UserUsecaseService implements IUserUsecase {

  constructor(
    private userRepository: IUserRepository,
    private userValidator: IUserValidator
  ) { }

  login(param: UserEntity): Observable<UserEntity> {
    const validator = this.userValidator.validateFields(param);

    if (validator.IsValid) {
      return this.userRepository.login(param);
    } else {
      return throwError(validator.Errors);
    }
  }
  logout(): Observable<boolean> {
    return this.userRepository.logout();
  }

}
