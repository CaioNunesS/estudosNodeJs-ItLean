// Fazer uma função que identifica se a palavra é um palindromo
// ex = ovo, arara

let palavras = "ovo"


let palavra = palavras.split("")
// console.log(palavra);

function palindromo(string) {
    for (let i = 0; i < string.length; i++) {
        if(palavra[0] == palavra[i]){
        console.log("sim");
        }else{
            console.log("nao");
        }
}
    
}
// palindromo(palavra)


//1. Dado um array de números, escreva uma função que retorne a média aritmética.
let nums = [10, 10, 10, 9]
let media 

function mediaNums(array){
        let resultado = 0;
        for (let valor of array){
            resultado += valor;
        }
        return media = resultado/ (array.length);
    }
// console.log(mediaNums(nums));

//2. Dado um numero inteiro positivo, escreva uma função que retorne a sequencia de Fibonnacci até o numero informado.

function fibonnacci(param) {
    let resultado = [] // criando a variavel como um array vazio
    let i = 2 // criando uma variavel "i" com o valor 2 para usa-la como verdadeira na comparação
    while (i > 0) { // criando o laço while
        
        if (resultado.length < 2) { // se o tamanho do length for menor que 2 ele faz um push de valor "1"
            resultado.push(1)
        }else{ // quando o tamanho do array for maior que "1" crio uma variavel que soma o tamanho do array de resultado "1" - 1 e o tamanho do array resultado do segundo - 2 "3"
            let soma = resultado[resultado.length - 1] + resultado[resultado.length - 2]
            // console.log(soma);
            if (soma <= param) {
                resultado.push(soma)
            }else{
                i = 0
            }
            
        }
    }
    // console.log(resultado);
}
fibonnacci(15);

//3. Dado um array de números, escreva uma função que retorne o segundo maior número.

let numeros = [1, 40, 30, 32, 100, 120,150,200, 500]

let ordemC = numeros.sort(function (a,b){
    return a - b
})
// console.log(ordemC);
let segundo = ordemC.length - 2
// console.log(ordemC[segundo]);


//4. Dada uma string, escreva uma função que retorne a primeira letra de cada palavra em maiúscula.

let string = 'maça'

function primeiraMaiuscula(word) {
    
    let palavra = word.split("")
    // let teste = palavra.split("")
    for (let i = 0; i < palavra.length; i++) {
        if(i == 0){
            palavra[i] = palavra[i].toUpperCase()
        }
    }
    let palavraM = palavra.join('')
    // let primeiraM = palavra[0].toUpperCase()
    // teste.join('')
    console.log(palavraM);
}
primeiraMaiuscula(string)

//5. Dado um array de números, escreva uma função que retorne o número que aparece mais vezes.

// let arrayNums = [1,5,2,5,3,4,4,5,6,6,5,6,7,5,6,5]

var entrada = [1, 2, 3, 4, 5, 2, 2, 3,3,3,3];

entrada.sort(); // está ordenando como crescente

var maior = null;
var ocorrenciasMaior = -1;

var contagem = 1;
for ( var i = 1 ; i <= entrada.length ; i++ ) {
  if ( i < entrada.length && entrada[i] == entrada[i-contagem] )
    contagem++;
  
  else if ( contagem > ocorrenciasMaior ) {
    maior = entrada[i-1];
    ocorrenciasMaior = contagem;
  }
}
console.log(maior);
console.log(ocorrenciasMaior);



