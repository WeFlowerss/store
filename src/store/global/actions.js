export const updateModalStatus = (showModalStatus) => ({
  type: "UPDATE_SHOW_MODAL",
  payload: showModalStatus,
});

export const updatePageForQuery = (page) => ({
  type: "UPDATE_PAGE_QUERY",
  payload: page,
});

export const incrementPage = (page = 1) => ({
  type: "INCREMENT_PAGE_QUERY",
  payload: page,
});

export const resetPage = (defaultValue = 0) => ({
  type: "RESET_PAGE_QUERY",
  payload: defaultValue,
});
