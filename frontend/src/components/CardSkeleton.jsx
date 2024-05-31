import "./CardSkeleton.css";
const CardSkeleton = ({ counts }) => {
  return Array(counts)
    .fill(0)
    .map((_, i) => (
      <div className="card-skeleton-container" key={i}>
        <div className="category-skeleton"></div>
        <div className="name-skeleton"></div>
        <div className="price-skeleton"></div>
        <hr />
        <div className="notetitle-skeleton"></div>
        <div className="note-skeleton"></div>
        {/* <div className="btn">
      <a className="update-btn">Update</a>
      <a className="delete-btn">Delete</a>
    </div> */}
      </div>
    ));
};

export default CardSkeleton;
