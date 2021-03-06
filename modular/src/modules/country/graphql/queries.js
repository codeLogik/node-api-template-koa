import Service from '../service'

const service = new Service()

export default {
  async countries(_, __, ctx) {
    return await service.findAll(ctx)
  },
  async country(_, { iso }, ctx) {
    return await service.findByIso(ctx, iso)
  },
}
