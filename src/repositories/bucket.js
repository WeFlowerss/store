import { SERVER_BASE_URL } from "../helpers/constants.js";
import axios2 from "axios";
const axios = axios2.create({
  baseURL: SERVER_BASE_URL,
});

export class Bucket {
  static async getBucket(userId) {
    const res = await axios.get(`/bucket/${userId}`);
    return res.data;
  }
  static async addToBucket(userId, itemId) {
    const res = await axios.post(`/bucket`, { userId, itemId });
    return res.data;
  }
  static async deleteFromBucket(userId, itemId) {
    const res = await axios.delete(`/bucket`, {
      params: {
        userId,
        itemId,
        type: "delete",
      },
    });
    return res.data;
  }
  static async clearBucket(userId) {
    const res = await axios.delete(`/bucket`, {
      params: {
        userId,
        type: "clear",
      },
    });
    return res.data;
  }

  static async clearBucketById(userId, products = []) {
    products.forEach((el) => {
      Bucket.deleteFromBucket(userId, el);
    });
  }
}
