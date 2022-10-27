import "./ExpenseItem.css";
import React from "react"; // JSX에서는 굳이 안써도 되지만, 내부에서 돌아가는걸 명시하기위해 썻다
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price" amount={props.amount}>
          {props.amount}
        </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
