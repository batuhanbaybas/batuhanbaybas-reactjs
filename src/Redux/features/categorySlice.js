import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../Common/Common";


export const fetchCategories = createAsyncThunk("fetch/categories", async () => {
    const { data } = await axios.get(`${BASE_URL}categories/`)
    return data;
})



const categorySlice = createSlice({
    name: "category",
    initialState: {
        categories: null,
        isLoading: false,
        error: null,
    },

    extraReducers: {
        [fetchCategories.fulfilled]: (state, action) => {
            state.categories = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        [fetchCategories.pending]: (state) => {
            state.isLoading = true;

        },
        [fetchCategories.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        }
    }
})

export const selectCategory = (state) => state.category.categories;
export const selectIsLoading = (state) => state.category.isLoading;

export default categorySlice.reducer;