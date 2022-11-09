import { FAV_ADD } from "../Constants";

export const addFavourites = (data: string) => {
  return {
    type: FAV_ADD,
    data: data
  };
};