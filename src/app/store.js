import { configureStore } from "@reduxjs/toolkit";
import waterReducer from "../fetures/waterSlice" ;

const store = configureStore({
    reducer: {
        water: waterReducer
    }
});

export default store;
