import express, { Request, Response } from 'express'

const app = express();
const PORT = 3000;

// Middleware para que o Express consiga ler o body de requisições JSON
app.use(express.json())


app.get('/', (req: Request, res: Response) => {
    res.status(200).json({message : 'Hello, World!'})
})
app.get('/users', (req: Request, res: Response) => {
    res.status(200).json({ data: { info: { users: [{ nome: "Adriana", cidade: "São Paulo" }] } } })
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})