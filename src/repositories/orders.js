import { SERVER_BASE_URL } from "../helpers/constants.js";
import axios2 from "axios";
const axios = axios2.create({
  baseURL: SERVER_BASE_URL,
});

export class Orders {
  static async getOrders(userId) {
    const res = await axios.get(`/orders`, {
      params: { userId },
    });
    return res.data;
  }

  static async getOrder(id) {
    const res = await axios.get(`/orders/${id}`);
    return res.data;
  }

  static async getActiveOrdersByPage(userId, page = 0) {
    const res = await axios.get(`/orders`, {
      params: { userId, page, type: "active" },
    });
    return res.data;
  }

  static async getCompletedOrdersByPage(userId, page) {
    const res = await axios.get(`/orders`, {
      params: { userId, page, type: "completed" },
    });
    return res.data;
  }

  static async createOrder(userId, order) {
    const res = await axios.post(`/orders/${userId}`, order);
    return res.data;
  }

  static async deleteOrderByID(orderId) {
    const res = await axios.delete(`/orders/${orderId}`);
    return res.data;
  }
  static async changeStatus(orderId) {
    const res = await axios.patch(`/orders/${orderId}`);
    return res.data;
  }
}
