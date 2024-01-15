import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  const [active, setActive] = useState("profile");
  const handleClick = (param) => {
    setActive(param);
  };
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
