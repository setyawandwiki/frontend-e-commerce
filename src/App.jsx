import "./App.css";
import "./css/navbar.css";
import "./css/homepage.css";
import "./css/landingpage.css";
import "./css/pagination.css";
import "./css/product.css";
import "./css/cart.css";
import "./css/Profile.css";
import "./css/wishlist.css";

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
import { requireAuth } from "./requireAuth";
import EditProfile from "./pages/EditProfile";
import { sellerAuth } from "./sellerAuth";
import ProductSeller from "./pages/ProductSeller";
import EditPProductSeller from "./pages/EditPProductSeller";
import AddProduct from "./pages/AddProduct";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="category/:category" element={<Category />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route
          path="wishlist"
          element={<WishList />}
          loader={async () => {
            await requireAuth();
            return null;
          }}
        />
        <Route
          path="cart"
          element={<Cart />}
          loader={async () => {
            await requireAuth();
            return null;
          }}
        />
        <Route
          path="profile"
          element={
            <Profile
              loader={async () => {
                await requireAuth();
                return null;
              }}
            />
          }
        >
          <Route
            index
            loader={async () => {
              await requireAuth();
              return null;
            }}
            element={<ProfileDetail />}
          />
          <Route
            path="edit"
            loader={async () => {
              await requireAuth();
              return null;
            }}
            element={<EditProfile />}
          />
          <Route
            path="wallet"
            element={<Wallet />}
            loader={async () => {
              await requireAuth();
              return null;
            }}
          />
          <Route
            path="history"
            element={<History />}
            loader={async () => {
              await requireAuth();
              return null;
            }}
          />
          <Route
            path="product"
            loader={async () => {
              await sellerAuth();
              return null;
            }}
          >
            <Route
              index
              element={<ProductSeller />}
              loader={async () => {
                await sellerAuth();
                return null;
              }}
            />
            <Route
              path="edit/:id"
              element={<EditPProductSeller />}
              loader={async () => {
                await sellerAuth();
                return null;
              }}
            />
            <Route
              path="add"
              element={<AddProduct />}
              loader={async () => {
                await sellerAuth();
                return null;
              }}
            />
          </Route>
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
