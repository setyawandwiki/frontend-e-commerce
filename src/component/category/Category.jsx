import Sidebar from "./Sidebar";
import PaginatedItems from "../Pagination/PaginatedItems";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductByQuery } from "../../features/product/productSlice";

const Category = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    const handleGetAllProductQuery = async () => {
      try {
        await dispatch(getProductByQuery({ category }));
      } catch (error) {
        console.log(error);
      }
    };

    if (category) {
      handleGetAllProductQuery();
    }
  }, [category, dispatch]);

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <Sidebar />
          <div className="col-9 h-100 h-100">
            <span className="fs-4">{category}</span>
            <span className="fs-5 text-secondary p-3">
              {product?.product?.data?.length}
            </span>
            <div className="container-fluid my-3 px-0">
              {product?.product?.data?.length > 0 ? (
                <div className="row">
                  <PaginatedItems
                    itemsPerPage={product?.product?.data?.length}
                    category={category}
                  />
                </div>
              ) : (
                <>
                  <h1 className="text-center">THERE IS NOT PRODUCT</h1>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
