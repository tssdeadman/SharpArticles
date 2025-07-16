import { configureStore } from "@reduxjs/toolkit";
import loginslice from '../features/loginslice'

export const store = configureStore({
    reducer:loginslice,
})