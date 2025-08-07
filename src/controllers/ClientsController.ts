import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient;

export async function findAll(req: Request, res: Response):Promise<void> {
    try {
        const clients = await prisma.clients.findMany();
        res.json(clients);
    } catch (error) {
        res.status(500).json({error: 'Erro interno no servidor'});
    }
}