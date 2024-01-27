import ReactPaginate from "react-paginate";
import { HeartOutlined, StarFilled } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getProductByQuery } from "../../features/product/productSlice";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems, product }) {
  return (
    <>
      {product?.product?.data !== undefined && product.product.data.length ? (
        <>
          {currentItems &&
            currentItems.map((item, index) => (
              <div className="" key={index}></div>
            ))}
          {product?.product?.data &&
            product.product.data.map((elem, index) => (
              <Link
                to={`/product/${elem.id}`}
                className="col-4"
                key={Math.random()}
              >
                <div
                  className="card relative border-0"
                  style={{ width: "18rem" }}
                >
                  <img
                    src={
                      elem.image1
                        ? `http://localhost:8080/api/v1/product/images/${elem.image1}`
                        : "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
                    }
                    className="card-img-top homepage-card-img-responsive"
                    alt="..."
                  />
                  <span className="d-flex align-items-center absolute">
                    <StarFilled className="text-warning font-small" />
                    <span className="font-small">5.0</span>
                  </span>
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <h4 className="font-bold">MOC</h4>
                      {/* Assuming HeartOutlined is imported from Ant Design */}
                      <HeartOutlined className="fs-4" />
                    </div>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up
                    </p>
                    <p className="text-danger font-bold">Rp 189.900</p>
                  </div>
                </div>
              </Link>
            ))}
        </>
      ) : (
        <h1>There is no product</h1>
      )}
    </>
  );
}

function PaginatedItems({ itemsPerPage, category }) {
  const params = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    const { selected } = event;
    dispatch(getProductByQuery({ category: params.category, selected }));
    setItemOffset(newOffset);
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

export default PaginatedItems;
