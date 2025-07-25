"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
  firstName: "Lucas",
  age: 21,
  orders: [{ productID: "1", price: 100 }],
  register() {
    return "Usuário cadastrado";
  },
};
user.password;
// Função com variável opcional 1
const log = (message) => {
  console.log(message);
};
log(user.password);
// Função com variável opcional 2
const log2 = (message) => {
  console.log(message);
};
log2(user.password);
const author = {
  age: 2,
  Books: ["Livro 1", "Livro 2"],
  firstName: "Lucas",
  orders: [],
};
const emailUser = {
  email: "felipe@gmail.com",
  firstName: "Felipe",
};
const newAuthor = {
  books: ["Livro 1", "Livro 2"],
  email: "lucas@gmail.com",
  firstName: "Lucas",
};
const nota = 1;
