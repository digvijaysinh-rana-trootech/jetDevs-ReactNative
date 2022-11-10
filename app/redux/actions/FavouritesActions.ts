import { FAV_ADD, FAV_REMOVE } from "../Constants";

export const addFavourites = (data: string) => {
  return {
    type: FAV_ADD,
    data: data
  };
};
export const removeFavourites = (data: string) => {
  return {
    type: FAV_REMOVE,
    data: data
  };
};