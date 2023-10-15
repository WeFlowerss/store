import { SERVER_BASE_URL } from "../helpers/constants.js";
import axios2 from "axios";
const axios = axios2.create({
  baseURL: SERVER_BASE_URL,
});
export class Store {
  static async setRecord(key, value) {
    const res = await axios.patch(`/store`, value, { params: { key } });
    return res.data;
  }

  static async getRecord(key) {
    const res = await axios.get(`/store/${key}`);
    return res.data;
  }

  static async deleteRecordByKey(key) {
    const res = await axios.delete(`/store/${key}`);
    return res.data;
  }
}
