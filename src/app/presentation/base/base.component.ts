import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { BaseService } from './base.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(
    private baseService: BaseService
  ) { }

  ngOnInit() {
    this.changeOpenSidenav();
  }

  changeOpenSidenav() {
    this.baseService.changeOpenSidenav.subscribe(resp => {
      this.sidenav.open();
    });
  }

}
