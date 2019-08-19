import { Injectable } from '@angular/core';
import { ValidationResult, ValidationError } from 'ts.validator.fluent/dist';
import { MatSnackBar, MatSnackBarRef } from '@angular/material';
import * as _ from 'lodash';

import { NotificationComponent } from './notification.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  snackBarRef: MatSnackBarRef<NotificationComponent>;

  constructor(
    private snackBar: MatSnackBar
  ) { }

  open(err: any): Observable<any> {
    const errs: string[] = [];

    _.forEach(err, (x: ValidationError) => {
      const msg = x.Message;

      errs.push(msg + '<br>');
    });

    this.snackBarRef = this.snackBar.openFromComponent(NotificationComponent, {
      duration: 2000
    });

    this.snackBarRef.instance.message = _.join(errs, ' ');

    return this.snackBarRef.onAction();
  }
}
