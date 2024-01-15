import {
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky-top">
      <nav className="bg-white w-100 navbar navbar-expand-lg pb-0 d-flex justify-content-around layout-navbar-left">
        <div className="container layout-navbar-menus d-flex justify-space-between">
          <Link to="/" className="navbar-brand fs-1" href="#">
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
            <span className="">Masuk / Daftar</span>
            <Link
              to="/wishlist"
              style={{ textDecoration: "none", color: "black" }}
              className="fs-4 navbar-menu-container"
            >
              <HeartOutlined />
            </Link>
            <Link
              to="/cart"
              style={{ textDecoration: "none", color: "black" }}
              className="fs-4 navbar-menu-container"
            >
              <ShoppingCartOutlined />
            </Link>
          </div>
        </div>
      </nav>
      <nav className="w-100 bg-white border-bottom border-3 navbar navbar-expand-lg pt-0 layout-navbar-left">
        <div className="container layout-navbar-menus">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav w-50 d-flex justify-content-start">
              <a
                className="button-margin-right nav-link active"
                aria-current="page"
                href="#"
              >
                Home
              </a>
              <Link
                to="/category/:category"
                className="button-margin-right nav-link"
                href="#"
              >
                Features
              </Link>
              <Link
                to="/category/:category"
                className="button-margin-right nav-link"
                href="#"
              >
                Pricing
              </Link>
              <Link
                to="/category/:category"
                className=" nav-link disabled"
                aria-disabled="true"
              >
                Disabled
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
