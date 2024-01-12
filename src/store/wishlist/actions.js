import { FlowersAPI } from "../../repositories/flowers-api";

export const fetchWishlist = (userId) => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_WISHLIST_REQUEST" });

    try {
      const data = await FlowersAPI.wishlist.getWishlist(userId);
      const ids = data.map((el) => el.itemId);
      const res = await FlowersAPI.products.getProductsByID(ids);

      dispatch({ type: "FETCH_WISHLIST_SUCCESS", payload: res });
    } catch (error) {
      dispatch({ type: "FETCH_WISHLIST_FAILURE", payload: error.message });
    }
  };
};

export const deleteItemFromWishlist = (products, userId, index) => {
  return async (dispatch) => {
    const id = products[index]._id;
    FlowersAPI.wishlist.deleteFromWishlist(userId, id);
    products = [...products];
    products.splice(index, 1);
    dispatch({ type: "UPDATE_PRODUCTS", payload: products });
  };
};
