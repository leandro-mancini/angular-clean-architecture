import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IUsuarioModel } from '@app/core/domain/entities/usuario.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '@app/data/services/usuario.service';

@Component({
  selector: 'app-dialog-usuario',
  templateUrl: './dialog-usuario.component.html',
  styleUrls: ['./dialog-usuario.component.scss']
})
export class DialogUsuarioComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IUsuarioModel,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService
  ) {
    this.createForm();
  }

  createForm() {
    this.myForm = this.formBuilder.group({
      id: [this.data ? this.data.id : ''],
      username: [this.data ? this.data.username : '', Validators.required],
      senha: [this.data ? this.data.senha : '', Validators.required],
      token: [this.data ? this.data.token : '']
    });
  }

  ngOnInit() {
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    this.data ? this.alterar() : this.inserir();
  }

  inserir() {
    this.usuarioService.inserir(this.myForm.value).subscribe((resp: any) => {
      console.log(resp);

      this.dialogRef.close(resp);
    });
  }

  alterar() {
    this.usuarioService.alterar(this.myForm.value).subscribe((resp: any) => {
      console.log(resp);

      this.dialogRef.close(resp);
    });
  }

}
