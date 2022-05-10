import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../Common/Common";


// get all peroduct data on api
export const fetchAllProducts = createAsyncThunk("fetch/products", async () => {
    const { data } = await axios.get(`${BASE_URL}products/`)
    return data;
})
// get single product
export const fetchSingleProduct = createAsyncThunk("fetch/single/product", async (id) => {
    const { data } = await axios.get(`${BASE_URL}products/${id}`)
    return data
})

// change category of product 
export const editCategory = createAsyncThunk("edit/category", async (category) => {
    return category;
})

// post product data on api
export const postPorudct = createAsyncThunk("post/product", async (product) => {
    await axios.post(`${BASE_URL}products`, {
        name: product.name,
        description: product.description,
        avatar: product.avatar,
        category: product.category,
        price: product.price,
        developerEmail: "b.baybas@gmail.com"

    })
})


const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        singleProduct: {},
        isLoading: false,
        singleIsLoading: false,
        error: null,
        singlePageError: null,
        category: "All",
    },




    extraReducers: {
        // fetching data
        [fetchAllProducts.fulfilled]: (state, action) => {
            state.products = action.payload;
            state.isLoading = false;
        },
        [fetchAllProducts.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchAllProducts.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },
        // change category
        [editCategory.fulfilled]: (state, action) => {
            state.category = action.payload;
        },

        // fetching single product
        [fetchSingleProduct.fulfilled]: (state, action) => {
            state.singleProduct = action.payload;
            state.singleIsLoading = false;
        },
        [fetchSingleProduct.pending]: (state) => {
            state.singleIsLoading = true;
        },
        [fetchSingleProduct.rejected]: (state, action) => {
            state.singleIsLoading = false;
            state.singlePageError = action.error.message;
        }
    }

})

export const singlePageLoading = (state) => state.product.singleIsLoading;
export const loadingSelect = (state) => state.product.isLoading;
export const singleProduct = (state) => state.product.singleProduct;

export const selectProduct = (state) => {
    // category is All or empty filter all products
    if (state.product.category === "All" || "") {
        return state.product.products
        // filter products by category    
    } else {
        return state.product.products.filter(product => product.category === state.product.category)
    }

}
export default productSlice.reducer;