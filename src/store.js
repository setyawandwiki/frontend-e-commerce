import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import productReducer from "./features/product/productSlice";
import cartReducer from "./features/cart/cartSlice";
import wishlistReducer from "./features/wishList/wishListSlice";
import categoryReducer from "./features/category/category";

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    category: categoryReducer,
  },
});
