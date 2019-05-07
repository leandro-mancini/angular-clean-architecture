import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-activity-bar',
  templateUrl: './activity-bar.component.html',
  styleUrls: ['./activity-bar.component.scss']
})
export class ActivityBarComponent implements OnInit {

  constructor(
    private baseService: BaseService
  ) { }

  ngOnInit() {
  }

  openSidenav() {
    this.baseService.openSidenav();
  }

}
