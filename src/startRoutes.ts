import { type Express } from "express"

import Container from "./infra/di/container.ts"
import { UserModule } from "./interfaces/https/modules/UserModule.ts"

export default function startRoutes(app: Express) {
    const di = new Container()

    di.register('App', () => app)

    new UserModule(di)
}