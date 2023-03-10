//1. Escreva uma função que receba uma string e retorne a mesma string invertida. Exemplo:

//entrada: "hello world"
//saida: "dlrow olleh"

function invert(str){
    return str.split('').reverse().join('')
}

// console.log(invert("abobora maca"));

//2. Escreva uma função que receba um array de números e retorne o maior número encontrado. Exemplo:

//entrada: [3, 7, 2, 8, 1]
//saida: 8

let nums = [1,3,2,6,9,4]

function biggerNumber(arr){
     let result = arr.sort((a,b)=>{ return b - a })
     console.log(result[0]);
}
// biggerNumber(nums)

//3. Escreva uma função que receba um objeto e retorne a quantidade de propriedades que esse objeto possui. Exemplo:

//entrada: { a: 1, b: 2, c: 3 }
//saida: 3

let inputData = {
    a: 1,
    b: 2,
    c: 3
}

function howManyPropsInTheObj(obj){
    let counter = 0
    for (let prop in obj) {
        counter++
    }
    console.log(inputData);
}
// howManyPropsInTheObj(entrada)

//4. Escreva uma função que receba dois arrays e retorne um novo array contendo apenas os elementos que aparecem em ambos os arrays. Exemplo:

//entrada: [1, 2, 3], [2, 3, 4]
//saida: [2, 3]

function commomBetweenArrays(arr1, arr2) {
    let specificProp = []
    
    for (let i = 0; i < arr1.length; i++) {
        
        for (let index = 0; index < arr2.length; index++) {
             if(arr1[i] == arr2[index]){
                 specificProp.push(arr1[i])
                }
            }
        }
        console.log(specificProp);
}
// commomBetweenArrays([1,4,5],[6,4,2,5])

//5. Escreva uma função que receba uma string e retorne um objeto contendo a contagem de cada letra encontrada na string. Exemplo:

//entrada: "hello world"
//saida: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }

function receiveStrReturnObj(str) {
    let obj = {}
    for (let i = 0; i < str.length; i++) {
        if (str[i] in obj) {
            obj[str[i]] += 1
        }else{
            obj[str[i]] = 1 
        }
    }
    console.log(obj);
}

receiveStrReturnObj("abacaxiei")

//6. Escreva uma função que receba um array de objetos e retorne um novo array contendo apenas os objetos que possuem uma determinada propriedade e valor. Exemplo:

//entrada: [{ name: "Alice", age: 20 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 30 }], "age", 25
//saida: [{ name: "Bob", age: 25 }]

let object = [
    {
        name: "Caio",
        age: 25
    },
    {
        name: "Manu",
        age: 22
    },
    {
        name: "Rafa",
        age: 23
    },
    {
        name: "Joao",
        age: 25
    },
    {
        name: "Erick",
        age: 24
    }
]

function showArrOfObj(obj, val) {
    let prop = []
       for (let i = 0; i < obj.length; i++) {
            if (obj[i].age == val) {
                prop.push(obj[i])
                console.log(prop);
            }
       }
}

// showArrOfObj(object,23)

//7. Escreva uma função que receba uma string contendo parênteses e retorne true se a string contiver uma sequência válida de parênteses e false caso contrário. Exemplo:

//entrada: "()()()"
//saida: true

//entrada: "((()))"
//saida: true

//entrada: "(()"
//saida: false

function rightParentheses(str) {
    let counter1 = 0
    let counter2 = 0
    let result = false
    let broke = str.split('')
    for (let i = 0; i < broke.length; i++) {
        if (broke[i] == "(") {
            counter1++
        }if(broke[i] == ")"){
            counter2++
        }        
    }
    if (counter1 == counter2) {
        console.log(result = true);
    }else{
        console.log(result = false);
    }
}

// rightParentheses("(())()")
