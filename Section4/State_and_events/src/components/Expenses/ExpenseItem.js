import "./ExpenseItem.css";
import React, { useState } from "react"; // JSX에서는 굳이 안써도 되지만, 내부에서 돌아가는걸 명시하기위해 썻다
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Update");
    console.log(title); // "Update" 출력 -> setTitle을 하더라도 바로 변경된 값이 반영되지 않는다.
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price" amount={props.amount}>
          {props.amount}
        </div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
