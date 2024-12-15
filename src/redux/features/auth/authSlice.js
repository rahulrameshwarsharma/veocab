import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI, logoutAPI } from "./authAPI";

const initialState = {
  user: null,
  isAuthenticated: false,
  status: "idle", 
  error: null,
};

// Login Action
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      return await loginAPI(credentials);
    } catch (error) {
      // Handle specific status codes
      if (error.response) {
        const { status, data } = error.response;
        if (status === 401) {
          return rejectWithValue("Invalid credentials. Please try again.");
        } else if (status === 403) {
          return rejectWithValue("Access forbidden. Contact support.");
        } else if (status === 404) {
          return rejectWithValue("Server not found. Please try later.");
        }
      }
      return rejectWithValue("An unknown error occurred.");
    }
  }
);

// Logout Action
export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      return await logoutAPI();
    } catch (error) {
      return rejectWithValue("Logout failed. Please try again.");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login cases
      .addCase(login.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Login failed.";
      })
      // Logout cases
      .addCase(logout.fulfilled, (state) => {
        state.status = "succeeded";
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Logout failed.";
      });
  },
});

export const { resetError } = authSlice.actions;

export default authSlice.reducer;
