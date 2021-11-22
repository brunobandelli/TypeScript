export function criaErro(): never {
    throw new Error('Erro Qualquer');
}

criaErro()