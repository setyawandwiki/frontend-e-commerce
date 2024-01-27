import {
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserProfile } from "../../features/user/userSlice";
import { getProducts } from "../../features/product/productSlice";
import { getAllCategories } from "../../features/category/category";
import { getCarts } from "../../features/cart/cartSlice";
import { getAllWishlist } from "../../features/wishList/wishListSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user, isError, message, isLoading } = useSelector(
    (store) => store.user
  );

  const category = useSelector((state) => state.category);
  const wishlist = useSelector((state) => state.wishlist);
  const cart = useSelector((state) => state.cart);

  const getUser = async () => {
    const data = await dispatch(getUserProfile());
    return data;
  };

  const getAllCategoryHandler = async () => {
    try {
      return await dispatch(getAllCategories());
    } catch (error) {
      console.log(error);
    }
  };

  const wishlistHandler = async () => {
    try {
      return await dispatch(getAllWishlist());
    } catch (error) {
      console.log(error);
    }
  };

  const cartsHandler = async () => {
    try {
      return await dispatch(getCarts());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
    getAllCategoryHandler();
    cartsHandler();
    wishlistHandler();
  }, []);

  return (
    <div className="sticky-top">
      <nav className="bg-white w-100 navbar navbar-expand-lg pb-0 d-flex justify-content-around layout-navbar-left">
        <div className="container layout-navbar-menus d-flex justify-space-between">
          <Link
            to="/"
            className="navbar-brand fs-1"
            href="#"
            onClick={() => dispatch(getProducts())}
          >
            ZALORI
          </Link>
          <form
            className="d-flex my-3 justify-content-start navbar-search-margin-left w-50"
            role="search"
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              <SearchOutlined />
            </button>
          </form>
          <div className="navbar-menu-container">
            <div
              className="fs-4 navbar-menu-container"
              style={{ textDecoration: "underline" }}
            >
              <Link
                to="profile"
                style={{ textDecoration: "none", color: "black" }}
              >
                <UserOutlined className="underlined-icon" />
              </Link>
            </div>
            {user?.data?.firstName ? (
              <span className="">Hi, {user?.data?.firstName}</span>
            ) : (
              <span className="">Masuk / Daftar</span>
            )}

            <Link
              to="/wishlist"
              style={{
                textDecoration: "none",
                color: "black",
                position: "relative",
              }}
              className="fs-4 navbar-menu-container"
            >
              {wishlist?.wishlist?.data?.length ? (
                <span
                  style={{
                    position: "absolute",
                    borderRadius: "50%",
                    height: "15px",
                    width: "15px",
                    backgroundColor: "red",
                    display: "flex",
                    justifyContent: "center",
                    top: -5,
                    right: -5,
                    alignItems: "center",
                  }}
                  className="border"
                >
                  <p
                    className="text-white"
                    style={{ fontSize: "0.8rem", margin: 0, padding: 0 }}
                  >
                    {wishlist?.wishlist?.data?.length}
                  </p>
                </span>
              ) : (
                <></>
              )}
              <HeartOutlined />
            </Link>
            <Link
              to="/cart"
              style={{
                textDecoration: "none",
                color: "black",
                position: "relative",
              }}
              className="fs-4 navbar-menu-container"
            >
              {cart?.cart?.data?.length ? (
                <span
                  style={{
                    position: "absolute",
                    borderRadius: "50%",
                    height: "15px",
                    width: "15px",
                    backgroundColor: "red",
                    display: "flex",
                    justifyContent: "center",
                    top: -5,
                    right: -5,
                    alignItems: "center",
                  }}
                  className="border"
                >
                  <p
                    className="text-white"
                    style={{ fontSize: "0.8rem", margin: 0, padding: 0 }}
                  >
                    {cart?.cart?.data?.length}
                  </p>
                </span>
              ) : (
                <></>
              )}
              <ShoppingCartOutlined />
            </Link>
          </div>
        </div>
      </nav>
      <nav className="w-100 bg-white border-bottom border-3 navbar navbar-expand-lg pt-0 layout-navbar-left">
        <div className="container layout-navbar-menus">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav w-50 d-flex justify-content-start">
              {category?.category?.data?.map((elem) => {
                return (
                  <Link
                    to={`category/${elem.name}`}
                    key={elem.id}
                    className="button-margin-right nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    {elem.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
