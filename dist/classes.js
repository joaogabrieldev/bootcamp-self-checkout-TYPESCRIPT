"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    id;
    name;
    age;
    //? O que significam:
    //'  readonly -> Define que aquela chave só pode ser lida, e que seu valor não pode ser alterado
    //' protected -> Ele faz com que a chave seja acessada só pela sua classe e/ou sub-classe
    //' private -> Ela só pode ser acessada pela classe-mãe
    //-> OBS.: Nenhuma dessas palavras-chave podem ser usadas no interface
    constructor(id, name, age) {
        (this.id = id), (this.name = name), (this.age = age);
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const persona = new Person(1, "Lucas", 21);
// persona.id = 2;
// Outra maneira de criar uma classe, isso é a mesma coisa que a classe Person
class PersonRefact {
    id;
    name;
    age;
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
class Employee extends Person {
    constructor(id, name, age) {
        super(id, name, age);
    }
}
