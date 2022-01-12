import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    var:0,
}

export const counterSlice = createSlice ({
    name: 'counter',
    initialState,
    reducers:{
        increment: (state) =>{
            state.var +=1
        },
        decrement: (state)=>{
            state.var -=1
        },
        incrementByAmount: (state,action) =>{
            state.var +=action.payload
        },
    },
})

export const {increment,decrement,incrementByAmount} = counterSlice.actions

export default counterSlice.reducer