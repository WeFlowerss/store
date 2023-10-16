import { FlowersAPI } from "../../repositories/flowers-api";

export const fetchFlowers = (page) => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_DATA_REQUEST" });

    try {
      const data = await FlowersAPI.products.getBouquets(page * 9, 9);
      dispatch({ type: "FETCH_DATA_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_DATA_FAILURE", payload: error.message });
    }
  };
};
