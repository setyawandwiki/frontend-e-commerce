import { PushpinOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCart,
  getCarts,
  updateOrderCart,
} from "../features/cart/cartSlice";
import { getUserProfile } from "../features/user/userSlice";
import { getProducts } from "../features/product/productSlice";

const Cart = () => {
  const [qty, setQty] = useState(1);
  const { isLoading, message, isError, cart } = useSelector(
    (state) => state.cart
  );
  const user = useSelector((state) => state.user);
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

  const deleteItemCart = async (id) => {
    try {
      await dispatch(deleteCart(id));
      return await dispatch(getCarts());
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = async (e, id) => {
    try {
      const newQty = e.target.value;
      setQty(newQty);
      await dispatch(updateOrderCart({ id, qty: newQty }));
      return await dispatch(getCarts());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCarts();
    dispatch(getUserProfile());
    dispatch(getProducts());
  }, []);

  console.log(qty);
  return (
    <div className="container w-75 mt-4">
      <div className="row">
        <div className="col-8">
          <p>Tas (2)</p>
          <div className="d-flex justify-content-between shadow p-3 mb-5 rounded">
            <div className="d-flex justify-content-between">
              <p className="p-1">
                <PushpinOutlined className="fs-5" />
              </p>
              <div className="">
                <h5 className="font-bold">
                  {user.user.data?.firstName} {user.user.data?.lastName}
                </h5>
                <p>
                  {user.user.data?.addresses
                    .filter((elem) => elem.isActive)
                    .map((elem) => {
                      return (
                        <>
                          {elem.street}, {elem.city} {elem.subdistrict}{" "}
                          {elem.province}
                        </>
                      );
                    })}
                </p>
              </div>
            </div>
            <button className="btn h-50 btn-white border border-dark">
              Ubah
            </button>
          </div>
          <div className="bg-light rounded p-3">
            <p className="font-lightBold">
              ZALORA Luar Negeri ({cart?.data?.length} barang)
            </p>
            <div className="line-heightCart">
              <p className="fontsize-medium">Estimasi biaya pengiriman :</p>
              <p className="fontsize-medium">Rp 29.000</p>
            </div>
            {cart?.data?.map((elem) => {
              return (
                <div
                  key={Math.random()}
                  className="card my-3 d-flex p-3 flex-row shadow"
                  style={{ border: "none" }}
                >
                  {/* {JSON.stringify(elem.product)} */}
                  <img
                    src={
                      elem.product.image1
                        ? `http://localhost:8080/api/v1/product/images/${elem.product.image1}`
                        : "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
                    }
                    className="card-img-top cart-img-responsive"
                    alt="..."
                  />
                  <div className="card-body w-100">
                    <h5 className="card-title">
                      {elem.product.title ? elem.product.title : "No title"}
                    </h5>
                    <p className="card-text">{elem.product.name}</p>
                    <p>Pengiriman pada: 20-24 Jan</p>
                    <div className="d-flex justify-content-between">
                      {/* {JSON.stringify(elem.id)} */}
                      <select
                        onChange={(e) => handleChange(e, elem.id)}
                        className="custom-select border rounded"
                        id="inputGroupSelect01"
                      >
                        <option selected value={elem.quantity}>
                          Jml : {elem.quantity}
                        </option>
                        {(() => {
                          const arr = [];
                          for (
                            let i = 1;
                            i <=
                            product.product.data?.find((elem) => elem.id === 23)
                              .quantity;
                            i++
                          ) {
                            arr.push(<option value={i}>{i}</option>);
                          }
                          return arr;
                        })()}
                      </select>
                      <p className="font-bold text-danger">
                        Rp {elem.product.price}
                      </p>
                    </div>
                  </div>
                  <span
                    className="fs-3"
                    style={{ cursor: "pointer" }}
                    onClick={() => deleteItemCart(elem.id)}
                  >
                    x
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-4 shadow p-3 h-50">
          <div className="d-flex justify-content-between underlined-text-button-third">
            <p className="font-bold">Subtotal ({cart?.data?.length} produk)</p>
            <p className="font-bold">
              Rp {cart?.data?.reduce((acc, curr) => acc + curr.price, 0)}
            </p>
          </div>
          <p className="pt-5" style={{ lineHeight: "1px" }}>
            Pengiriman
          </p>
          <div className="d-flex justify-content-between">
            <p className="text-secondary">Dari ZALORA Luar Negeri</p>
            <p className="font-bold">Rp 29.000</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Total(Termasuk GST)</p>
            <p className="font-bold">
              Rp{" "}
              {cart?.data?.reduce((acc, curr) => acc + curr.price, 0) + 29000}
            </p>
          </div>
          <button className="btn btn-dark w-100">Lanjut ke Pembayaran</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
