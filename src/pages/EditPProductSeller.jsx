import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getProductDetail,
  updateProductSeller,
} from "../features/product/productSlice";
import { getAllCategories, getCategory } from "../features/category/category";

const EditPProductSeller = () => {
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();

  const [form, setform] = useState({
    image1: "",
    image2: "",
    image3: "",
    name: "",
    details: "",
    quantity: "",
    price: "",
    rate: "",
    category: "",
    title: "",
  });

  const initializeForm = () => {
    setform({
      image1: productDetail?.data?.image1 || "",
      image2: productDetail?.data?.image2 || "",
      image3: productDetail?.data?.image3 || "",
      name: productDetail?.data?.name || "",
      details: productDetail?.data?.details || "",
      quantity: productDetail?.data?.quantity || "",
      price: productDetail?.data?.price || "",
      rate: productDetail?.data?.rate || "",
      category: productDetail?.data?.category || "",
      title: productDetail?.data?.title || "",
    });
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage1(URL.createObjectURL(event.target.files[0]));
    }
    if (event.target.files && event.target.files[0]) {
      setform((prevForm) => ({
        ...prevForm,
        image1: event.target.files[0],
      }));
    }
  };
  const onImageChange2 = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage2(URL.createObjectURL(event.target.files[0]));
    }
    if (event.target.files && event.target.files[0]) {
      setform((prevForm) => ({
        ...prevForm,
        image2: event.target.files[0],
      }));
    }
  };
  const onImageChange3 = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage3(URL.createObjectURL(event.target.files[0]));
    }
    if (event.target.files && event.target.files[0]) {
      setform((prevForm) => ({
        ...prevForm,
        image3: event.target.files[0],
      }));
    }
  };

  const handleChange = (e) => {
    setform((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const { id } = useParams();
  const { productDetail, isLoading, isError, message } = useSelector(
    (state) => state.product
  );
  const category = useSelector((state) => state.category);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetail(id));
    dispatch(getAllCategories());
  }, [dispatch]);

  useEffect(() => {
    if (productDetail?.data) {
      initializeForm();
    }
  }, [productDetail?.data]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("id", id);
    formData.append("name", form.name);
    formData.append("details", form.details);
    formData.append("quantity", parseInt(form.quantity));
    formData.append("price", form.price);
    formData.append("rate", form.rate);
    formData.append("category", form.category);
    formData.append("title", form.title);
    formData.append("image1", event.target.elements.image1.files[0]);
    formData.append("image2", event.target.elements.image2.files[0]);
    formData.append("image3", event.target.elements.image3.files[0]);

    dispatch(updateProductSeller(formData));
  };

  console.log(productDetail);

  return (
    <div className="col-9">
      <div className="col-12">
        <h4 style={{ background: "#dfdfdf" }} className="mx-0 p-3 text-dark">
          Edit Produk Anda
        </h4>
        <div className="d-flex justify-content-between py-5">
          <div className="col-12">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">
                  Image 1 :
                </label>
                <input
                  className="form-control w-50"
                  type="file"
                  id="formFile"
                  name="image1"
                  onChange={onImageChange}
                />
                {!image1 ? (
                  <>
                    <img
                      src={
                        form.image1
                          ? `http://localhost:8080/api/v1/product/images/${form.image1}`
                          : "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
                      }
                      className="card-img-top w-25 p-0 m-0"
                      alt="..."
                    />
                  </>
                ) : (
                  <>
                    {" "}
                    <img
                      className="w-25 img-fluid"
                      alt="preview image"
                      src={image1}
                    />
                  </>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">
                  Image 2 :
                </label>
                <input
                  className="form-control w-50"
                  type="file"
                  id="formFile"
                  name="image2"
                  onChange={onImageChange2}
                />
                {!image2 ? (
                  <>
                    <img
                      src={
                        form.image2
                          ? `http://localhost:8080/api/v1/product/images/${form.image2}`
                          : "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
                      }
                      className="card-img-top w-25 p-0 m-0"
                      alt="..."
                    />
                  </>
                ) : (
                  <>
                    {" "}
                    <img
                      className="w-25 img-fluid"
                      alt="preview image"
                      src={image2}
                    />
                  </>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">
                  Image 3 :
                </label>
                <input
                  className="form-control w-50"
                  type="file"
                  id="formFile"
                  name="image3"
                  onChange={onImageChange3}
                />
                {!image3 ? (
                  <>
                    <img
                      src={
                        form.image3
                          ? `http://localhost:8080/api/v1/product/images/${form.image3}`
                          : "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
                      }
                      className="card-img-top w-25 p-0 m-0"
                      alt="..."
                    />
                  </>
                ) : (
                  <>
                    {" "}
                    <img
                      className="w-25 img-fluid"
                      alt="preview image"
                      src={image3}
                    />
                  </>
                )}
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Title
                </label>
                <input
                  type="text"
                  className="form-control w-50"
                  id="exampleFormControlInput1"
                  placeholder="Title"
                  name="title"
                  onChange={handleChange}
                  value={form.title}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  name
                </label>
                <input
                  value={form?.name}
                  type="text"
                  className="form-control w-50"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  name="name"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  details
                </label>
                <textarea
                  className="form-control w-50"
                  id="exampleFormControlTextarea1"
                  value={form.details}
                  name="details"
                  onChange={handleChange}
                  rows="3"
                ></textarea>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  min={1}
                  max={100}
                  className="form-control w-50"
                  id="exampleFormControlInput1"
                  placeholder="quantity"
                  value={form.quantity}
                  name="quantity"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Price
                </label>
                <input
                  type="text"
                  value={form.price}
                  className="form-control w-50"
                  id="exampleFormControlInput1"
                  placeholder="price"
                  name="price"
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Rate
                </label>
                <input
                  type="text"
                  value={form.rate}
                  className="form-control w-50"
                  id="exampleFormControlInput1"
                  placeholder="rate"
                  name="rate"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <select
                  name="category"
                  onChange={handleChange}
                  className="custom-select p-2"
                >
                  <option disabled selected value={form?.category?.name}>
                    {form?.category?.name}
                  </option>
                  {category?.category?.data?.map((elem) => {
                    return (
                      <>
                        <option value={elem.name}>{elem.name}</option>
                      </>
                    );
                  })}
                </select>
              </div>
              <button className="btn btn-success">submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPProductSeller;
