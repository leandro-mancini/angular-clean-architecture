import { Observable } from 'rxjs';
import { UserEntity } from '../../entities/user-entity';

export abstract class IUserUsecase {
  abstract login(param: UserEntity): Observable<UserEntity>;
  abstract logout(): Observable<boolean>;
}
