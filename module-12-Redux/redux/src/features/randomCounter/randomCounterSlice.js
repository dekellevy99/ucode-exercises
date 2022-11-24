import { createSlice } from "@reduxjs/toolkit";


export const randomCounterSlice = createSlice({
    name: "random-counter",
    initialState: {
        value: 0
    },

    reducers: {
        generateRandomNumber: (state) => {
            state.value = Math.random()
        }
    }
})

export const {generateRandomNumber} = randomCounterSlice.actions;

export const selectRandomCounter = (state) => state.randomCounter.value;

export default randomCounterSlice.reducer;
