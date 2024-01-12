const initialState = {
  user: null,
  data: null,
  query: "",
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_USER_ID":
      const params = new URLSearchParams(action.payload);
      const result = {};
      params.forEach((value, key) => {
        result[key] = value;
      });
      result.user = JSON.parse(result.user);
      return {
        ...state,
        data: result,
        user: result.user,
        query: action.payload,
      };

    default:
      return state;
  }
}
