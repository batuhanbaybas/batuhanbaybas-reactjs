import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./features/categorySlice";
import productSlice from "./features/productSlice";

const store = configureStore({
    reducer: {
        product: productSlice,
        category: categorySlice,
    },
})


export default store;