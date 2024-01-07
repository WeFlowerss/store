const initialState = {
  flowers: [],
  loading: true,
  error: null,
};

export const flowersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return { ...state, loading: true, error: null };

    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        flowers: [...state.flowers, ...action.payload],
      };

    case "FETCH_DATA_FAILURE":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
