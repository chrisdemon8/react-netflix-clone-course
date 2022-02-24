import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state



interface CounterState {
    value: number, 
    test: number,  
}

// Define the initial state using that type
const initialState: CounterState = {
    value: 0,
    test : 5, 
}

export const counterSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setFilm: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        increment: (state) => {
            state.value += 1
        },
 

    },
})

export const { setFilm, increment } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer; 