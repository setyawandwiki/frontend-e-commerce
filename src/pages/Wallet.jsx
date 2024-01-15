import React from "react";

const Wallet = () => {
  return (
    <div className="col-9">
      <div className="row">
        <div className="col-12">
          <h5 style={{ background: "#dfdfdf" }} className="p-3">
            Store Credit
          </h5>
          <p>SALDO</p>
          <p>Anda mempunyai Rp 0 dalam store credit anda</p>
          <p>Tekan tombol ini agar saldo anda kembali</p>
          <button type="button" className="btn btn-success">
            Recalculate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
