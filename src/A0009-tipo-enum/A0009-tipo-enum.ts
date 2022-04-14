/* eslint-disable prettier/prettier */
enum Cores {
    VERMELHO = 10, // 10
    AZUL = 100, // 100
    AMARELO = 200, // 200
    // ROXO = 'ROXO',
    // VERDE = 201,
    // ROSA
}

enum Cores {
    ROXO = 'ROXO',
    VERDE = 201,
    ROSA
}


export function escolhaACore(cor: Cores): string{
    console.log(Cores[cor]);
}

escolhaACore(123456);
// console.log(Cores);
// console.log(Cores.VERMELHO);
// console.log(Cores[10]);

// enum Cores {
//     ROXO = 'ROXO',
//     VERDE = 201,
//     ROSA,
// }

// function escolhaAcor(cor: Cores): void {
//     console.log(Cores[cor]);
// }

// escolhaAcor(123456);