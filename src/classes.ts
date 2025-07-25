//' Convenção -> Usar o "I" antes do nome da Interface
interface IPerson {
  id: number;
  //   age: number;
}
class Person implements IPerson {
  readonly id: number;
  protected name: string;
  private age: number;

  //? O que significam:
  //'  readonly -> Define que aquela chave só pode ser lida, e que seu valor não pode ser alterado

  //' protected -> Ele faz com que a chave seja acessada só pela sua classe e/ou sub-classe

  //' private -> Ela só pode ser acessada pela classe-mãe

  //-> OBS.: Nenhuma dessas palavras-chave podem ser usadas no interface

  constructor(id: number, name: string, age: number) {
    (this.id = id), (this.name = name), (this.age = age);
  }

  register(): string {
    return `${this.name} is now registered`;
  }
}

const persona = new Person(1, "Lucas", 21);
// persona.id = 2;

// Outra maneira de criar uma classe, isso é a mesma coisa que a classe Person
class PersonRefact {
  constructor(
    readonly id: number,
    protected name: string,
    private age: number
  ) {}
}

class Employee extends Person {
  constructor(id: number, name: string, age: number) {
    super(id, name, age);
  }

  //   quantosAnos(): number {
  //     // return this.age; // Erro
  //   }
}
