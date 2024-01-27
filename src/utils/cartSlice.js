import {createSlice} from '@reduxjs/toolkit'

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
      addItem:(state,action)=>{
        state.items.push(action.payload)
      },
      removeItem:(state,action)=>{
       for (let index = 0; index < state.items.length; index++) {
        const element = state.items[index];
        if(element.info.id==action.payload.id){
          state.items.splice(index,1)
        }
       }
      },
      emptyCart:(state)=>{
        state.items=[]
      },
    },
});

export const {addItem,removeItem,emptyCart} = cartSlice.actions;

export default cartSlice.reducer;