interface MathFunct {
  (x: number, y: number): number;
}

const sum: MathFunct = (a: number, b: number): number => {
  return a + b;
};

const value = sum(1, 2);

// Void -> Função que retorna nada

const sub: MathFunct = (a: number, b: number) => {
  return a - b;
};

const log = (message: string): void => {
  console.log(message);
};
