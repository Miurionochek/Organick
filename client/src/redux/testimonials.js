import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTestimonials = createAsyncThunk("testimonials/fetchTestimonials", async() => {
    const data = await axios.get("http://localhost:4444/testimonials");
    return data;
});

const initialState = {
    testimonials: {
        items: [],
        status: "loading",
    },
}

const testimonialsSlice = createSlice({
    name: "testimonials",
    initialState,
    reducer: {},
    extraReducers: {
        [fetchTestimonials.pending]: (state)=>{
            state.testimonials.status = "loading";
            state.testimonials.items = [];
        },
        [fetchTestimonials.fulfilled]: (state,action)=>{
            state.testimonials.status = "loaded";
            state.testimonials.items = action.payload.data;
        },
        [fetchTestimonials.rejected]: (state)=>{
            state.testimonials.status = "error";
            state.testimonials.items = [];
        },
    }
});

export const testimonialsReducer = testimonialsSlice.reducer;