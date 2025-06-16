import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
    status: false,
    loading: true,
    data: []
};
// Async thunk to fetch water details
export const fetchWaterDetails = createAsyncThunk(
    "water/add",
    async (data) => {
        console.log(data);
        const response = await fetch("http://localhost:9878/WaterApplication-backend/api/water/add", {
            method: "POST",
            body: JSON.stringify({"userQty":data.finalQty,"oneDayQty":data.target}),
            headers: {
                'Content-Type': "application/json"
            },
            credentials: 'include'
        });
        return await response.json();
    }
);
export const fetchWaterStatus=createAsyncThunk(
    "fetch status",
    async()=>{
        let response=await fetch("http://localhost:9878/WaterApplication-backend/api/water/status",{
            method:"GET",
            credentials: 'include'
        })
         return await response.json();
    }
)
export const fetchWaterHistory=createAsyncThunk(
    "fetch history",
    async()=>{
        let response=await fetch("http://localhost:9878/WaterApplication-backend/api/water/history",{
            method:"GET",
            credentials: 'include'
        })
         return await response.json();
    }
)

const addSlice = createSlice({
    name: "water",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchWaterDetails.pending, (state, action) => {
                console.log("Pending state");
                state.loading = true;
            })
            .addCase(fetchWaterDetails.fulfilled, (state, action) => {
                console.log("Fulfilled");
                state.loading = false;
                state.data = action.payload;
                state.status = true;
            })
            .addCase(fetchWaterDetails.rejected, (state, action) => {
                console.log("Rejected");
                state.loading = false;
                state.status = false;
            }).addCase(fetchWaterStatus.pending, (state, action) => {
                console.log("Pending state");
                state.loading = true;
            })
            .addCase(fetchWaterStatus.fulfilled, (state, action) => {
                console.log("Fulfilled");
                state.loading = false;
                state.data = action.payload;
                state.status = true;
            })
            .addCase(fetchWaterStatus.rejected, (state, action) => {
                console.log("Rejected");
                state.loading = false;
                state.status = false;
            }).addCase(fetchWaterHistory.pending, (state, action) => {
                console.log("Pending state");
                state.loading = true;
            })
            .addCase(fetchWaterHistory.fulfilled, (state, action) => {
                console.log("Fulfilled");
                state.loading = false;
                state.data = action.payload;
                state.status = true;
            })
            .addCase(fetchWaterHistory.rejected, (state, action) => {
                console.log("Rejected");
                state.loading = false;
                state.status = false;
            });
    }
});

export default addSlice.reducer;
