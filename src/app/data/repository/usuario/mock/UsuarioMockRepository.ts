import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, flatMap } from 'rxjs/operators';

import { environment } from '@env/environment';
import { IUsuarioRepository } from '@app/core/interfaces/repositories/IUsuarioRepository';
import { IUsuarioModel } from '@app/core/domain/entities/usuario.model';
import { IUsuarioMockEntity } from './IUsuarioMockEntity';
import { UsuarioMockMapper } from './UsuarioMockMapper';

@Injectable({
  providedIn: 'root'
})
export class UsuarioMockRepository implements IUsuarioRepository {

  private mapper = new UsuarioMockMapper();

  constructor(
    private http: HttpClient
  ) { }

  obterAll(): Observable<IUsuarioModel> {
    return this.http
    .get<IUsuarioMockEntity[]>(environment.serverUrl + '/usuarios')
    .pipe(flatMap((item) => item))
    .pipe(map(this.mapper.mapFrom));
  }

  obter(model: IUsuarioModel): Observable<IUsuarioModel> {
    return this.http
      .get<IUsuarioMockEntity>(environment.serverUrl + '/usuarios?username=' + model.username + '&senha=' + model.senha + '')
      .pipe(map((item) => {
        if (item[0]) {
          return this.mapper.mapFrom(item[0]);
        }

        return null;
      }));
  }

  inserir(model: IUsuarioModel): Observable<IUsuarioModel> {
    return this.http
      .post<IUsuarioMockEntity>(environment.serverUrl + '/usuarios', model)
      .pipe(map(this.mapper.mapFrom));
  }
  alterar(model: IUsuarioModel): Observable<IUsuarioModel> {
    return this.http
      .put<IUsuarioMockEntity>(environment.serverUrl + '/usuarios/' + model.id, model)
      .pipe(map(this.mapper.mapFrom));
  }
  excluir(id: number): Observable<IUsuarioModel> {
    return this.http
      .delete<IUsuarioMockEntity>(environment.serverUrl + '/usuarios/' + id);
  }

}
