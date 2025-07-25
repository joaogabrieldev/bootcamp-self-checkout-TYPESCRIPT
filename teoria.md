# Teoria -> TypeScript

-> Uma das linguagens mais **requisitadas no mercado atualmente**.

-> Linguagem feita com base no Javascript, mas sendo sua versão aprimorada

## Tipagem

### Tipagem Estática e Dinâmica

**Dinâmica**:
-> O **tipo** de uma variável é associado com o seu valor e não é explicitamente declarado

-> O tipo de uma variável pode ser alterado livremente durante a execução do codigo. Exemplo:

```bash
    let age
    age = 18
    typeof age #number

    age = '21'
    typeof age #string

```

**Estática**:
-> O **tipo** de uma variável é explicitamente declarado
-> O tipo de uma variável não pode ser alterado durante a execução do codigo.
-> os valores assinalados à uma variável precisam respeitar o seu tipo previamente definido.
-> Typescript: Código de Tipos

```bash
    let age: number
    age = 18
    typeof age #number

    age = '21'
    typeof age #error
```

-> Isso dá segurança ao código

## Linguagens Estáticas e Compiladores

-> Linguagens estáticas possuem compiladores, que verificam as variáveis presentes no código, seus tipos e seus valores (e apontam eventuais erros).

-> O compilador de cada linguagem possui suas proprias características:
-> Typescript: TypeScript Compiler
Exemplo:

```bash
    let age: number
    age = 21

    typeof age; # number

    age = '21'

```

# O que é o TypeScript?

-> Linguagem com base no JavaScript

-> Adicionou novas funcionalidades e Tipagem Estática ao JavaScript

-> Todo código Typescript é convertido para o seu equivalente em JS pelo TypeScript Compiler
--> Portanto, podemos usá-la tanto no back-end como no front-end
--> Porque os navegadores não entendem TypeScript, e sim JavaScript

# Porque usar o TypeScript?

-> Como é uma linguagem com Tipagem Estática, previne situações como:

```bash
const sum = (num1, num2) => {
    return num1 + num2

}

sum ("2" , "3")
```

-> Em TypeScript:

```bash
const sum = (num1: number, num2: number) => {
    return num1 + num2

}

sum ("2" , "3") #Error
```

-> Novas Funcionalidades:

- Import/Export ao invés de require/module.exports

## Vantagens e Desvantagens

### Vantagens

- Recursos avançados do JS
- Prevenção de erros de tipagem
- Mais facil de identificar bugs
- Código mais legível
- Extremamente Popular

### Desvantagens

- Escrevemos mais código
- Há uma curva de aprendizado
- Requer compilação para Javascript (processo a mais)
