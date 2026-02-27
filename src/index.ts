let numero:number = 10
let palavra:string = "algum texto";
let bol:boolean = true

let x:number|string = 10
x = "Breno"

let vetor: number[] = [1,2,3,4,5]
vetor[2] = 10
vetor.push(6)
console.log(vetor)
//vetor = [5,6,7,8,9]

//vetor de string

let vetorString:string[] = ["a","b","ab"]

interface Pessoa {
    id?:number|string;
    nome:string;
    idade:number
}

const pessoa:Pessoa ={
    nome:"Breno",
    idade:17,
}

const pessoa2:Pessoa ={
    nome:"Pedro",
    idade:17,
}

pessoa.nome ="Breninho"


const cloudVoadora:any = []

const batataVoadora:undefined = undefined

// import express from 'express'

// const app = express()
// app.use(express.json())

// app.get("/",(req,res)=> {
//     res.send("Deu certo🎉🎉🎉🎉🎉🎉🎉🎉")
// })

// app.listen(8000, () => {
//     console.log("🚀 Servidor online em http://localhost:8000");
// });