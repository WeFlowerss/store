const initialState = {
  showModal: false,
  page: 0,
};

export function globalReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_SHOW_MODAL":
      return {
        ...state,
        showModal: action.payload,
      };
    case "UPDATE_PAGE_QUERY":
      return {
        ...state,
        page: action.payload,
      };
    case "INCREMENT_PAGE_QUERY":
      return {
        ...state,
        page: state.page + 1,
      };
    case "RESET_PAGE_QUERY":
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
}
