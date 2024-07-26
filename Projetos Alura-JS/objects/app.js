//Exemplo de sintaxe do Objeto

let pessoa = {
    nome: 'Natan',
    idade: 19,
    cidade: 'Niterói',
    hobbie: 'Basquete'
}

console.log(pessoa.idade)

//Podemos adicionar objetos dentro dos obhetos

let concessionaria = {
    carros: {
        nivus: {
            ano: 2022,
            cor: 'cinza',
            motor: 2.0
        },

        fiatToro: {
            ano: 2021,
            cor: 'azul-marinho',
            motor: 2.0
        },

        corolla: {
            ano: 2018,
            cor: 'prata',
            motor: 2.0
        }
    },

    moto: {
        biz: {
            ano: 2019,
        }
    }
}
console.log(concessionaria.carros)