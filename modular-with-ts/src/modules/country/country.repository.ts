import data from "./countries.json"
import { Country } from "./country.model";

export default class {
  async findAll(): Promise<Country[]> {
    return new Promise(resolve => resolve(data))
  }

  async findByIso(iso: string): Promise<Country>  {
    return new Promise(resolve => {
      resolve(data.find(c => c.iso === iso))
    })
  }

  async insert(entity: object): Promise<boolean> {
    return true
  }
}