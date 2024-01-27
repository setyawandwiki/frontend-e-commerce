import {
  EyeOutlined,
  HeartFilled,
  HeartOutlined,
  PaperClipOutlined,
  StarFilled,
  TagsOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProductDetail } from "../features/product/productSlice";
import { getCarts, postCart } from "../features/cart/cartSlice";
import {
  addWishlist,
  deleteWishList,
  getAllWishlist,
  getWishlistById,
} from "../features/wishList/wishListSlice";

const ProductDetail = () => {
  const [info, setInfo] = useState("info");
  const { isLoading, isError, message, productDetail } = useSelector(
    (state) => state.product
  );

  const navigate = useNavigate();

  const wishlist = useSelector((state) => state.wishlist);

  const handleChange = (param) => {
    setInfo(param);
  };
  const dispatch = useDispatch();
  const { id } = useParams();
  const getProduct = async (param) => {
    try {
      const data = await dispatch(getProductDetail(param));
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const addWishlistHandler = async (id) => {
    try {
      await dispatch(addWishlist(id));
      await dispatch(getAllWishlist());
      await dispatch(getWishlistById(id));
      navigate("/wishlist");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteWishListHandler = async (id) => {
    try {
      await dispatch(deleteWishList(id));
      await dispatch(getAllWishlist());
      return await dispatch(getWishlistById(id));
    } catch (error) {
      console.log(error);
    }
  };

  const addCart = async (param) => {
    try {
      const data = await dispatch(postCart(param));
      await dispatch(getCarts());
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleCart = (param) => {
    addCart(param);
    dispatch(getCarts());
  };

  useEffect(() => {
    getProduct(id);
    dispatch(getAllWishlist());
    dispatch(getWishlistById(id));
  }, []);

  console.log(wishlist);

  return (
    <div className="container">
      <div className="row">
        <div className="col-7">
          <div className="row">
            <div className="col-6 pr-2  pt-5 pb-3">
              <img
                src={`http://localhost:8080/api/v1/product/images/${productDetail?.data?.image2}`}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-6 pr-2 pt-5 pb-3">
              <img
                src={`http://localhost:8080/api/v1/product/images/${productDetail?.data?.image3}`}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <img
                src={`http://localhost:8080/api/v1/product/images/${productDetail?.data?.image1}`}
                alt=""
                className="img-fluid product-img-small"
              />
            </div>
          </div>
        </div>
        <div className="col-5 pt-5">
          <h3 className="font-light">{productDetail?.data?.title}</h3>
          <p>{productDetail?.data?.title}</p>
          <span
            className="border px-2 w-25 d-flex align-items-center rounded border-danger font-bold text-danger"
            style={{ gap: "2px" }}
          >
            <TagsOutlined className="pt-1" />
            <span className="">Rp {productDetail?.data?.price}</span>
          </span>
          <h5 className="font-bold pt-3">Rp {productDetail?.data?.price}</h5>
          <h5 className="font-bold pt-3">Ukuran</h5>
          <p className="underlined-text">International</p>
          <ul
            className="d-flex justify-content-between w-75"
            style={{ paddingLeft: 0 }}
          >
            <li
              className="border py-1 px-3 rounded border-dark"
              style={{ cursor: "pointer" }}
            >
              S
            </li>
            <li
              className="border py-1 px-3 rounded border-dark"
              style={{ cursor: "pointer" }}
            >
              M
            </li>
            <li
              className="border py-1 px-3 rounded border-dark"
              style={{ cursor: "pointer" }}
            >
              L
            </li>
            <li
              className="border py-1 px-3 rounded border-dark"
              style={{ cursor: "pointer" }}
            >
              XL
            </li>
            <li
              className="border py-1 px-3 rounded border-dark"
              style={{ cursor: "pointer" }}
            >
              2XL
            </li>
            <li
              className="border py-1 px-3 rounded border-dark"
              style={{ cursor: "pointer" }}
            >
              3XL
            </li>
          </ul>
          <div className="row w-100">
            <div className="col-10">
              <Link
                onClick={() => handleCart(id)}
                to="/cart"
                type="button"
                className="btn btn-dark w-100 py-3"
              >
                Masukkan ke Tas
              </Link>
            </div>
            {wishlist?.wishlistDetail ? (
              <div
                onClick={() =>
                  deleteWishListHandler(wishlist?.wishlistDetail?.data?.id)
                }
                className="col-2 border-dark border d-flex align-items-center justify-content-center rounded"
                style={{ cursor: "pointer" }}
              >
                <HeartFilled className="fs-4 font-light text-danger" />
              </div>
            ) : (
              <div
                onClick={() => addWishlistHandler(productDetail?.data?.id)}
                className="col-2 border-dark border d-flex align-items-center justify-content-center rounded"
                style={{ cursor: "pointer" }}
              >
                <HeartOutlined className="fs-4 font-light text-secondary" />
              </div>
            )}
          </div>
          <div className="row mt-5 d-flex flex-row">
            <div className="col-6 px-0 border-0">
              <button
                onClick={() => handleChange("info")}
                className={`btn  btn-white text-center w-100 ${
                  info === "info"
                    ? "underlined-text-button"
                    : "underlined-text-button-second"
                }`}
                style={{ border: "none" }}
              >
                Informasi Produk
              </button>
            </div>
            <div className="col-6 px-0">
              <button
                onClick={() => handleChange("about")}
                className={`btn  btn-white text-center w-100 ${
                  info === "about"
                    ? "underlined-text-button"
                    : "underlined-text-button-second"
                }`}
                style={{ border: "none" }}
              >
                Tentang Produk
              </button>
            </div>
          </div>
          <div className="row mt-5">
            {info === "about" ? (
              <div className="col-12">
                {productDetail?.data?.details}
                <p>
                  Warna pada gambar dapat sedikit berbeda dengan warna asli
                  produk akibat pencahayaan saat proses photoshoot.
                </p>
              </div>
            ) : (
              <div className="col-12">
                <h5 className="font-bold bg-dange">Bahan & Perawatan</h5>
                <div className="d-flex mt-4">
                  <p className="d-flex align-items-center p-1">
                    <PaperClipOutlined />
                  </p>
                  <p className="font-bold w-25">Bahan</p>
                  <p style={{ marginLeft: "-10px" }}>Katun</p>
                </div>
                <hr />
                <div className="d-flex">
                  <p className="d-flex align-items-center p-1">
                    <EyeOutlined />
                  </p>
                  <p className="font-bold w-25">Petunjuk Perawatan</p>
                  <span>
                    Dicuci dengan detergen yang lembut, Jangan menggunakan
                    pemutih.
                  </span>
                </div>
                <hr />
              </div>
            )}
          </div>
          <div className="row mt-5">
            <div className="col-12">
              <p className="font-bold">Rincian</p>
              <p>
                <strong>SKU</strong> 6E58BAA957B4A0GS
              </p>
              <p>
                <strong>Warna</strong> Black
              </p>
              <p>
                <strong>Leher</strong> Berkerah
              </p>
              <p>
                <strong>Motif</strong> Solid
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <h5 className="font-bold">Penilaian & Ulasan</h5>
            <div className="d-flex justify-content-space-between align-items-center">
              <h1>${productDetail?.data?.rate} / 5</h1>
              <p className="d-flex fs-3 align-items-center pt-2 px-2 text-warning">
                <StarFilled />
              </p>
              <p className="d-flex fs-3 px-1 align-items-center pt-2 text-warning">
                <StarFilled />
              </p>
              <p className="d-flex fs-3 px-1 align-items-center pt-2 text-warning">
                <StarFilled />
              </p>
              <p className="d-flex fs-3 px-1 align-items-center pt-2 text-warning">
                <StarFilled />
              </p>
              <p className="d-flex fs-3 px-1 align-items-center pt-2 text-warning">
                <StarFilled />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
