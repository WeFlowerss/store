const initialState = {
  user: null,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_USER_ID":
      const params = new URLSearchParams(action.payload);
      const result = {};
      params.forEach((value, key) => {
        result[key] = value;
      });

      console.log(result);
      return {
        ...state,
        user: result,
      };

    default:
      return state;
  }
}
