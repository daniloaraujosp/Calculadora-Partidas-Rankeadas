console.log("Seja bem-vindo(a) ao Desafio Calculadora de Partidas Rankeadas.")
console.log("Identificando usuário...")

let nomeUsuario = "Danilo"

let vitorias = 25
let derrotas = 5
let partidas = vitorias + derrotas
let saldoVitorias = subtracao(vitorias,derrotas)

function subtracao(vitorias,derrotas){
    let resultado = vitorias - derrotas
    return resultado
}

console.log("Olá, " + nomeUsuario + "! Vamos ver em qual nível você está? ")
console.log("Você tem " + partidas + " partidas realizadas." )


if (vitorias <= 10) {
    nivel = "Ferro"
} 

else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze"
} 

else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata"
} 

else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro"
} 

else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante"
} 

else if (vitoria >= 101) {
    nivel = "Imortal"
}

console.log("O Herói " + nomeUsuario + " tem o saldo de " + saldoVitorias + " vitórias e está no nível " + nivel + ".")









