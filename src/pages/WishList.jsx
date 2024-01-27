import { HeartOutlined, StarFilled } from "@ant-design/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteWishList,
  getAllWishlist,
} from "../features/wishList/wishListSlice";
import { Link } from "react-router-dom";

const WishList = () => {
  const { isLoading, message, isError, wishlist } = useSelector(
    (state) => state.wishlist
  );
  const dispatch = useDispatch();

  const getAllWishlistUser = async () => {
    try {
      const data = await dispatch(getAllWishlist());
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteWishlist = async (id) => {
    try {
      await dispatch(deleteWishList(id));
      return dispatch(getAllWishlist());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllWishlistUser();
  }, []);

  console.log(wishlist.data);
  return (
    <div className="container w-75 mt-5">
      <div className="row">
        {wishlist?.data?.length !== 0 ? (
          <>
            {wishlist?.data?.map((elem) => {
              return (
                <div className="col-2 shadow-sm" key={elem.id}>
                  <div className="card relative border-0">
                    <Link to={`../product/${elem.product.id}`}>
                      <img
                        className="card-img-top wishlist-card-img-responsive"
                        src={
                          elem.product.image1
                            ? `http://localhost:8080/api/v1/product/images/${elem.product.image1}`
                            : "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
                        }
                        alt="Card image cap"
                      />
                    </Link>
                    <span
                      className="d-flex align-items-center absolute"
                      style={{ right: 5, cursor: "pointer" }}
                    >
                      <span
                        onClick={() => handleDeleteWishlist(elem.id)}
                        className="font-small font-bold text-danger"
                      >
                        X
                      </span>
                    </span>
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <p className="font-bold">
                          {elem.product.title ? elem.product.title : "no title"}
                        </p>
                      </div>
                      <p className="card-text">{elem.product.name}</p>
                      <p className="text-danger font-bold">
                        Dari Rp {elem.product.price}
                      </p>
                      <div className="dropdown">
                        <button
                          className="btn btn-secondary dropdown-toggle w-100 bg-white text-secondary"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Pilih Ukuran
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                      <Link
                        to={`/product/${elem.product.id}`}
                        type="button"
                        className="btn dropdown btn-dark w-100 mt-3"
                      >
                        Masukkan ke tas
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <h1 className="text-center py-5">There is no wishlist</h1>
        )}
      </div>
    </div>
  );
};

export default WishList;
