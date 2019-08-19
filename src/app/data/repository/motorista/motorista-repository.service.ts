import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { IMotoristaRepository } from 'src/app/core/interfaces/repository/imotorista-repository';
import { MotoristaModel } from 'src/app/core/domain/entity/motorista-model';
import { MotoristaMapper } from './motorista-mapper';
import { environment } from 'src/environments/environment';
import { MotoristaEntity } from './motorista-entity';
import { map, flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MotoristaRepositoryService implements IMotoristaRepository {

  private mapper = new MotoristaMapper();

  constructor(private http: HttpClient) { }

  get(id?: number): Observable<MotoristaModel> {
    if (id) {
      return this.http
        .get<MotoristaEntity>(environment.serverUrl + '/motoristas')
        .pipe(map((item) => {
          if (item[0]) {
            return this.mapper.mapFrom(item[0]);
          }

          return null;
        }));
    } else {
      return this.http
        .get<MotoristaEntity[]>(environment.serverUrl + '/motoristas')
        .pipe(flatMap((item) => item))
        .pipe(map(this.mapper.mapFrom));
    }
  }
  insert(param: MotoristaModel): Observable<MotoristaModel> {
    return this.http
      .post<MotoristaEntity>(environment.serverUrl + '/motoristas', param)
      .pipe(map(this.mapper.mapFrom));
  }
  update(param: MotoristaModel): Observable<MotoristaModel> {
    return this.http
      .put<MotoristaEntity>(environment.serverUrl + '/motoristas/' + param.id, param)
      .pipe(map(this.mapper.mapFrom));
  }
  disableEnable(id: number, status: boolean): Observable<MotoristaModel> {
    return this.http
      .patch<MotoristaEntity>(environment.serverUrl + '/motoristas/' + id, { enable: status })
      .pipe(map(this.mapper.mapFrom));
  }

}
