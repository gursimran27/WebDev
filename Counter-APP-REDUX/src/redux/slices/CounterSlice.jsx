import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:0
}


// the argument of createSlice is an object with 3 parameters
export const CounterSlice=createSlice(
    {
        name:"counter",
        initialState,
        reducers:{  //functionality
              increment: (state)=>{
                 state.value+=1;
            },
             decrement: (state)=>{
                state.value-=1;
            }
        }
    }
);



// destructuring
//* Action creators are generated for each case reducer function 
export const {increment , decrement} = CounterSlice.actions; //it is syntax only
// action is used to fetch the implementation of reducers/functionlaty from a Slice




export default CounterSlice.reducer;