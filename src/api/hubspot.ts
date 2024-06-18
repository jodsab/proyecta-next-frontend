import Api from "./Api";
import { HubSpotBEARER } from "./Url";


export default class HubSpotService {

  static async newContact(data: object) {
    try {
      const rsp = await Api.postWithBearer(`https://api.hubapi.com/crm/v3/objects/contacts`, `${HubSpotBEARER}`, data);
      const rspJson = await rsp.json();
      return rspJson;
    } catch (error) {
      console.log("error", error);
    }
  }
}
