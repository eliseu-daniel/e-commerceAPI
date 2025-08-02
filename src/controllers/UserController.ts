import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export function Teste(req: Request, res: Response): void {
  console.log(req.body);
  res.json(req.body);
}

export async function getAll(req: Request, res: Response): Promise<void> {
    try {
      const users = await prisma.users.findMany();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching users' });
    }
}

export async function createUser(req:Request, res:Response): Promise<void> {
    const {name, email, password, cpf, phone} = req.body;

    try {
      const newUser = await prisma.users.create({
        data: {
          nameUser: name,
          email,
          password,
          cpf,
          phone
        }
      });
      
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      res.status(500).json({ message: 'Não foi possível criar o usuário' });
    }
}