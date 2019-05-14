import { IValidatorMensagem } from '../interfaces/mensagens/IValidatorMensagem';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorMensagem extends IValidatorMensagem {

  constructor(
    private translate: TranslateService
  ) {
    super();
  }

  idNaoEncontrado(): any {
    return this.translate.get('VALIDATOR.IdNaoEncontrado');
  }
  intervaloCaracteres(campo: string, caracteresInicial: number, caracteresFinal: number): any {
    return this.translate.get('VALIDATOR.IntervaloCaracteres', {
      0: campo, 1: caracteresInicial, 2: caracteresFinal
    });
  }
  obrigatorio(campo: string): any {
    return this.translate.get('VALIDATOR.Obrigatorio', {
      0: campo
    });
  }
  tamanhoMaximo(campo: string, caracteres: string): any {
    return this.translate.get('VALIDATOR.TamanhoMaximo', {
      0: campo, 1: caracteres
    });
  }
  valorEntre(campo: string, numeroInicial: string, numeroFinal: string): any {
    return this.translate.get('VALIDATOR.ValorEntre', {
      0: campo, 1: numeroInicial, 2: numeroFinal
    });
  }
  valorMaximo(campo: string, numero: string): any {
    return this.translate.get('VALIDATOR.ValorMaximo', {
      0: campo, 1: numero
    });
  }


}
