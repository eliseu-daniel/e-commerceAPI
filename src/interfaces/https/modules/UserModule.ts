import { CreateUser } from "../../../app/users/createUser.ts";
import { GetAllUser } from "../../../app/users/getAllUsers.ts";
import { GetUser } from "../../../app/users/getUser.ts";
import type Container from "../../../infra/di/container.ts";
import { UserRepository } from "../../../infra/repositories/UserRepository.ts";
import { UserController } from "../controllers/UserController.ts";
import { UserRoutes } from "../routes/UserRoutes.ts";

export class UserModule {
    constructor(di: Container) {
        di.register('UserRepository', () => new UserRepository());
        di.register('UserCreateUserUseCase', () => new CreateUser(
            di.resolve('UserRepository')
        ));
        di.register('GetAllUserUseCase', () => new GetAllUser(
            di.resolve('UserRepository')
        ));
        di.register('GetUserUseCase', () => new GetUser(
            di.resolve('UserRepository')
        ));
        di.register('UserController', () => new UserController(
            di.resolve('UserCreateUserUseCase'),
            di.resolve('GetAllUserUseCase'),
            di.resolve('GetUserUseCase')
        ));
        di.register('UserRoutes', () => new UserRoutes(
            di.resolve('ApiRouter'),
            di.resolve('UserController'),
        ));
    }
}