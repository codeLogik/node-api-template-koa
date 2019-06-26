import Router from "koa-router"

import PokemonController from "./pokemon.controller"
import schemaValidator from "../../utils/schema-validator"
import schema from "./pokemon.schema"

const controller = new PokemonController()
const router = new Router({ prefix: `/pokemon` })
const idValidator = schemaValidator({ params: schema })

router.get(`pokemon/find`, `/:id`, idValidator, controller.findById)

export default router
