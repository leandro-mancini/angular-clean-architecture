import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { UsuarioMapper } from './usuario-mapper';
import { UserEntity } from '../../../domain/entities/user-entity';
import { IUsuarioRepository } from 'src/app/domain/interfaces/repository/iusuario-repository';

export class UsuarioRepository implements IUsuarioRepository {

  private mapper = new UsuarioMapper();

  constructor(
    private http: HttpClient
  ) { }

  login(param: UserEntity): Observable<UserEntity> {
    const usuario = this.mapper.mapTo(param);

    return this.http
      .get<UserEntity>(environment.serverUrl + '/usuarios?username=' + usuario.username + '&password=' + usuario.password + '')
      .pipe(map((item) => {
        if (item[0]) {
          return this.mapper.mapFrom(item[0]);
        }

        return null;
      }));
  }

  logout(): Observable<boolean> {
    return of(true);
  }


}
