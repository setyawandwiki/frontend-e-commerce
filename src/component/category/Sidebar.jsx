import { SearchOutlined, StarFilled } from "@ant-design/icons";
import React from "react";
import PaginatedItems from "../Pagination/PaginatedItems";

const Sidebar = () => {
  return (
    <div className="col-3 h-100">
      <div>
        <h5 className="font-bold">Brand</h5>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text bg-white" id="basic-addon1">
              <span>
                <SearchOutlined className="fs-4" />
              </span>
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
      <div>
        <h5 className="font-bold pt-3">Rating</h5>
        <div className="input-group d-flex flex-column">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              <span className="d-flex align-items-center">
                <StarFilled className="text-warning" />
                &ensp; 2 & ke atas
              </span>
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              <span className="d-flex align-items-center">
                <StarFilled className="text-warning" />
                &ensp; 3 & ke atas
              </span>
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              <span className="d-flex align-items-center">
                <StarFilled className="text-warning" />
                &ensp; 4 & ke atas
              </span>
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              <span className="d-flex align-items-center">
                <StarFilled className="text-warning" />
                &ensp; 5
              </span>
            </label>
          </div>
        </div>
      </div>
      <div>
        <h5 className="font-bold pt-3">
          Harga{" "}
          <span className="text-secondary fs-6 font-light">
            (IDR 10000 - 25000)
          </span>
        </h5>
        <div className="input-group d-flex flex-column">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              <span className="d-flex align-items-center">
                Rp. 0 - Rp. 100000
              </span>
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              <span className="d-flex align-items-center">
                Rp. 100000 - Rp. 250000
              </span>
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              <span className="d-flex align-items-center">
                Rp. 250000 - Rp. 500000
              </span>
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              <span className="d-flex align-items-center">
                Rp. 500000 - Rp. 1000000
              </span>
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              <span className="d-flex align-items-center">
                Rp. 1000000 {">"}
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
