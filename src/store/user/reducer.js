const initialState = {
  user: null,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_USER_ID":
      const url = new URL(action.payload);
      const params = url.searchParams;
      return {
        ...state,
        user: params,
      };

    default:
      return state;
  }
}
