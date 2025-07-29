import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send('Bem vindo');
});





app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});