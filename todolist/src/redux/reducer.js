import {
  SET_RAW_DATA,
  TOGGLE_TASK,
  ADD_TASK,
  SET_SEARCH_TERM,
} from "./actions";

const initialState = {
  rawData: [],
  showTaskComponent: false,
  searchTerm: "",
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

    case ADD_TASK:
      return {
        ...state,
        rawData: [...state.rawData, action.payload],
      };

    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
};
