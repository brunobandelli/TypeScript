const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  //   chaveC?: string;
  //   [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

// objetoA.chaveA = 'Outro Valor';
// objetoA.chaveC = 'Nova Chave';
// objetoA.chaveD = 'Nova Chave';

objetoA.chaveB = 'Outro Valor';

console.log(objetoA);
