import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userLogIn, userSignUp } from "../../services/api";
const initialState = {
    isAuthenticated: false,
    isLoading: false,
    isError: false,
    errorMessage: '',
};

export const userSignUp = createAsyncThunk('auth/userSignUp',
    async (userData,
        { rejectWithValue }) => {
        try {
            const response = await
                userLogIn(userData);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    });

export const userLogIn = createAsyncThunk('auth/userLogIn',
    async (userData,
        { rejectWithValue }) => {
        try {
            const response = await
                userLogIn(userData);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    });
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        loginRequest(state) {
            state.isLoading = true;
            state.isError = false;
            state.errorMessage = '';
        },

        loginSuccess(state) {
            state.isAuthenticated = true;
            state.isLoading = false;
            state.isError = false;
            state.errorMessage = '';
        },

        loginFailure(state, action) {
            state.isLoading = false;
            state.isError = true;
            state.errorMessage = action.payload;
        },

        logout(state) {
            state.isAuthenticated = false;
        },
    },


    extraReducers: (builder) => {
        builder
            .addCase(userLogIn.pending,
                (state) => {
                    state.isLoading = true;
                    state.isError = false;
                    state.errorMessage = '';
                })
            .addCase(userLogIn.fulfilled, (state) => {
                state.isLoading = false;
                state.isAuthenticated = true;
            })
            .addCase(userLogIn.rejected,
                (state, action) => {
                    state.isLoading = false;
                    state.isError = true;
                    state.errorMessage = action.payload.errorMessage || 'Login failed';
                });

    }
});

export const {
    loginRequest,
    loginSuccess,
    loginFailure,
    logout,
} = authSlice.actions;


export default authSlice.reducer;