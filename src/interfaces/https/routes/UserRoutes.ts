import { type Express, type IRouter } from "express";
import type { UserController } from "../controllers/UserController.ts";

export class UserRoutes {
    constructor(router: IRouter, controller: UserController) {

        // para resolver o problema do controler dando erro vazio, modelo 1
        router.get('/users', (req, res) => controller.getAllUser(req, res));
        router.get('/users/:id', controller.getUser);
        router.post('/users', controller.createUser);
    }
}