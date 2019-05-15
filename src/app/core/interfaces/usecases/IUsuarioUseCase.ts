import { Observable } from 'rxjs';

export interface IUsuarioUseCase<S, T> {
  obterAll(params: void): Observable<T>;
  obter(params: S): Observable<T>;
  inserir(params: S): Observable<T>;
  alterar(params: S): Observable<T>;
  excluir(params: number): Observable<T>;
}
