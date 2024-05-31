/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import "./Pagination.css";
function Pagination({ totalPages, currentPage, paginate }) {
  let atas = "atas";
  return (
    <>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <a
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={index + 1 === currentPage ? "active" : ""}
            href={atas ? "#atas" : ""}
          >
            {index + 1}
          </a>
        ))}
      </div>
    </>
  );
}

export default Pagination;
