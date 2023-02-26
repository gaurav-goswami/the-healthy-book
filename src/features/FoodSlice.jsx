import { createSlice } from "@reduxjs/toolkit";

export const FoodSlice = createSlice({
    name : 'category',
    initialState :
        {
            categoryName : '',
            search : '',
            // currentItem : ''
        },
        
    reducers : {
        selectCategory : (state, action) => {
            state.categoryName = action.payload.categoryName;
        },

        searchAction : (state , action) => {
            state.search = action.payload;
        },
    }
})

export const {selectCategory, searchAction, selectItem} = FoodSlice.actions;

export default FoodSlice.reducer;