function addNumbers(a: number, b: number) {
  return a + b;
}
const result: number = addNumbers(1, 2);

const AddNumero = (a: number, b: number): string => {
  return `${a + b}`;
};
const valor = AddNumero(2, 3);

function multiply(firstNumer: number, seconNumber?: number, base: number = 2) {
  return firstNumer * base;
}
const multiplyResult: number = multiply(5);

console.log({ result, valor, multiplyResult });

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
};
const strider: Character = {
  name: "Strider",
  hp: 50,
  showHp() {
    console.log(`Puntos de vida ${this.hp}`);
  },
};

healCharacter(strider, 20);
healCharacter(strider, 30);

strider.showHp();

export {};
