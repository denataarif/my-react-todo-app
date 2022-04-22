import { configureStore } from "@reduxjs/toolkit";
import carCardSlice from "./carCardSlice";

const store = configureStore({
    reducer:{
        carCardSlice: carCardSlice.reducer,
    }
})

export default store