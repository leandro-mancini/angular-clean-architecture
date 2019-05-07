import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  @Output() changeOpenSidenav: EventEmitter<any> = new EventEmitter();

  constructor() { }

  openSidenav() {
    this.changeOpenSidenav.emit(status);
  }
}
