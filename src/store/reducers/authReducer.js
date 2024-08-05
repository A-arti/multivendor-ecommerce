import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api"; // Importing the api instance

const initialState = {
    successMessage: '',
    errorMessage: '',
    loader: false,
    userInfo: '',
}

// Async action for admin login
export const admin_login = createAsyncThunk(
    'auth/admin_login',
    async (info, { rejectWithValue }) => {
        try {
            // Using the api instance to make the login request
            const { data } = await api.post('/admin/login', info);
            return data;
        } catch (error) {
            // Handling errors and rejecting the promise with error response data
            return rejectWithValue(error.response.data);
        }
    }
);

const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        messageClear: (state) => {
            state.errorMessage = "";
            state.successMessage = "";
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(admin_login.pending, (state) => {
                state.loader = true;
            })
            .addCase(admin_login.rejected, (state, { payload }) => {
                state.loader = false;
                state.errorMessage = payload.error;
            })
            .addCase(admin_login.fulfilled, (state, { payload }) => {
                state.loader = false;
                state.successMessage = payload.message;
                state.userInfo = payload.token; // Assuming token is the userInfo for this example
            });
    }
});

export const { messageClear } = authReducer.actions;
export default authReducer.reducer;
