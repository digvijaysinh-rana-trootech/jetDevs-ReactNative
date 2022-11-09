import { configureStore } from '@reduxjs/toolkit';
import FavouriteReducer from './reducers/FavouriteReducer';
const Store = configureStore({
    reducer: {
        favourites: FavouriteReducer
    },
})


export default Store