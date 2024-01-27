import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cart: {},
  isError: false,
  message: false,
  isLoading: false,
};

export const postCart = createAsyncThunk(
  "cart/addCart",
  async (id, thunkApi) => {
    try {
      await axios.post(
        `http://localhost:8080/api/v1/orderItem/${id}`,
        null, // pass data as null if not sending a request body
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return thunkApi.dispatch(getCarts());
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(
        error.response ? error.response.data.message : "Unknown error"
      );
    }
  }
);

export const updateOrderCart = createAsyncThunk(
  "cart/updateCart",
  async (payload, thunkApi) => {
    try {
      const { id, qty } = payload;
      await axios.patch(
        `http://localhost:8080/api/v1/orderItem/${id}`,
        { quantity: qty },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return thunkApi.dispatch(getCarts());
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(
        error.response ? error.response.data.message : "Unknown error"
      );
    }
  }
);

export const getCarts = createAsyncThunk(
  "cart/getCart",
  async (_, thunkApi) => {
    try {
      const resp = await axios.get(`http://localhost:8080/api/v1/orderItem`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await resp.data;
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteCart = createAsyncThunk(
  "cart/deleteCart",
  async (id, thunkApi) => {
    try {
      const resp = await axios.delete(
        `http://localhost:8080/api/v1/orderItem/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      await resp.data;
      return thunkApi.dispatch(getCarts());
    } catch (error) {
      thunkApi.rejectWithValue(error.response.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(postCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cart = action.payload;
      })
      .addCase(postCart.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload.message;
        state.cart = [];
      })
      .addCase(getCarts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCarts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cart = action.payload;
      })
      .addCase(getCarts.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload.message;
        state.cart = [];
      })
      .addCase(deleteCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cart = action.payload;
      })
      .addCase(deleteCart.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload.message;
        state.cart = [];
      })
      .addCase(updateOrderCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateOrderCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cart = action.payload;
      })
      .addCase(updateOrderCart.rejected, (state, action) => {
        state.isError = true;
        state.message = action.message;
        state.cart = [];
      });
  },
});

export default cartSlice.reducer;
