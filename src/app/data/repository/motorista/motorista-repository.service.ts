import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { MotoristaMapper } from './motorista-mapper';
import { environment } from 'src/environments/environment';
import { map, flatMap } from 'rxjs/operators';
import { DriverEntity } from '../../../domain/entities/driver-entity';
import { IMotoristaRepository } from 'src/app/domain/interfaces/repository/imotorista-repository';

@Injectable({
  providedIn: 'root'
})
export class MotoristaRepositoryService implements IMotoristaRepository {

  private mapper = new MotoristaMapper();

  constructor(private http: HttpClient) { }

  get(id?: number): Observable<DriverEntity> {
    if (id) {
      return this.http
        .get<DriverEntity>(environment.serverUrl + '/motoristas')
        .pipe(map((item) => {
          if (item[0]) {
            return this.mapper.mapFrom(item[0]);
          }

          return null;
        }));
    } else {
      return this.http
        .get<DriverEntity[]>(environment.serverUrl + '/motoristas')
        .pipe(flatMap((item) => item))
        .pipe(map(this.mapper.mapFrom));
    }
  }
  insert(param: DriverEntity): Observable<DriverEntity> {
    return this.http
      .post<DriverEntity>(environment.serverUrl + '/motoristas', param)
      .pipe(map(this.mapper.mapFrom));
  }
  update(param: DriverEntity): Observable<DriverEntity> {
    return this.http
      .put<DriverEntity>(environment.serverUrl + '/motoristas/' + param.id, param)
      .pipe(map(this.mapper.mapFrom));
  }
  disableEnable(id: number, status: boolean): Observable<DriverEntity> {
    return this.http
      .patch<DriverEntity>(environment.serverUrl + '/motoristas/' + id, { enable: status })
      .pipe(map(this.mapper.mapFrom));
  }

}
