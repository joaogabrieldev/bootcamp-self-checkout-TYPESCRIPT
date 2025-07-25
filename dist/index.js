"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Tipos Básicos do Typescript
let idade = 5;
const firstName = "Lucas";
const isValid = true;
// Variável sem tipagem estática
let isso = "isso";
// Definição de Arrays
const ids = [1, 2, 3, 4, 5];
const booleans = [true, false, true, false, true];
const names = ["Lucas", "João", "Natallya"];
// Tupla -> Garantir a ordem de valores de um array
const person = [1, "Lucas"];
// Lista de Tuplas (Semelhante a um Array de Objetos)
const people = [
    [1, "Lucas"],
    [2, "João"],
    [3, "Natallya"],
];
// Intersections
const productID = 1;
const personID = true;
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
const direction = Direction.Up;
// Type Assertions
const productName = "boné";
let itemId;
itemId = productName;
// ou
itemId = productName;
console.log(direction);
