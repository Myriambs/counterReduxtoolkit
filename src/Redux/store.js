import { configureStore } from "@reduxjs/toolkit";

import counterslice from "./counterslice";
export default configureStore({
    reducer:{
        counter:counterslice
    }
})