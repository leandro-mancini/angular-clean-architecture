import { Observable } from 'rxjs';
import { MotoristaModel } from '../../domain/entity/motorista-model';
export abstract class IMotoristaController {
  abstract get(id?: number): Observable<MotoristaModel>;
  abstract insert(param: MotoristaModel): Observable<MotoristaModel>;
  abstract update(param: MotoristaModel): Observable<MotoristaModel>;
  abstract disableEnable(id: number, status: boolean): Observable<MotoristaModel>;
}
