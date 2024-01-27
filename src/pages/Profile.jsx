import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { getUserProfile } from "../features/user/userSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [active, setActive] = useState("profile");
  const handleClick = (param) => {
    setActive(param);
  };

  useEffect(() => {
    dispatch(getUserProfile());
  }, []);

  return (
    <div className="container w-75 mt-5">
      <div className="row">
        <div className="col-3">
          <h5 className="font-bold">AKUN SAYA</h5>
          <nav id="sidebar" className="bg-white profile-sidebar-nav">
            <ul className="list-unstyled components">
              <li
                onClick={() => handleClick("profile")}
                className={active === "profile" ? "active" : null}
                style={{ cursor: "pointer" }}
              >
                <Link
                  href="#homeSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                >
                  Akun saya
                </Link>
              </li>
              <li
                onClick={() => handleClick("wallet")}
                className={active === "wallet" ? "active" : null}
              >
                <Link to="wallet">Wallet</Link>
              </li>
              <li
                onClick={() => handleClick("wishlist")}
                className={active === "wishlist" ? "active" : null}
              >
                <Link
                  to="../wishlist"
                  href="#pageSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                >
                  Wishlist
                </Link>
              </li>
              {user?.user?.data?.role === "SELLER" ? (
                <li
                  onClick={() => handleClick("product")}
                  className={active === "product" ? "active" : null}
                >
                  <Link
                    to="product"
                    href="#pageSubmenu"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    Product
                  </Link>
                </li>
              ) : null}
              <li
                onClick={() => handleClick("history")}
                className={active === "history" ? "active" : null}
              >
                <Link to="history">History</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
