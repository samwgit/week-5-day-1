import { BurgerDb } from "../db/BurgerDB.js"


class BurgersService {

}







async getBurgers(){
  const res = BurgerDb
  return res.burgers
}


















export const burgersService = new BurgersService()