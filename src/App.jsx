import "./App.css";
import "./css/navbar.css";
import "./css/homepage.css";
import "./css/landingpage.css";
import "./css/pagination.css";
import "./css/product.css";
import "./css/cart.css";
import "./css/Profile.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./component/layout/Layout";
import Homepage from "./component/homepage/Homepage";
import Category from "./component/category/Category";
import ProductDetail from "./pages/ProductDetail";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProfileDetail from "./pages/ProfileDetail";
import Wallet from "./pages/Wallet";
import History from "./pages/History";
import Register from "./pages/Register";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="category/:category" element={<Category />} />
        <Route path="product/:category/:id" element={<ProductDetail />} />
        <Route path="wishlist" element={<WishList />} />
        <Route path="cart" element={<Cart />} />
        <Route path="profile" element={<Profile />}>
          <Route index element={<ProfileDetail />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="history" element={<History />} />
        </Route>
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
