// let numero:number = 10
// let palavra:string = "algum texto";
// let bol:boolean = true

// let x:number|string = 10
// x = "Breno"

// let vetor: number[] = [1,2,3,4,5]
// vetor[2] = 10
// vetor.push(6)
// console.log(vetor)
// //vetor = [5,6,7,8,9]

// //vetor de string

// let vetorString:string[] = ["a","b","ab"]

// interface Pessoa {
//     id?:number|string;
//     nome:string;
//     idade:number
// }

// const pessoa:Pessoa ={
//     nome:"Breno",
//     idade:17,
// }

// const pessoa2:Pessoa ={
//     nome:"Pedro",
//     idade:17,
// }

// pessoa.nome ="Breninho"


// const cloudVoadora:any = []

// const batataVoadora:undefined = undefined

// const func = (nome:string):string =>`${nome} Lindo :3`
// func("Breno")

// function somaVetor(v:number[]){
//     const soma = v.reduce((prev,curr)=>prev+curr,0)
//     return soma
// }

// // function somaVetor2(v:number[]):number{
// //     let soma = 0
// //     for (let i = 0; i< v.length; i++){
// //         soma = soma + v[i]!
// //     }
// //     return soma
// // }
// const result = somaVetor ([1,2,3])
// console.log(result)

// //faça uma função que receba um vetor e devolva a soma
// //dos valores pares.

// function somaPar(v:number[]):number{
//     let soma = 0
//     for (let i = 0; i< v.length; i++){
//         if(v[i]!%2 == 0){
//             soma = soma + v[i]!
//         }
//     }
//     return soma
// }
// console.log(`O valor da soma par é ${somaPar([1,2,3])}`)
// // import express from 'express'

// const app = express()
// app.use(express.json())

// app.get("/",(req,res)=> {
//     res.send("Deu certo🎉🎉🎉🎉🎉🎉🎉🎉")
// })

// app.listen(8000, () => {
//     console.log("🚀 Servidor online em http://localhost:8000");
// });

/**
 * Exercício 02 - divisivelPor11
 * Nome da função - divisivelPor11
 * Crie uma função que retorna um array com os números divisíveis por 11 no intervalo
 * @param {number} min Número mínimo
 * @param {number} max Número máximo
 * @returns {number[]} Retorna um array com os números divisíveis por 11 no intervalo
 * @example
 *  divisivelPor11(1, 100) // [11, 22, 33, 44, 55, 66, 77, 88, 99]
 *  
 * divisivelPor11(11, 110) // [11, 22, 33, 44, 55, 66, 77, 88, 99, 110]
 */

//Início do seu código

function divisivelPor11(min:number, max:number){
    const vetorDivisiveis11:number[] = []
    for (let i = min; i <= max; i++){
        if (i%11===0){
                vetorDivisiveis11.push(i)
        }
    }
    return vetorDivisiveis11
}
console.log(divisivelPor11(1,100))


//Fim do seu código
