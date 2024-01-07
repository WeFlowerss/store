const initialState = {
  user: null,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_USER_ID":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
}
