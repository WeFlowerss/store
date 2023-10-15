import { SERVER_BASE_URL } from "../helpers/constants.js";
import axios2 from "axios";
const axios = axios2.create({
  baseURL: SERVER_BASE_URL,
});

export class Wishlist {
  static async deleteFromWishlist(userId, itemId) {
    const res = await axios.delete("/wishlist", {
      params: { type: "delete", userId, itemId },
    });
    return res.data;
  }
  static async saveToWishlist(userId, itemId) {
    const res = await axios.post("/wishlist", { userId, itemId });
    return res.data;
  }
  static async getWishlist(userId) {
    try {
      const res = await axios.get(`/wishlist/${userId}`);
      return res.data;
    } catch {
      console.log("err");
      return [];
    }
  }
  static async clearWishlist(userId) {
    const res = await axios.delete("/wishlist", {
      params: { type: "clear", userId },
    });
    return res.data;
  }
  static async clearWishlistById(userId, products = []) {
    products.forEach((el) => {
      Wishlist.deleteFromWishlist(userId, el);
    });
  }
}
