export abstract class Mapper<REQ, RES, I> {
  abstract mapFrom(param: RES): I;

  abstract mapTo(param: I): REQ;
}

