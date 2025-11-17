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

  // para resolver o problema do controler dando erro vazio, modelo 2
  createUser = async (req: Request, res: Response) => {
    const { nameUser, email, password, cpf } = req.body;

    try {
      const newUser = await this.createUserUseCase.execute({
        nameUser: nameUser,
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

  // para resolver o problema do controler dando erro vazio, modelo 1
  async getAllUser(req: Request, res: Response) {
    try {
      const users = await this.getAllUseCase.findMany();
      res.json(users);
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Error ao consultar usuários' });
    }
  };

  // para resolver o problema do controler dando erro vazio, modelo 2
  getUser = async (req: Request<{ id: string }>, res: Response) => {
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