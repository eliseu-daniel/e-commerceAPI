import { diContainer } from '../../app.ts';

export class CreateUser {

    constructor(diContainer: any) {
        this.userRepository = diContainer;
    }
    async execute(userData) {
        const { name, email, password, cpf, phone, products } = userData;

        if (!name || !email || !password || !cpf || !phone) {
            throw new Error("All fields are required");
        }
        const newUser = await this.userRepository.create({
            name, email, password, cpf, phone, products
        });
        return newUser;
    }
}