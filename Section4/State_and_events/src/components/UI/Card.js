import React from "react"; // JSX에서는 굳이 안써도 되지만, 내부에서 돌아가는걸 명시하기위해 썻다
import "./Card.css";
// Rapper Components
const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};
export default Card;
