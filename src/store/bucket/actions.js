import { FlowersAPI } from "../../repositories/flowers-api";

export const fetchBucket = (userId) => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_BUCKET_REQUEST" });

    try {
      const data = await FlowersAPI.bucket.getBucket(userId);
      const ids = data.map((el) => el.itemId);
      const res = await FlowersAPI.products.getProductsByID(ids);

      dispatch({ type: "FETCH_BUCKET_SUCCESS", payload: res });
    } catch (error) {
      dispatch({ type: "FETCH_BUCKET_FAILURE", payload: error.message });
    }
  };
};

export const deleteItemFromBucket = (products, userId, index) => {
  return async (dispatch) => {
    const id = products[index]._id;
    FlowersAPI.bucket.deleteFromBucket(userId, id);
    products = [...products];
    products.splice(index, 1);
    dispatch({ type: "UPDATE_PRODUCTS", payload: products });
  };
};
