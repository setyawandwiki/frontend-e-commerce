import React from "react";

const ProfileDetail = () => {
  return (
    <div className="col-9">
      <div className="col-12">
        <h4 style={{ background: "#dfdfdf" }} className="mx-0 p-3 text-dark">
          Informasi Kontrak
        </h4>
        <div style={{ lineHeight: "9px" }} className="pt-5">
          <p>Nama : Dwiki Setyawan</p>
          <p>E-mail : set*******@gmail.com</p>
          <p>Tanggal : 199******5</p>
          <p>Password : *****</p>
        </div>
      </div>
      <div className="col-12">
        <h4 style={{ background: "#dfdfdf" }} className="mx-0 p-3 text-dark">
          Informasi Kontrak
        </h4>
        <div className="pt-5">
          <h5 className="font-bold pb-3">Alamat</h5>
          <p>dwiki setyawan, 082125603651 </p>
          <p>bojong gede, Cibinong, Bogor (Kabupaten), Jawa Barat, 16161 </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
