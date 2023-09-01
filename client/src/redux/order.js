import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const pushOrder = createAsyncThunk("order/pushOrder", async (param) => {
    const data = await axios.post("http://localhost:4444/cart", param);
    return data;
})

const initialState = {
    order: []
}

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addToOrder(state, action){
            console.log(action)
            state.order.push(action.payload);
        },
        deleteOrderItem(state, action){
            console.log(action)
            state.order = state.order.filter((order) => order.title !== action.payload);
        },
        updateOrder(state, action){
            console.log(action)
            const i = state.order.findIndex((order) => order.title === action.payload.title);
            console.log(i)
            state.order[i].quantity = action.payload.quantity;
        },
        deleteOrder(state){
            state.order = []
        }
    }
})

export const {addToOrder, deleteOrderItem, updateOrder, deleteOrder} = orderSlice.actions;
export const orderReducer =  orderSlice.reducer

