import { ToastService } from 'ngx-praxio-ui';
import { ValidationError } from 'ts.validator.fluent/dist';
import * as _ from 'lodash';

export class BaseNotification {
  constructor(
    private toast: ToastService
  ) { }

  errorHandler(err) {
    const erros: string[] = [];

    _.forEach(err, (x: ValidationError) => {
      const msg = x.Message;

      erros.push(msg + '<br>');
    });

    this.toast.open(_.join(erros, ' '));
  }
}
