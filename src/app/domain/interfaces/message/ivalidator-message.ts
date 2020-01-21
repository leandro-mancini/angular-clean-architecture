export abstract class IValidatorMessage {
  abstract required(field: string): any;
  abstract maximumSize(field: string, characters: string): any;
}
