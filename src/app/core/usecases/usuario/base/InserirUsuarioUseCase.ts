import { Injectable } from '@angular/core';
import { UseCase } from '@app/core/base/use-case';
import { IUsuarioModel } from '@app/core/domain/entities/usuario.model';
import { Observable, of } from 'rxjs';
import { IUsuarioRepository } from '@app/core/interfaces/repositories/IUsuarioRepository';

Injectable({
  providedIn: 'root'
})
export class InserirUsuarioUseCase implements UseCase<IUsuarioModel, IUsuarioModel> {
  constructor(
    private iUsuarioRepository: IUsuarioRepository
  ) { }

  execute(params: IUsuarioModel): Observable<IUsuarioModel> {
    return of();
  }

}
