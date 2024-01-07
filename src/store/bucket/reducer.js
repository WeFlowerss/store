const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const bucketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BUCKET_REQUEST":
      return { ...state, loading: true, error: null };

    case "FETCH_BUCKET_SUCCESS":
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    case "FETCH_BUCKET_FAILURE":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
