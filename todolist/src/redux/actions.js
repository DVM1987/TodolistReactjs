export const SET_RAW_DATA = "SET_RAW_DATA";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const ADD_TASK = "ADD_TASK";
export const SET_SEARCH_TERM = "SET_SEARCH_TERM";

export const setRawData = (data) => ({
  type: SET_RAW_DATA,
  payload: data,
});

export const toggleTask = () => ({
  type: TOGGLE_TASK,
});

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});
export const setSearchTerm = (term) => ({
  type: SET_SEARCH_TERM,
  payload: term,
});
