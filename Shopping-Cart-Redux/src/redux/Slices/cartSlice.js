import { createSlice } from "@reduxjs/toolkit";


export const cartSlice=createSlice(
    {
        name:"cart",
        initialState:[], //empty array of objects
        reducers:{ //key value functionality
            add:( state , action)=> {
                state.push(action.payload);
                // action.payload mean the input parameter that is passed in the funtion while calling
                // here action payload refers to POST that is passed 
            },
            remove:( state , action)=>{
                return state.filter( (post)=>{
                    return post.id!==action.payload
                })
            }
        }
    }
);

export const{add, remove}=cartSlice.actions;
export default cartSlice.reducer;