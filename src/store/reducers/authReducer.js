import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

const initialState = {
    successMessage : '',
    errorMessage : '',
    loader : false,
    userInfo : '',
}
export const admin_login = createAsyncThunk(
    'auth/admin/login',
    async(info) => {
        try {
            const {data} = await api.post('/admin/login', info, {withCredentials : true});
            //console.log(data);
            return fulfillWithValue(data);
        } catch (error) {
            //console.log(error.response.data)
            return rejectWithValue(error.response.data);
        }
    }
);
const authReducer = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        messageClear : (state,_) => {
            state.errorMessage = ""
        }

    },
    extraReducers : (builder) => {
        builder
        .addCase(admin_login.pending, (state, { payload }) => {
            state.loader = true;
        })
        .addCase(admin_login.rejected, (state, { payload }) => {
            state.loader = false;
            state.errorMessage = payload.error
        })
        .addCase(admin_login.fulfilled, (state, { payload }) => {
            state.loader = false;
            state.successMessage = payload.message
        })


    }

})
export const {messageClear} = authReducer.actions
export default authReducer.reducer;  //export reducer