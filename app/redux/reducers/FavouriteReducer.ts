import { FAV_ADD } from "../Constants";

const initialState = {
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FAV_ADD:
      return {
        ...state,
        list: [...state.list, action.data],
      };
    default:
      return state;
  }
};