import type { CreateUserInterface, UserRepository } from '../../infra/repositories/UserRepository.ts';

export class CreateUser {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async execute(userData: CreateUserInterface) {
        const { nameUser, email, password, cpf } = userData;

        if (!nameUser || !email || !password || !cpf) {
            throw new Error("All fields are required");
        }

        const newUser = await this.userRepository.create(userData);
        return newUser;
    }
}
