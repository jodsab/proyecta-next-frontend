import Api from "./Api";
import { BASE_URL } from "./Url";

export default class HubSpotService {

  static async newContact(data: object) {
    try {
      const rsp = await Api.post(`${BASE_URL}/hubspot`, data);
      const rspJson = await rsp.json();
      return rspJson;
    } catch (error) {
      console.log("error", error);
    }
  }
}
