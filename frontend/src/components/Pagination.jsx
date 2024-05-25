/* eslint-disable react/prop-types */
// import { useEffect } from "react";
import "./Pagination.css";
// import { getProductListPagination } from "../api";
// eslint-disable-next-line react/prop-types
function Pagination({ totalPages, currentPage, paginate }) {
  return (
    <>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={index + 1 === currentPage ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
}

export default Pagination;
