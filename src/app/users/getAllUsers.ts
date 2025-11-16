import type { UserRepository } from "../../infra/repositories/UserRepository.ts";

export class GetAllUser {

    private userRepository: UserRepository

    constructor(UserRepository: UserRepository) {
        this.userRepository = UserRepository
    }

    async findMany() {
        const user = this.userRepository.findAll();
        return user;
    }
}