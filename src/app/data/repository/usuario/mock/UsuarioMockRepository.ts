import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '@env/environment';
import { IUsuarioRepository } from '@app/core/interfaces/repositories/IUsuarioRepository';
import { IUsuarioModel } from '@app/core/domain/entities/usuario.model';
import { IUsuarioMockEntity } from './IUsuarioMockEntity';
import { UsuarioMockMapper } from './UsuarioMockMapper';

@Injectable({
  providedIn: 'root'
})
export class UsuarioMockRepository extends IUsuarioRepository {

  private mapper = new UsuarioMockMapper();

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  obterAll(): Observable<IUsuarioModel[]> {
    return of();
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
    return of();
  }
  alterar(model: IUsuarioModel): Observable<IUsuarioModel> {
    return of();
  }
  excluir(id: number): Observable<IUsuarioModel> {
    return of();
  }

}
