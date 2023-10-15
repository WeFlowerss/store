const initialState = {
  userId: null,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_USER_ID":
      return {
        ...state,
        userId: action.payload,
      };

    default:
      return state;
  }
}
