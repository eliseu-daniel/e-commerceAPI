import { type Express, type IRouter } from "express"

import Container from "./infra/di/container.ts"
import { UserModule } from "./interfaces/https/modules/UserModule.ts"

export default function startRoutes(router: IRouter) {
    const di = new Container()

    di.register('ApiRouter', () => router)

    new UserModule(di)
}