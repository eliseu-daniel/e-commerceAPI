import { type Express, Router } from "express";
import type { UserController } from "../controllers/UserController.ts";

export class UserRoutes {
    constructor(app: Express, controller: UserController) {
        const router = Router();

        router.get('/', controller.getAllUser);
        router.get('/:id', controller.getUser);
        router.post('/', controller.createUser);

        app.use('/users', router)
    }
}