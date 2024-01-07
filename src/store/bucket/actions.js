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
