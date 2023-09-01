import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCards = createAsyncThunk("cards/fetchCards", async() => {
    const data = await axios.get("http://localhost:4444/");
    return data;
});

const initialState = {
    cards: {
        items: [],
        status: "loading",
    },
}

const cardSlice = createSlice({
    name: "cards",
    initialState,
    reducer: {},
    extraReducers: {
        [fetchCards.pending]: (state)=>{
            state.cards.status = "loading";
            state.cards.items = [];
        },
        [fetchCards.fulfilled]: (state,action)=>{
            state.cards.status = "loaded";
            state.cards.items = action.payload.data;
        },
        [fetchCards.rejected]: (state)=>{
            state.cards.status = "error";
            state.cards.items = [];
        },
    }
});

export const cardReducer = cardSlice.reducer;