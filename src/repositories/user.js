import { SERVER_BASE_URL } from "../helpers/constants.js";
import axios2 from "axios";
const axios = axios2.create({
  baseURL: SERVER_BASE_URL,
});

export class User {
  static async createUser(user) {
    const res = await axios.post(`/users`, user);
    return res.data;
  }

  static async getUserInfoById(userId) {
    const res = await axios.get(`/users`, { params: { userId } });
    return res.data;
  }

  static async getUserInfoByChatId(chatId) {
    const res = await axios.get(`/users`, { params: { chatId } });
    return res.data;
  }

  static async getUserInfoByPhone(phoneNumber) {
    const res = await axios.get(`/users`, { params: { phoneNumber } });
    return res.data;
  }

  static async updateChatId(phoneNumber, chatId) {
    const res = await axios.patch(`/users`, { phoneNumber, chatId });
    return res.data;
  }
}
