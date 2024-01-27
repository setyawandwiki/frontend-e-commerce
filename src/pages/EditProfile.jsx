import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserProfile, updateUserProfile } from "../features/user/userSlice";

const EditProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [form, setForm] = useState({
    gender: "",
    firstName: "",
    lastName: "",
    birthDate: "",
  });

  const initializeForm = () => {
    const userData = user?.user?.data;
    if (userData) {
      setForm({
        gender: userData.gender || "",
        firstName: userData.firstName || "",
        lastName: userData.lastName || "",
        birthDate: userData.birthDate || "",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e, form) => {
    e.preventDefault();
    dispatch(updateUserProfile(form));
    dispatch(getUserProfile());
  };

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  useEffect(() => {
    initializeForm();
  }, [user?.user?.data]);

  return (
    <div className="col-9 mb-5">
      <div className="col-12">
        <h4 style={{ background: "#dfdfdf" }} className="mx-0 p-3 text-dark">
          Informasi Kontrak
        </h4>
        <div className="p-3">
          <h5>Email</h5>
          <p>
            <strong>{user?.user?.data?.email}</strong>
          </p>
        </div>
        <div className="col-12 px-3">
          <form onSubmit={(e) => handleSubmit(e, form)}>
            <div className="form-group py-3">
              <label htmlFor="exampleFormControlSelect1">Gender</label>
              <select
                required
                className="form-control w-50"
                id="exampleFormControlSelect1"
                name="gender"
                value={form.gender}
                onChange={handleChange}
              >
                <option value="" selected disabled>
                  pilih
                </option>
                <option value="MALE">MALE</option>
                <option value="FEMALE">FEMALE</option>
              </select>
            </div>

            <div className="form-group py-3">
              <label htmlFor="exampleInputEmail1">Nama Depan *</label>
              <input
                type="text"
                className="form-control w-50"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Nama depan"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group py-3">
              <label htmlFor="exampleInputEmail2">Nama Belakang *</label>
              <input
                type="text"
                className="form-control w-50"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
                placeholder="Nama Belakang"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group py-3">
              <label htmlFor="datepicker">Tanggal lahir</label>
              <input
                type="date"
                id="datepicker"
                className="form-control w-50"
                onChange={handleChange}
                name="birthDate"
                value={form.birthDate}
                placeholder="YYYY-MM-DD"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
