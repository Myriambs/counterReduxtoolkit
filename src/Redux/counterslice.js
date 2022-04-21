import { createSlice } from "@reduxjs/toolkit";

export const counterslice=createSlice({
    name:'counter',
    initialState:{
        counter:10
    },
    reducers:{
increment:(state,action)=>{
state.counter +=1
},
decrement:(state,action)=>{
    state.counter -= 1
},
reset:(state,action)=>{
state.counter = 0 
}
    }
});

export const {increment,decrement,reset} =counterslice.actions;
export default counterslice.reducer
