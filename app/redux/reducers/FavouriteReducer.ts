import { Alert } from "react-native";
import { AppStrings } from "../../resources/Strings";
import { FAV_ADD, FAV_REMOVE } from "../Constants";

const initialState = {
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FAV_ADD:
      let idAlreadyExists = state.list.indexOf(action.data) > -1;
      if (idAlreadyExists) {
        Alert.alert(AppStrings.JetDevs, AppStrings.UserAlreadyMarked)
        return {
          ...state,
          list: [...state.list],
        }
      }
      else
        return {
          ...state,
          list: [...state.list, action.data],
        };
    case FAV_REMOVE:
      return {
        ...state,
        list: state.list.filter(item => item !== action.data),
      };
    default:
      return state;
  }
};