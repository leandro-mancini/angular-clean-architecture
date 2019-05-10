import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import * as _ from 'lodash';

import { ObterAllUsuarioUseCase } from '../../core/usecases/usuario/base/ObterAllUsuarioUseCase';
import { IUsuarioModel } from '@app/core/domain/entities/usuario.model';
import { ExcluirUsuarioUseCase } from '../../core/usecases/usuario/base/ExcluirUsuarioUseCase';
import { MatTableDataSource } from '@angular/material';
import { ToastService } from 'ngx-praxio-ui';
import { ValidationError } from 'ts.validator.fluent/dist';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoading = false;
  dataSource: any;
  usuarios: IUsuarioModel[] = [];
  displayedColumns: string[];

  constructor(
    private toast: ToastService,
    private obterAllUsuarioUseCase: ObterAllUsuarioUseCase,
    private excluirUsuarioUseCase: ExcluirUsuarioUseCase
  ) { }

  ngOnInit() {
    this.obterAllUsuario();
  }

  obterAllUsuario() {
    this.isLoading = true;

    this.obterAllUsuarioUseCase.execute()
    .pipe(finalize(() => {
      this.isLoading = false;
    }))
    .subscribe((usuarios: IUsuarioModel) => {
      this.usuarios.push(usuarios);

      this.displayedColumns = ['id', 'username', 'senha', 'action'];
      this.dataSource = new MatTableDataSource(this.usuarios);
    });
  }

  alterar(usuario: IUsuarioModel) {
    console.log(usuario);
  }

  inserir() {
    console.log('inserir');
  }

  excluir(params: IUsuarioModel) {
    this.excluirUsuarioUseCase.execute(params).subscribe(() => {
      const index = _.findIndex(this.usuarios, params);

      this.usuarios.splice(index, 1);

      this.dataSource = new MatTableDataSource(this.usuarios);

    }, err => this.errorHandler(err));
  }

  errorHandler(err) {
    const erros: string[] = [];

    _.forEach(err, (x: ValidationError) => {
      const msg = x.Message;

      erros.push(msg + '<br>');
    });

    this.toast.open(_.join(erros, ' '));
  }

}
