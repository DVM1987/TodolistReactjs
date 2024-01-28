import { SET_RAW_DATA, TOGGLE_TASK } from "./actions";

const initialState = {
  rawData: [],
  showTaskComponent: false,
};

export const rawDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RAW_DATA:
      return {
        ...state,
        rawData: action.payload,
      };

    case TOGGLE_TASK:
      return {
        ...state,
        showTaskComponent: !state.showTaskComponent,
      };
    default:
      return state;
  }
};
