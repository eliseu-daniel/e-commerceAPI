import { json } from "stream/consumers";
import type { UserRepository } from "../../infra/repositories/UserRepository.ts";

export class GetUser {
    private userRepository: UserRepository;

    constructor(UserRepository: UserRepository) {
        this.userRepository = UserRepository;
    };

    async findUnique(id: number) {
        const userID = id;

        if (!userID) {
            throw Error('Id do usuário obrigatório');
        }

        const user = this.userRepository.findById(userID);

        return user;
    };
}