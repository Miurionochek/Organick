import { configureStore } from "@reduxjs/toolkit";
import { cardReducer } from "./cards";
import { orderReducer } from "./order";
const store = configureStore({
    reducer: {
        cards: cardReducer,
        order: orderReducer
    },
});

export default store;