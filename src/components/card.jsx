import Reac from "react";
import ReactDOM from "react-dom";

const card = (props) => {
  return (
    <div>
      <div className="image-section">
        <img src={`../Images/${props.item.coverImg}`} alt="" />
      </div>
      <div className="review-section">
        <img src="../Images/star.png" alt="" />
        <span>{props.item.stats.rating}</span>
        <span>{props.item.stats.reviewcount}</span>
        <span>{props.item.stats.location}</span>
      </div>
      <div className="title-section">
        <p>{props.item.title}</p>
        <p>From ${props.item.price}/person</p>
      </div>
    </div>
  );
};

export default card;
