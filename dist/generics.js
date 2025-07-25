"use strict";
//' Forma de passar Types como parâmetros
Object.defineProperty(exports, "__esModule", { value: true });
const returnValue = (value) => value;
const message = returnValue("Hello World");
const count = returnValue(10);
function getFirstValueFromArray(array) {
    return array[0];
}
const FirstValueFromStringArray = getFirstValueFromArray([
    "a",
    "b",
    "c",
]);
const firstValueFromNumberArray = getFirstValueFromArray([10, 20]);
const returnValue2 = (value) => value;
const message2 = returnValue2("Hello World");
const count2 = returnValue2(10);
// Promisses
const returnPromisses = async () => {
    return 5;
};
// Generics com Classes
class GenericNumber {
    zeroValue;
    sum;
    constructor(zeroValue, sum) {
        this.zeroValue = zeroValue;
        this.sum = sum;
    }
}
const myGenericNumber = new GenericNumber(0, (x, y) => x + y);
