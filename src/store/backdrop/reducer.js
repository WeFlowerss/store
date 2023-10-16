const initialState = {
  showModal: false,
};

export function backdropReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_SHOW_MODAL":
      return {
        ...state,
        showModal: action.payload,
      };

    default:
      return state;
  }
}
