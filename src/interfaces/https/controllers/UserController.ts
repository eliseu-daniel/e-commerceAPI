import type { Request, Response } from "express";
import type { CreateUser } from "../../../app/users/createUser.ts";
import type { GetAllUser } from "../../../app/users/getAllUsers.ts";
import type { GetUser } from "../../../app/users/getUser.ts";

export class UserController {
  private createUserUseCase: CreateUser;
  private getAllUseCase: GetAllUser;
  private getUserUseCase: GetUser;

  constructor(createUserUseCase: CreateUser, getAllUseCase: GetAllUser, getUserUseCase: GetUser) {
    this.createUserUseCase = createUserUseCase;
    this.getAllUseCase = getAllUseCase;
    this.getUserUseCase = getUserUseCase
  }

  async createUser(req: Request, res: Response) {
    const { name, email, password, cpf } = req.body;

    try {
      const newUser = await this.createUserUseCase.execute({
        nameUser: name,
        email,
        password,
        cpf,
      });

      res.status(201).json(newUser);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      res.status(500).json({ message: 'Não foi possível criar o usuário' });
    }
  };

  async getAllUser(req: Request, res: Response) {
    try {
      const users = await this.getAllUseCase.findMany();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Error ao consultar usuários' });
    }
  };

  async getUser(req: Request<{ id: string }>, res: Response) {
    const id: number = Number(req.params.id);

    try {
      const data = await this.getUserUseCase.findUnique(id);
      res.status(200).json(data)
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      res.status(500).json({ message: 'Não foi possível consultar o usuário' });
    }
  };
}