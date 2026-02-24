import express from 'express'

const app = express()
app.use(express.json())

app.get("/",(req,res)=> {
    res.send("Deu certo🎉🎉🎉🎉🎉🎉🎉🎉")
})

app.listen(8000, () => {
    console.log("🚀 Servidor online em http://localhost:8000");
});