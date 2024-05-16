import { BACKEND_URL } from "./Url";
import Api from "./Api";

export default class UsersService {

  static async postNewUser(data: object) {
    try {
      console.log(`${BACKEND_URL}/clientes`);
      const rsp = await Api.post(`${BACKEND_URL}/clientes`, data);
      const rspJson = await rsp.json();
      return rspJson;
    } catch (error) {
      console.log("error", error);
    }
  }
}
