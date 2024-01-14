import {
  EyeOutlined,
  HeartOutlined,
  PaperClipOutlined,
  StarFilled,
  TagsOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const [info, setInfo] = useState("info");
  const handleChange = (param) => {
    setInfo(param);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-7">
          <div className="row">
            <div className="col-6 pr-2  pt-5 pb-3">
              <img
                src="https://dynamic.zacdn.com/ydd6jNCI8GxBbre_GemPDagSmnk=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/hush-puppies-7121-7463814-1.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-6 pr-2 pt-5 pb-3">
              <img
                src="https://dynamic.zacdn.com/ydd6jNCI8GxBbre_GemPDagSmnk=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/hush-puppies-7121-7463814-1.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <img
                src="https://dynamic.zacdn.com/ydd6jNCI8GxBbre_GemPDagSmnk=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/hush-puppies-7121-7463814-1.jpg"
                alt=""
                className="img-fluid product-img-small"
              />
            </div>
          </div>
        </div>
        <div className="col-5 pt-5">
          <h3 className="font-light">Hush Puppies</h3>
          <p>Tango 4 basic polo</p>
          <span
            className="border px-2 w-25 d-flex align-items-center rounded border-danger font-bold text-danger"
            style={{ gap: "2px" }}
          >
            <TagsOutlined className="pt-1" />
            <span className="">Rp 179.000</span>
          </span>
          <h5 className="font-bold pt-3">Rp 179.000</h5>
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
              <Link type="button" className="btn btn-dark w-100 py-3">
                Masukkan ke Tas
              </Link>
            </div>
            <div
              className="col-2 border-dark border d-flex align-items-center justify-content-center rounded"
              style={{ cursor: "pointer" }}
            >
              <HeartOutlined className="fs-4 font-light text-secondary" />
            </div>
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
                <ul>
                  <li>- Polo shirt desain basic untuk tampilan urban casual</li>
                  <li>- Warna hitam</li>
                  <li>- Detail kerah</li>
                  <li>- Unlined</li>
                  <li>- Regular fit</li>
                  <li>- Kancing depan</li>
                  <li>
                    Material poliester kombinasi tidak transparan, ringan, dan
                    tidak stretch
                  </li>
                  <li>
                    Tinggi model 185cm, lingkar dada 97cm, mengenakan ukuran L
                  </li>
                </ul>
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
              <h1>49.5 / 5</h1>
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
