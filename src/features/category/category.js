import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  category: {},
  isError: false,
  message: false,
  isLoading: false,
};

export const postCategory = createAsyncThunk(
  "category/addCategory",
  async (data, thunkApi) => {
    try {
      await axios.post(
        `http://localhost:8080/api/v1/category`,
        { name: data.name },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return thunkApi.dispatch(getAllCategories());
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(
        error.response ? error.response.data.message : "Unknown error"
      );
    }
  }
);

export const updateCategory = createAsyncThunk(
  "category/updateCategory",
  async (payload, thunkApi) => {
    try {
      const { id, name } = payload;
      await axios.patch(
        `http://localhost:8080/api/v1/category/${id}`,
        { name },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return thunkApi.dispatch(getAllCategories());
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(
        error.response ? error.response.data.message : "Unknown error"
      );
    }
  }
);

export const getCategory = createAsyncThunk(
  "category/getCategory",
  async (id, thunkApi) => {
    try {
      const resp = await axios.get(
        `http://localhost:8080/api/v1/category/${id}`,
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

export const getAllCategories = createAsyncThunk(
  "category/getAllCategory",
  async (_, thunkApi) => {
    try {
      const resp = await axios.get(`http://localhost:8080/api/v1/category`);
      const data = await resp.data;
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteCategory = createAsyncThunk(
  "category/deleteCategory",
  async (id, thunkApi) => {
    try {
      const resp = await axios.delete(
        `http://localhost:8080/api/v1/category/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      await resp.data;
      return thunkApi.dispatch(getAllCategories());
    } catch (error) {
      thunkApi.rejectWithValue(error.response.message);
    }
  }
);

const categorySlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(postCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.category = action.payload;
      })
      .addCase(postCategory.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload.message;
        state.category = [];
      })
      .addCase(getCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.category = action.payload;
      })
      .addCase(getCategory.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload.message;
        state.category = [];
      })
      .addCase(deleteCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.category = action.payload;
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload.message;
        state.category = [];
      })
      .addCase(updateCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.category = action.payload;
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.isError = true;
        state.message = action.message;
        state.category = [];
      })
      .addCase(getAllCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.category = action.payload;
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.isError = true;
        state.message = action.message;
        state.category = [];
      });
  },
});

export default categorySlice.reducer;
