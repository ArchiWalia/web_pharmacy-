import { configureStore } from "@reduxjs/toolkit";
import authReducer from './reducers/authSlice';

export const store = configureStore({
    reducer: {
       auth: authReducer,
       cart: cartReducer
    },

});

export default store;