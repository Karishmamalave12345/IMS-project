import { Store, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import RootReducer from "./RootReducer";


const store: Store = configureStore({     
    reducer: RootReducer
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
