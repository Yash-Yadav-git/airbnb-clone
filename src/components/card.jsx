import Reac from "react";
import ReactDOM from "react-dom";

const card = (props) => {
  return (
    <div className="image-section">
      <img
        src={`../Images/${props.item.coverImg}`}
        alt=""
        className="card-image"
      />

      <div className="review-section-wrapper">
        <img src="../Images/star.png" alt="" className="star-image" />
        <span>{props.item.stats.rating}</span>
        <span className="reviewCount">({props.item.stats.reviewCount}) . </span>
        <span className="location">{props.item.location}</span>
      </div>

      <p className="card-title">{props.item.title}</p>
      <p className="card-description">
        <b> From ${props.item.price} </b>/person
      </p>
    </div>
  );
};

export default card;
