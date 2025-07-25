// Tipos Básicos do Typescript
let idade: number = 5;
const firstName: string = "Lucas";
const isValid: boolean = true;

// Variável sem tipagem estática
let isso: any = "isso";

// Definição de Arrays
const ids: number[] = [1, 2, 3, 4, 5];
const booleans: boolean[] = [true, false, true, false, true];
const names: string[] = ["Lucas", "João", "Natallya"];

// Tupla -> Garantir a ordem de valores de um array
const person: [number, string] = [1, "Lucas"];

// Lista de Tuplas (Semelhante a um Array de Objetos)
const people: [number, string][] = [
  [1, "Lucas"],
  [2, "João"],
  [3, "Natallya"],
];

// Intersections
const productID: string | number = 1;

const personID: string | number | boolean = true;

// Enum

enum Direction {
  Up = 1,
  Down = 2,
  Left = 3,
  Right = 4,
}

const direction = Direction.Up;

// Type Assertions
const productName: any = "boné";

let itemId: string;

itemId = productName as string;
// ou
itemId = <string>productName;

console.log(direction);
