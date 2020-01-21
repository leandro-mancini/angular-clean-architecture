export abstract class Mapper<O, E> {
  abstract mapFrom(param: O): E;

  abstract mapTo(param: O): E;
}

