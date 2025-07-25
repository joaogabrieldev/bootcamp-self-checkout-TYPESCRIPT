//' Forma de passar Types como parâmetros

const returnValue = <Type>(value: Type): Type => value;

const message = returnValue<string>("Hello World");
const count = returnValue<number>(10);

function getFirstValueFromArray<Type2>(array: Type2[]) {
  return array[0];
}

const FirstValueFromStringArray = getFirstValueFromArray<string>([
  "a",
  "b",
  "c",
]);

const firstValueFromNumberArray = getFirstValueFromArray<number>([10, 20]);

const returnValue2 = <Type, X, Y>(value: Type): Type => value;

const message2 = returnValue2<string, boolean, string>("Hello World");
const count2 = returnValue2<number, boolean, string>(10);

// Promisses
const returnPromisses = async (): Promise<number> => {
  return 5;
};

// Generics com Classes

class GenericNumber<T> {
  zeroValue: T;
  sum: (x: T, y: T) => T;

  constructor(zeroValue: T, sum: (x: T, y: T) => T) {
    this.zeroValue = zeroValue;
    this.sum = sum;
  }
}

const myGenericNumber = new GenericNumber<number>(0, (x, y) => x + y);
