import { Observable } from 'rxjs';
import { UsuarioModel } from '../../domain/entity/usuario-model';

export abstract class IUsuarioController {
  abstract login(param: UsuarioModel): Observable<UsuarioModel>;
  abstract logout(): Observable<boolean>;
 
 
}
