const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_WISHLIST_REQUEST":
      return { ...state, loading: true, error: null };

    case "FETCH_WISHLIST_SUCCESS":
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    case "FETCH_WISHLIST_FAILURE":
      return { ...state, loading: false, error: action.payload };

    case "UPDATE_PRODUCTS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
