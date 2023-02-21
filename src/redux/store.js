import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import listsSlice from './listsSlice';

const store = configureStore({
    reducer: {
        counter: counterSlice,
        lists: listsSlice
    }
})

export default store;
