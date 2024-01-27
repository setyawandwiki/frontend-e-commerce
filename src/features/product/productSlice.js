import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  product: [],
  productDetail: {},
  isError: false,
  isLoading: false,
  message: "",
};

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get(
        "http://localhost:8080/api/v1/product?sort=desc"
      );
      const data = await resp.data;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const getProductSeller = createAsyncThunk(
  "product/getProductsSeller",
  async (paging = 0, thunkAPI) => {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Token not found in local storage");
    }
    try {
      const resp = await axios.get(
        `http://localhost:8080/api/v1/product/seller?size=5&paging=${paging}`,
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
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const updateProductSeller = createAsyncThunk(
  "product/updateProduct",
  async (formData, thunkAPI) => {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Token not found in local storage");
    }

    try {
      await axios.patch(
        `http://localhost:8080/api/v1/product/${formData.get("id")}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return thunkAPI.dispatch(getProductDetail(formData.get("id")));
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const addProductSeller = createAsyncThunk(
  "product/addProduct",
  async (formData, thunkAPI) => {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Token not found in local storage");
    }

    try {
      const data1 = await axios.post(
        `http://localhost:8080/api/v1/product`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data1);
      return data1;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id, thunkAPI) => {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Token not found in local storage");
    }

    try {
      await axios.delete(`http://localhost:8080/api/v1/product/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return thunkAPI.dispatch(getProductSeller());
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getProductByQuery = createAsyncThunk(
  "product/getProductCategory",
  async (payload, thunkAPI) => {
    const { category = "", sort = "asc", selected = 0 } = payload;
    try {
      const resp = await axios.get(
        `http://localhost:8080/api/v1/product?category=${category}&sort=${sort}&size=5&paging=${selected}`
      );
      const data = await resp.data;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getProductDetail = createAsyncThunk(
  "product/getProductDetail",
  async (id, thunkAPI) => {
    try {
      const resp = await axios.get(
        `http://localhost:8080/api/v1/product/${id}`
      );
      const data = await resp.data;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
        state.isError = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
        state.isError = true;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
        state.isError = false;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
        state.isError = true;
      })
      .addCase(addProductSeller.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(addProductSeller.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
        state.isError = false;
      })
      .addCase(addProductSeller.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
        state.isError = true;
      })
      .addCase(getProductDetail.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getProductDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productDetail = action.payload;
        state.isError = false;
      })
      .addCase(getProductDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.productDetail = action.payload;
        state.isError = true;
      })
      .addCase(updateProductSeller.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(updateProductSeller.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productDetail = action.payload;
        state.isError = false;
      })
      .addCase(updateProductSeller.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getProductByQuery.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getProductByQuery.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
        state.isError = false;
      })
      .addCase(getProductByQuery.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getProductSeller.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getProductSeller.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
        state.isError = false;
      })
      .addCase(getProductSeller.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default productSlice.reducer;
