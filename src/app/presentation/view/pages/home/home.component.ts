import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as _ from 'lodash';

import { IMotoristaController } from 'src/app/core/interfaces/controllers/imotorista-controller';
import { finalize } from 'rxjs/operators';
import { MotoristaModel } from 'src/app/core/domain/entity/motorista-model';
import { MatDialog } from '@angular/material';
import { DialogCadastroComponent } from '../../shared/dialogs/dialog-cadastro/dialog-cadastro.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  isLoading: boolean;
  drivers: MotoristaModel[] = [];
  displayedColumns: string[] = ['name', 'phone', 'birth_date', 'documents', 'action'];
  dataSource: any;

  constructor(
    private motoristaController: IMotoristaController,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;

    this.getDrivers();
  }

  getDrivers() {
    this.isLoading = true;

    this.motoristaController.get()
    .pipe(finalize(() => {
      this.isLoading = false;
    }))
    .subscribe((driver: MotoristaModel) => {
      this.drivers.push(driver);
      this.dataSource = new MatTableDataSource(this.drivers);
    });
  }

  newDriver() {
    this.openDialog();
  }

  edit(param: MotoristaModel) {
    this.openDialog(param);
  }

  disableEnable(param: MotoristaModel) {
    param.enable = !param.enable;

    this.motoristaController.disableEnable(param.id, param.enable);
  }

  openDialog(driver?: MotoristaModel) {
    const dialogRef = this.dialog.open(DialogCadastroComponent, {
      width: '650px',
      data: driver ? driver : null
    });

    dialogRef.afterClosed().subscribe(result => this.responseDialog(result));
  }

  responseDialog(result) {
    if (result) {
      const index = _.findIndex(this.drivers, ['id', result.id]);

      if (index !== -1) {
        this.drivers[index] = result;
      } else {
        this.drivers.push(result);
      }

      this.dataSource = new MatTableDataSource(this.drivers);
    }
  }

}
