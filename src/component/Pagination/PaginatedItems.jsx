import ReactPaginate from "react-paginate";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { HeartOutlined, StarFilled } from "@ant-design/icons";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div className="col-4" key={Math.random()}>
            <div className="card relative border-0" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="https://dynamic.zacdn.com/XcltKChYDQw2GHC6utIKhN_SmaM=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/moc-8905-5052753-2.jpg"
                alt="Card image cap"
              />
              <span className="d-flex align-items-center absolute">
                <StarFilled className="text-warning font-small" />
                <span className="font-small">5.0</span>
              </span>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h4 className="font-bold">MOC</h4>
                  <HeartOutlined className="fs-4" />
                </div>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                </p>
                <p className="text-danger font-bold">Rp 189.900</p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
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
