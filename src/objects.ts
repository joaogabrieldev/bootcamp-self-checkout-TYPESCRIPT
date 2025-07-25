// Type
type Order = {
  productID: string;
  price: number;
};

type User = {
  firstName: string;
  age: number;
  // Variável Opcional
  email?: string;
  password?: string;
  orders: Order[];
  register?(): string;
};

const user: User = {
  firstName: "Lucas",
  age: 21,
  orders: [{ productID: "1", price: 100 }],
  register() {
    return "Usuário cadastrado";
  },
};

user.password;

// Função com variável opcional 1

const log = (message?: string) => {
  console.log(message);
};

log(user.password);

// Função com variável opcional 2

const log2 = (message: string) => {
  console.log(message);
};

log2(user.password!);

// Unions

type Author = {
  Books: string[];
};

const author: Author & User = {
  age: 2,
  Books: ["Livro 1", "Livro 2"],
  firstName: "Lucas",
  orders: [],
};

// Interfaces
interface UserInterface {
  firstName: string;
  email: string;
}

const emailUser: UserInterface = {
  email: "felipe@gmail.com",
  firstName: "Felipe",
};

interface AuthorInterface {
  readonly books: string[];
}

const newAuthor: UserInterface & AuthorInterface = {
  books: ["Livro 1", "Livro 2"],
  email: "lucas@gmail.com",
  firstName: "Lucas",
};

// Assinalar uma intersection a um type

type Nota = number | string;
const nota: Nota = 1;
