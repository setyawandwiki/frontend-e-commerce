import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteCart,
  getCarts,
  updateOrderCart,
} from "../features/cart/cartSlice";
import { getUserProfile } from "../features/user/userSlice";
import {
  deleteProduct,
  getProductSeller,
  getProducts,
} from "../features/product/productSlice";
import PaginatedProductSeller from "../component/Pagination/PaginatedProductSeller";

const ProductSeller = () => {
  const product = useSelector((state) => state.product);

  const dispatch = useDispatch();

  const getAllCarts = async () => {
    try {
      const data = await dispatch(getCarts());
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCarts();
    dispatch(getUserProfile());
    dispatch(getProductSeller());
  }, []);

  return (
    <div className="col-9">
      <div className="col-12">
        <h4 style={{ background: "#dfdfdf" }} className="mx-0 p-3 text-dark">
          Produk Anda
        </h4>
        <div className="d-flex justify-content-end">
          <Link to="add" className="btn btn-success">
            Add Product
          </Link>
        </div>
        <div className="d-flex justify-content-between py-5">
          <div className="col-12">
            {product.product.data?.content?.length > 0 ? (
              <div className="row">
                <PaginatedProductSeller
                  itemsPerPage={product?.product?.data?.totalPages}
                  product={product.product.data?.content}
                />
              </div>
            ) : (
              <>
                <h1 className="text-center">you have no product1</h1>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSeller;
