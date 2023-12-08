export default class Api {
  static get(URL: string) {
    return fetch(URL, { method: "GET" });
  }

  static post(URL: string, data: any) {
    return fetch(URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
}
