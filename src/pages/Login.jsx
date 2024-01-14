import React from "react";

const Login = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-12 d-flex align-items-center justify-content-center bg-light"
          style={{ width: "100vw", height: "100vh" }}
        >
          <div className="w-25 p-5 text-center bg-white rounded">
            <h1>Masuk ke akun anda</h1>
            <p className="py-5">
              Kami tidak akan posting atas nama Anda atau membagikan informasi
              apapun tanpa persetujuan Anda.{" "}
            </p>
            <form>
              <div className="form-group text-start">
                <label
                  htmlFor="exampleInputEmail1"
                  className="text-secondary font-bold"
                >
                  Email address
                </label>
                <input
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
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <p className="text-start">
                <u>belum ada akun ?</u>
              </p>
              <button type="submit" className="btn btn-dark w-100 p-4">
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
