import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../../features/product/productSlice";

const Homepage = () => {
  const { isLoading, isError, message, product } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();

  const getAllProducts = async () => {
    try {
      const data = await dispatch(getProducts());
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <div className="container w-50">
        <ul className="d-flex mt-5 justify-content-center homepage-category">
          <li className="text-center">
            <Link
              to="/category/:category"
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
              }}
            >
              <img
                className="w-75"
                src="https://images.ctfassets.net/9q8du028z7sn/5OYBQ0eYtaMeO2iOS3q5yD/1bec483251a8cc4db5d56080d2655706/2024-CW01-Women-Bubblecat-w01bbcwcatdress-1-dsk.jpg"
              />
              <p>Dress</p>
            </Link>
          </li>
          <li className="text-center">
            <Link
              to="/category/:category"
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
              }}
            >
              <img
                className="w-75"
                src="https://images.ctfassets.net/9q8du028z7sn/1GU2kJDruI3TiHEJHeBQah/6194e431bed34f826b8d5ae7b98d5076/2024-CW01-Women-Bubblecat-w01bbcwcatheelswedges-2-dsk.jpg"
              />
              <p>Heels & Wedges</p>
            </Link>
          </li>
          <li className="text-center">
            <Link
              to="/category/:category"
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
              }}
            >
              <img
                className="w-75"
                src="https://images.ctfassets.net/9q8du028z7sn/1GUj59tlcIFekRx8g3YSuN/f4f45fd2c455fce449116e278c52c77a/2024-CW01-Women-Bubblecat-w01bbcwcatsports-3-dsk.jpg"
              />
              <p>Sports</p>
            </Link>
          </li>
          <li className="text-center">
            <Link
              to="/category/:category"
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
              }}
            >
              <img
                className="w-75"
                src="https://images.ctfassets.net/9q8du028z7sn/3hQZE2Apyip8KgG9ABeItz/1fb381bdf2f0860856626702a5d3138e/2024-CW01-Women-Bubblecat-bbcclearancesale-6-dsk.jpg"
              />
              <p>Clearance Sale</p>
            </Link>
          </li>
          <li className="text-center">
            <Link
              to="/category/:category"
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
              }}
            >
              <img
                className="w-75"
                src="https://images.ctfassets.net/9q8du028z7sn/65G2WfdONa1dqiB93a7VWI/4883f8a0951710b3f28ccb20671fd6d3/2024-CW01-Women-Bubblecat-w01bbcwcatfashionbags-4-dsk.jpg"
              />
              <p>Fashion Baqs</p>
            </Link>
          </li>
          <li className="text-center">
            <Link
              to="/category/:category"
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
              }}
            >
              <img
                className="w-75"
                src="https://images.ctfassets.net/9q8du028z7sn/6JWNMAnGLg8X9itiA6ckJs/149e405f8e4a423102646e773b3c57bc/225X225_CIP__1_.gif"
              />
              <p>Dapatkan komisimu</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="container w-75">
        <div className="row">
          <div className="col-12 text-center">
            <img
              src="https://images.ctfassets.net/9q8du028z7sn/3ay3PTaT2J37K816JWkqrX/77a86abf98afbbbe74fe5d3ebb50c7b7/2024-CW01-Women-Hero-w01hfs14lp-1__07_Jan_10_00_AM_-_07_Jan_10_00_PM_-dsk.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-12 text-center mt-5">
            <h2 className="font-bold">Emang Bisa Gratis Ongkir di ZALORA ?</h2>
            <p className="font-lightBold">
              Bisa dong! Cek selengkapnya disini ya!
            </p>
          </div>
          <div className="col-12 text-center mt-5">
            <img
              src="https://images.ctfassets.net/9q8du028z7sn/1LVj4w2Y5Kmh9BR80lLaGN/fc5363120db577492dd7e7d1ce43edf8/1920x480_ZVIP_APPSECONDARY_NEWPRICING.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="container w-75 mt-5">
        <div className="row">
          <div className="col-12 text-center">
            <h4 className="font-bold">Kamu Mungkin Suka Produk Ini</h4>
          </div>
        </div>
      </div>
      <div className="container w-75 mt-5">
        <div className="row">
          {product?.data?.slice(0, 4).map((elem) => {
            return (
              <Link
                key={elem.id}
                to={`product/${elem.id}`}
                className="col-3"
                style={{ cursor: "pointer" }}
              >
                <div className="card w-100 h-100 border-0">
                  <img
                    src={
                      elem.image1
                        ? `http://localhost:8080/api/v1/product/images/${elem.image1}`
                        : "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
                    }
                    className="card-img-top homepage-card-img-responsive"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="text-5 my-0 font-bold">
                      {elem.title ? elem.title : "no title"}
                    </p>
                    <span className="text-secondary card-text">
                      {elem.name ? elem.name : "no name"}
                    </span>
                    <p className="text-secondary card-text text-danger font-bold">
                      Rp. {elem.price}
                    </p>
                    <button
                      type="button"
                      className="btn w-100 border border-1 rounded-3 py-3"
                    >
                      Masukkan ke tas
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Homepage;
