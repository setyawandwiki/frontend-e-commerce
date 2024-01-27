import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../features/user/userSlice";
import { Link } from "react-router-dom";

const ProfileDetail = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile());
  }, []);

  return (
    <div className="col-9">
      <div className="col-12">
        <h4 style={{ background: "#dfdfdf" }} className="mx-0 p-3 text-dark">
          Informasi Kontrak
        </h4>
        <div className="d-flex justify-content-between py-5">
          <div className="col-11">
            {" "}
            <div style={{ lineHeight: "9px" }} className="">
              <p>
                Nama : {user?.user?.data?.firstName}{" "}
                {user?.user?.data?.lastName}
              </p>
              <p>E-mail : {user?.user?.data?.email}</p>
              <p>Tanggal : 199******5</p>
              <p>Password : *****</p>
            </div>
          </div>
          <div className="col-1">
            <Link to="edit" className="btn border border-dark">
              ubah
            </Link>
          </div>
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
