import { BaseContext } from "koa"
import PokemonService from "./pokemon.service"

const service = new PokemonService()

export default class {
  async findById(ctx: BaseContext): Promise<any> {
    const id = ctx.params.id
    const response = await service.search(id)

    ctx.body = response
  }
}