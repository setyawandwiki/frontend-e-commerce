import { PushpinOutlined } from "@ant-design/icons";
import React from "react";

const Cart = () => {
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
                <h5 className="font-bold">Dwiki Setyawan</h5>
                <p>bojong gede, Jawa Barat, Bogor (Kabupaten), 16161</p>
              </div>
            </div>
            <button className="btn h-50 btn-white border border-dark">
              Ubah
            </button>
          </div>
          <div className="bg-light rounded p-3">
            <p className="font-lightBold">ZALORA Luar Negeri (2 barang)</p>
            <div className="line-heightCart">
              <p className="fontsize-medium">Estimasi biaya pengiriman :</p>
              <p className="fontsize-medium">Rp 29.000</p>
            </div>
            <div
              className="card my-3 d-flex p-3 flex-row shadow"
              style={{ border: "none" }}
            >
              <img
                className="card-img-top w-25"
                src="https://static-id.zacdn.com/p/polo-ralph-lauren-2906-2508624-1.jpg"
                alt="Card image cap"
              />
              <div className="card-body w-100">
                <h5 className="card-title">Polo Ralph Lauren</h5>
                <p className="card-text">Crew Sleep Top</p>
                <p>Pengiriman pada: 20-24 Jan</p>
                <div className="d-flex justify-content-between">
                  <select
                    className="custom-select border rounded"
                    id="inputGroupSelect01"
                  >
                    <option selected>Jml : 1</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  <p className="font-bold text-danger">Rp 851.400</p>
                </div>
              </div>
            </div>
            <div
              className="card my-3 d-flex p-3 flex-row shadow"
              style={{ border: "none" }}
            >
              <img
                className="card-img-top w-25"
                src="https://static-id.zacdn.com/p/polo-ralph-lauren-2906-2508624-1.jpg"
                alt="Card image cap"
              />
              <div className="card-body w-100">
                <h5 className="card-title">Polo Ralph Lauren</h5>
                <p className="card-text">Crew Sleep Top</p>
                <p>Pengiriman pada: 20-24 Jan</p>
                <div className="d-flex justify-content-between">
                  <select
                    className="custom-select border rounded"
                    id="inputGroupSelect01"
                  >
                    <option selected>Jml : 1</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  <p className="font-bold text-danger">Rp 851.400</p>
                </div>
              </div>
            </div>
            <div
              className="card my-3 d-flex p-3 flex-row shadow"
              style={{ border: "none" }}
            >
              <img
                className="card-img-top w-25"
                src="https://static-id.zacdn.com/p/polo-ralph-lauren-2906-2508624-1.jpg"
                alt="Card image cap"
              />
              <div className="card-body w-100">
                <h5 className="card-title">Polo Ralph Lauren</h5>
                <p className="card-text">Crew Sleep Top</p>
                <p>Pengiriman pada: 20-24 Jan</p>
                <div className="d-flex justify-content-between">
                  <select
                    className="custom-select border rounded"
                    id="inputGroupSelect01"
                  >
                    <option selected>Jml : 1</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  <p className="font-bold text-danger">Rp 851.400</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 shadow p-3 h-50">
          <div className="d-flex justify-content-between underlined-text-button-third">
            <p className="font-bold">Subtotal (2 produk)</p>
            <p className="font-bold">Rp 3.282.600</p>
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
            <p className="font-bold">Rp 3.311.600</p>
          </div>
          <button className="btn btn-dark w-100">Lanjut ke Pembayaran</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
