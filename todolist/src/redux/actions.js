export const SET_RAW_DATA = "SET_RAW_DATA";
export const TOGGLE_TASK = 'TOGGLE_TASK';

export const setRawData = (data) => ({
  type: SET_RAW_DATA,
  payload: data,
});

export const toggleTask = () => ({
  type: TOGGLE_TASK,
});

