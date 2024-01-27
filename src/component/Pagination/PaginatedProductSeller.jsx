import ReactPaginate from "react-paginate";
import { HeartOutlined, StarFilled } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getProductSeller,
} from "../../features/product/productSlice";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems, product }) {
  const dispatch = useDispatch();
  const deleteProductHandler = async (id) => {
    try {
      await dispatch(deleteProduct(id));
      return await dispatch(getProductSeller());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {product !== undefined && product.length ? (
        <>
          {currentItems &&
            currentItems.map((item, index) => (
              <div className="" key={Math.random()}></div>
            ))}
          {product &&
            product.map((elem, index) => (
              <div
                key={Math.random()}
                className="card my-3 d-flex p-3 flex-row shadow"
                style={{ border: "none" }}
              >
                <img
                  src={
                    elem.image1
                      ? `http://localhost:8080/api/v1/product/images/${elem.image1}`
                      : "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
                  }
                  className="card-img-top cart-img-responsive"
                  alt="..."
                />
                <div className="card-body w-100">
                  <h5 className="card-title">
                    {elem.title ? elem.title : "No title"}
                  </h5>
                  <p className="card-text">{elem.name}</p>
                  <p>{elem.details}</p>
                  <p>Quantity : {elem.quantity}</p>
                </div>
                <Link
                  style={{ height: "30px" }}
                  to={`edit/${elem.id}`}
                  className="btn border border-dark mt-1"
                >
                  ubah
                </Link>
                <span
                  onClick={() => deleteProductHandler(elem.id)}
                  className="fs-3 px-3"
                  style={{ cursor: "pointer" }}
                >
                  x
                </span>
              </div>
            ))}
        </>
      ) : (
        <h1>There is no product</h1>
      )}
    </>
  );
}

function PaginatedProductSeller({ itemsPerPage, product }) {
  const dispatch = useDispatch();

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    const { selected } = event;
    setItemOffset(newOffset);
    dispatch(getProductSeller(selected));
  };

  return (
    <>
      <Items currentItems={currentItems} product={product} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="Berikutnya >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< Sebelumnya"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="previous-num"
        nextLinkClassName="next-num"
        activeClassName="active-num"
      />
    </>
  );
}

export default PaginatedProductSeller;
