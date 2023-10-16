import { SERVER_BASE_URL } from "../helpers/constants.js";
import axios2 from "axios";
const axios = axios2.create({
  baseURL: SERVER_BASE_URL,
});

export class Products {
  static isActive = false;
  static bouquets = [];

  static async getProducts() {
    const data = await this.getLimitProducts(0, 9999);
    return data;
  }

  static async getProductsByID(ids = []) {
    const promises = ids.map(this.getProductByID);
    const result = await Promise.all(promises);
    return result;
  }

  static async getProductByID(id) {
    const res = await axios.get(`/bouquets/${id}`);
    return res.data;
  }

  static async createProduct(product) {
    const res = await axios.post(`/bouquets`, product);
    return res.data;
  }

  static async getBouquets(firstIndex, limit) {
    if (this.isActive) return [];
    this.isActive = true;
    const res = await axios.get(`/bouquets`, {
      params: {
        offset: firstIndex,
        limit,
      },
    });
    this.isActive = false;
    return res.data;
  }
  static async deleteProduct(id) {
    return await axios.delete(`/bouquets/${id}`);
  }
  /* static async deleteAllProducts() {
    const db = await connectToDatabase();
    const collection = await db.collection(MONGO_COLLECTION);

    return await collection.deleteMany({});
  } */
  /* static async getPopularBouquets() {
    const db = await connectToDatabase();
    const collection = await db.collection(MONGO_COLLECTION);
    const filters = {
      type: "bouquet",
    };
    const res = await collection
      .find(filters)
      .sort({ popularity: -1 })
      .limit(10)
      .toArray();

    return res;
  } */
  /* static async updateProduct(productId, product) {
    const database = await connectToDatabase();
    const collection = await database.collection(MONGO_COLLECTION);
    const filter = { _id: getMongoId(productId) };
    const update = { $set: product };
    return await collection.updateOne(filter, update);
  } */
  /* static async getLimitProducts(firstIndex, limit) {
    const res = await axios.get(`/bouquets`, {
      params: {
        offset: firstIndex,
        limit,
      },
    });
    return res.data;
  } */
}
