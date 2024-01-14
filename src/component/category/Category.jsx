import { HeartOutlined, StarFilled } from "@ant-design/icons";
import Sidebar from "./Sidebar";
import PaginatedItems from "../Pagination/PaginatedItems";

const Category = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <Sidebar />
          <div className="col-9 h-100 h-100">
            <span className="fs-4">Baju Pria</span>
            <span className="fs-5 text-secondary p-3">14.236 barang</span>
            <div className="container-fluid my-3 px-0">
              <div className="row">
                <PaginatedItems itemsPerPage={6} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
