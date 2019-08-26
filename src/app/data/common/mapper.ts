export abstract class Mapper<O, I> {
  abstract mapFrom(param: O): I;

  abstract mapTo(param: I): O;
}

