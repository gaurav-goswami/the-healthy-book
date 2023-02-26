import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { apiData } from "../services/apiData";
import FoodSlice from "../features/FoodSlice";

export const store = configureStore({
    reducer : {
        [apiData.reducerPath] : apiData.reducer,
        foodItem : FoodSlice,
    },

    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(apiData.middleware)
})

setupListeners(store.dispatch);