import { prisma } from '../database/prisma.ts';

export interface CreateUserInterface {
    nameUser: string
    email: string
    password: string
    cpf: string
    // falta passar o phone, ver como que faz com o prisma dps
}

export class UserRepository {
    async create(userData: CreateUserInterface) {
        const newUser = await prisma.users.create({
            data: {
                nameUser: userData.nameUser,
                email: userData.email,
                password: userData.password,
                cpf: userData.cpf,
            }
        });
        return newUser;
    };

    async findAll() {
        return await prisma.users.findMany();
    };

    async findById(id: number) {
        return await prisma.users.findUnique({
            where: { id: id }
        });
    };
}