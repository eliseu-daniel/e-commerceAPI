import { Request, Response } from "express";


const produto: {id: number; nome:string; preco: number}[] = [
        {
            id: 1,
            nome: 'Camisa',
            preco: 20
        },
        {
            id: 2,
            nome: 'Calça',
            preco: 25
        }
];

export function Teste(req: Request, res: Response): void {
    res.json({ mensagem: 'Testando Roteador!' });
}

export function produtos(req:Request, res: Response): void {
    res.json({produtos: produto});
};