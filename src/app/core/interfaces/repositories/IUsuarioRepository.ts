import { Observable } from 'rxjs';

import { IUsuarioModel } from '@app/core/domain/entities/usuario.model';

export abstract class IUsuarioRepository {
  abstract obterAll(): Observable<IUsuarioModel[]>;
  abstract obter(model: IUsuarioModel): Observable<IUsuarioModel>;
  abstract inserir(model: IUsuarioModel): Observable<IUsuarioModel>;
  abstract alterar(model: IUsuarioModel): Observable<IUsuarioModel>;
  abstract excluir(id: number): Observable<IUsuarioModel>;
}
