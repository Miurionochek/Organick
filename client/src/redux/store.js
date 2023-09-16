import { configureStore } from "@reduxjs/toolkit";
import { cardReducer } from "./cards";
import { orderReducer } from "./order";
import { testimonialsReducer } from "./testimonials";
const store = configureStore({
    reducer: {
        cards: cardReducer,
        order: orderReducer,
        testimonials: testimonialsReducer,
    },
});

export default store;