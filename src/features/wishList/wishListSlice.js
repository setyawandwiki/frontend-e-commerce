import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  wishlist: {},
  wishlistDetail: {},
  isLoading: false,
  isError: false,
  message: "",
};

export const addWishlist = createAsyncThunk(
  "wishList/add",
  async (id, thunkApi) => {
    try {
      console.log(id);
      const resp = await axios.post(
        `http://localhost:8080/api/v1/wishlist/${id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      await resp.data;
      return thunkApi.dispatch(getAllWishlist());
    } catch (error) {
      thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const getWishlistById = createAsyncThunk(
  "wishList/getWishlistById",
  async (id, thunkApi) => {
    try {
      const resp = await axios.get(
        `http://localhost:8080/api/v1/wishlist/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await resp.data;
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteWishList = createAsyncThunk(
  "wishList/delete",
  async (id, thunkApi) => {
    try {
      const resp = await axios.delete(
        `http://localhost:8080/api/v1/wishlist/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      await resp.data;
      return thunkApi.dispatch(getAllWishlist());
    } catch (error) {
      thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const getAllWishlist = createAsyncThunk(
  "wishList/getAllWishlist",
  async (_, thunkApi) => {
    try {
      const resp = await axios.get(`http://localhost:8080/api/v1/wishlist`, {
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

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllWishlist.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getAllWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.wishlist = action.payload;
        state.isError = false;
      })
      .addCase(getAllWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.wishlist = action.payload;
        state.isError = true;
      })
      .addCase(addWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.wishlist = action.payload;
        state.wishlist = action.payload;
        state.isError = false;
      })
      .addCase(addWishlist.rejected, (state, action) => {
        (state.isError = true),
          (state.isLoading = false),
          (state.message = action.payload);
      })
      .addCase(deleteWishList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteWishList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.wishlist = action.payload;
        state.isError = false;
      })
      .addCase(deleteWishList.rejected, (state, action) => {
        (state.isError = true),
          (state.isLoading = false),
          (state.message = action.payload);
      })
      .addCase(getWishlistById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWishlistById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.wishlistDetail = action.payload;
        state.isError = false;
      })
      .addCase(getWishlistById.rejected, (state, action) => {
        (state.isError = true),
          (state.isLoading = false),
          (state.message = action.payload);
      });
  },
});

export default wishListSlice.reducer;
