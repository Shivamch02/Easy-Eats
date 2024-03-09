import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartslice",
    initialState:{
        items: [],
        itemscount:0
    },
    reducers: {

        addItem: (state,action) =>{
            state.items.push(action.payload)
        },
        removeItem:(state,action) =>{
            const itemindex=state.items.findIndex((item) => item.id===action.payload.id);
            if(itemindex!=-1){
                state.items.splice(itemindex,1);
            }
        },
        clearItems:(state,action) =>{
            state.items=[]
        }
    }
});

export const {addItem, clearItems, removeItem} = cartSlice.actions;
export default cartSlice.reducer;