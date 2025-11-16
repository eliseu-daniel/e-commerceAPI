import { CreateUser } from "../../../app/users/createUser.ts";
import type Container from "../../../infra/di/container.ts";
import { UserRepository } from "../../../infra/repositories/UserRepository.ts";
import { UserController } from "../controllers/UserController.ts";
import { UserRoutes } from "../routes/UserRoutes.ts";

const fakeUserRepository = {
    create: async () => {
        const user = {
            nameUser: 'Eliseu',
            cpf: '15456',
            email: 'smdklsad',
        }
        return user;
    }
}

export class UserModule {
    constructor(di: Container) {
        di.register('UserRepository', () => fakeUserRepository);
        di.register('UserCreateUserUseCase', () => new CreateUser(
            di.resolve('UserRepository')
        ));
        di.register('UserController', () => new UserController(
            di.resolve('UserCreateUserUseCase'),
            di.resolve('GetAllUserUseCase'),
            di.resolve('GetUserUseCase')
        ));
        di.register('UserRoutes', () => new UserRoutes(
            di.resolve('App'),
            di.resolve('UserController'),
        ));
    }
}