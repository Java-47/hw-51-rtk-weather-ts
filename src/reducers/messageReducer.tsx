import { createSlice } from "@reduxjs/toolkit";

const defaultMessage = 'Enter city name';

const messageSlice = createSlice({
    name: 'message',
    initialState: defaultMessage,
    reducers: {
        putMessage(message, action){
            return action.payload
        }
    }
})

export const {putMessage} = messageSlice.actions;
export default messageSlice.reducer;

