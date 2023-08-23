import { configureStore } from "@reduxjs/toolkit";
import { recipesSlice } from "./Features/recipesSlice";
import { dietsSlice } from "./Features/dietsSlice";

export const store = configureStore({
    reducer:{
        recipe: recipesSlice.reducer,
        diet: dietsSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type Appdispatch = typeof store.dispatch