import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "../reducers/messageReducer";
import weatherReducer from "../reducers/weatherReducer";
import { useDispatch } from "react-redux";
// const state = {
//     weatherInfo: {
//         temp: number,
//         city: string,
//         country: string,
//         pressure: number,
//         sunset: number,
//     },
//     message: string
// }

export const store = configureStore({
    reducer: {
        weatherInfo: weatherReducer,
        message: messageReducer
    }
})
type AppDispatchFunction = () => AppDispatch;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: AppDispatchFunction = useDispatch;