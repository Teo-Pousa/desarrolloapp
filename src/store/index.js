import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import shopReducer from '../features/counter/shop/shopSlice'

export default configureStore({
    reducer: {
        counterReducer,
        shopReducer
    },
});