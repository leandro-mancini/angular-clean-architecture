import { Component, OnInit } from '@angular/core';
import { ObterAllUsuarioUseCase } from '../../core/usecases/usuario/base/ObterAllUsuarioUseCase';
import { IUsuarioModel } from '@app/core/domain/entities/usuario.model';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoading = false;
  usuarios: IUsuarioModel[] = [];
  displayedColumns: string[];

  constructor(
    private obterAllUsuarioUseCase: ObterAllUsuarioUseCase
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
    });
  }

  alterar(usuario: IUsuarioModel) {
    console.log(usuario);
  }

  inserir() {
    console.log('inserir');
  }

  excluir(id: number) {
    console.log(id);
  }

}
