import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { redirect } from "react-router-dom";

const initialState = {
  user: {},
  isLoading: false,
  isError: false,
  message: "",
};

export const login = createAsyncThunk("user/login", async (data1, thunkAPI) => {
  try {
    const resp = await axios.post("http://localhost:8080/api/v1/auth/signin", {
      email: data1.form.email,
      password: data1.form.password,
    });

    const data = await resp.data;
    localStorage.setItem("token", data.token);

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue("incorrect email and password");
  }
});

export const updateUserProfile = createAsyncThunk(
  "user/updateUser",
  async (data1, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const resp = await axios.patch(
        "http://localhost:8080/api/v1/user/profile",
        {
          firstName: data1.firstName,
          gender: data1.gender,
          lastName: data1.lastName,
          birthDate: data1.birthDate,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await resp.data;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("incorrect email and password");
    }
  }
);

export const getUserProfile = createAsyncThunk(
  "user/getUserProfile",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found in local storage");
      }

      const resp = await axios.get(
        "http://localhost:8080/api/v1/user/profile",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await resp.data;
      localStorage.setItem("idUser", data.data.id);
      localStorage.setItem("role", data.data.role);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error fetching user profile");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isError = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isError = true;
      })
      .addCase(getUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isError = false;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        (state.isError = true),
          (state.isLoading = false),
          (state.message = action.payload);
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isError = false;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        (state.isError = true),
          (state.isLoading = false),
          (state.message = action.payload);
      });
  },
});

export default userSlice.reducer;
