/* eslint-disable prettier/prettier */
type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersecao = AB & AC & AD;


const pessoa: Pessoa = {
  nome: 'Bruno',
  sobrenome: 'Bandelli',
  idade: 27,
};

console.log(pessoa);

// Module mode
export { pessoa };
