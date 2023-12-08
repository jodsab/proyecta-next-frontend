import { BASE_URL } from "./Url";
import Api from "./Api";

export default class RecaptchaService {

  static async tryCaptcha(data) {
    try {
      const rsp = await Api.post(`${BASE_URL}/recaptcha`, data);
      const rspJson = await rsp.json();
      return rspJson;
    } catch (error) {
      console.log("error", error);
    }
  }
}
