import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile, login } from "../features/user/userSlice";
import { CloseOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [token, setToken] = useState(localStorage.getItem("token") || "asd");

  const navigate = useNavigate();

  const handleFormChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { user, isLoading, message, isError } = useSelector(
    (store) => store.user
  );

  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const loginResponse = await dispatch(login({ form, token }));
      if (loginResponse.payload) {
        await dispatch(getUserProfile());
        navigate("/");
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-12 d-flex align-items-center justify-content-center bg-light"
          style={{ width: "100vw", height: "100vh" }}
        >
          <div className="w-25 p-5 text-center bg-white rounded">
            <h1>Masuk ke akun anda</h1>
            <p className="py-3">
              Kami tidak akan posting atas nama Anda atau membagikan informasi
              apapun tanpa persetujuan Anda.{" "}
            </p>
            {isError ? (
              <>
                <CloseOutlined className="border rounded-circle p-2 bg-danger text-white" />
                <p className="text-danger">Incorrect email and password</p>
              </>
            ) : (
              <></>
            )}
            <form onSubmit={handleLogin}>
              <div className="form-group text-start">
                <label
                  htmlFor="exampleInputEmail1"
                  className="text-secondary font-bold"
                >
                  Email address
                </label>
                <input
                  name="email"
                  disabled={isLoading ? true : false}
                  value={form.email}
                  onChange={handleFormChange}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group text-start">
                <label
                  htmlFor="exampleInputPassword1"
                  className="text-secondary font-bold"
                >
                  Password
                </label>
                <input
                  disabled={isLoading ? true : false}
                  name="password"
                  value={form.password}
                  onChange={handleFormChange}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <p className="text-start">
                <u>belum ada akun ?</u>
              </p>
              <button
                disabled={isLoading ? true : false}
                type="submit"
                className="btn btn-dark w-100 p-4"
              >
                Masuk
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
