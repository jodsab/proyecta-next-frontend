import { BASE_URL } from "./Url";
import Api from "./Api";

export default class ResendService {

  static async sendFormReclamo(data: string) {
    try {
      const rsp = await Api.post(`${BASE_URL}/send`, data);
      const rspJson = await rsp.json();
      return rspJson;
    } catch (error) {
      console.log("error", error);
    }
  }
}
