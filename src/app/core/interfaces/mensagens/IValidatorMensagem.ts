import { Observable } from 'rxjs';

export abstract class IValidatorMensagem {
  abstract idNaoEncontrado(): any;
  abstract intervaloCaracteres(campo: string, caracteresInicial: number, caracteresFinal: number): any;
  abstract obrigatorio(campo: string): any;
  abstract tamanhoMaximo(campo: string, caracteres: string): any;
  abstract valorEntre(campo: string, numeroInicial: string, numeroFinal: string): any;
  abstract valorMaximo(campo: string, numero: string): any;
}
