// Get the client
import mysql, { type RowDataPacket } from 'mysql2/promise';


import express from 'express'
import type { Connection } from 'mysql2';
const app = express()
//Como criar uma rota no express?
app.get("/pessoas", async (req,res)=>{let connection:Connection|null = null
try {
  const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'luademel',
});
//  const result =
//    await connection
//    .execute('INSERT INTO pessoa (id,nome) VALUES (?,?)',[3,"Maria"])
//  console.log(result)
  const [dados,campos] = await connection.execute<IPessoa[]>('SELECT * FROM pessoa')
  console.log(dados[0]);
  for(let i = 0; i < dados.length; i++){
    const element = dados[i];
    console.log(element?.id,element?.nome)
  }
  res.status(200).json(dados)
} catch (err) {
  //todo
  console.log(err);
  if(connection){
    await (connection as Connection).end()
  }
}
// Close the connection

})
app.post("/pessoas",(req,res)=>{})
app.listen(8000,()=>{
  console.log("iniciando o servidor na porta 8000")
})


interface IPessoa extends RowDataPacket{
    id:number,
    nome:string,
}
