import { Injectable } from '@angular/core';
import { ToastService } from 'ngx-praxio-ui';
import { ValidationError } from 'ts.validator.fluent/dist';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class NotificationToast {
  constructor(
    private toast: ToastService
  ) { }

  error(err: any) {
    const erros: string[] = [];

    _.forEach(err, (x: ValidationError) => {
      const msg = x.Message;

      erros.push(msg + '<br>');
    });

    this.toast.open(_.join(erros, ' '));
  }
}
